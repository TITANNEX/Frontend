import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal,useModal,Text } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import WithdrawModal from './WithdrawModal'

interface WarningModalProps {
  max: BigNumber
  pid: number
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
}

const WarningModal: React.FC<WarningModalProps> = ({ onConfirm, onDismiss, max, pid, tokenName = '' }) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={max} onConfirm={onConfirm} tokenName={tokenName} />,
  )


  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal title={`Warning ! ${tokenName} pool is still live`} onDismiss={onDismiss}>
         <Text>You will Lose the 50 % of your Funds</Text>
      <ModalActions>
        <Button className="btn_yellow" variant="secondary" onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </Button>
        <Button
        className="btn_yellow" 
          onClick={onPresentWithdraw}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default WarningModal
