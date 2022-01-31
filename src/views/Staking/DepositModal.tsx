import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface DepositModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
  depositFeeBP?: number
}

const DepositModal: React.FC<DepositModalProps> = ({ max, onConfirm, onDismiss, tokenName = '' , depositFeeBP = 0}) => {
  const [val, setVal] = useState('')
  const [value, setValue] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setValue((parseInt((e.currentTarget.value)) * 10 ** 18).toString())
      setVal(e.currentTarget.value)
    },
    [setVal,setValue],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
    setValue(max.toString())
    console.log("full Balance : ",fullBalance)
  }, [fullBalance, setVal,max,setValue])

  return (
    <Modal title={`${TranslateString(316, 'Deposit')} ${tokenName} Tokens`} onDismiss={onDismiss}>
      <TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
        depositFeeBP={depositFeeBP}
      />
      <ModalActions>
        <Button className="btn_yellow" variant="secondary" onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </Button>
        <Button
        className="btn_yellow" 
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(value)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default DepositModal
