import BigNumber from 'bignumber.js'
import styled from 'styled-components'

import React, { useCallback, useMemo, useState } from 'react'
import { Heading, Card, CardBody, Flex, Button, Modal, Text, Image, Progress, Input } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface LaunchpadModalProps {
//   onConfirm: (amount: string) => void
  onDismiss?: () => void
 
}
const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
  border-radius:10px;
  margin-top:20px;
  margin-bottom:20px;
  background-color: ${({ theme }) => theme.colors.backgroundDisabled}
`
const LaunchpadModal: React.FC<LaunchpadModalProps> = ({onDismiss}) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
//   const fullBalance = useMemo(() => {
//     return getFullDisplayBalance(max)
//   }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

//   const handleSelectMax = useCallback(() => {
//     setVal(fullBalance)
//   }, [fullBalance, setVal])

  return (
    <Modal title={`${TranslateString(316, 'vacation Coin')}`} onDismiss={onDismiss}>
      {/* <TokenInput
        value={val}
        onChange={handleChange}
      /> */}
       <StyledFarmStakingCard className="white_box launc_card">
        <div className="card_pos">
        <div className="status_card succ_card">
            Completed
        </div>
      <CardBody className="modal_card">
      
        <div className="progres_theme">
        <Progress primaryStep={50} showProgressBunny />
        <p className="progress_txt">Progress (550 / 550 BNB)</p>
        <p className="progress_txt_right">50%</p>

        </div>
        <CardMidContent color="secondary">
         <ul className="coin_ul_desc">
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Your TAT Balance</Text>
                 </div>
                 <div>
                 <Text color="color_balck_grey" className="coin_name_title">N/A TAT</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Your Contribution</Text>
                 </div>
                 <div>
                 <Text color="color_balck_grey" className="coin_name_title">550 Tat</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Your Maximum Contribution</Text>
                 </div>
                 <div>
                 <Text color="color_balck_grey" className="coin_name_title">N/A TAT</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Remaining Contribution</Text>
                 </div>
                 <div>
                 <Text color="color_balck_grey" className="coin_name_title">N/A TAT</Text>
                 </div>
             </li>
            
         </ul>
        </CardMidContent>
        
        <div className="btn_div_grid">
        <div>
            <div className="input_grp">
            <Input placeholder="Enter Amount"/>
            <span>NEX</span>
            </div>
            <div className="max_buy_sec">
              <Button className="btn_orange btn">Max</Button>
              <Button className="btn_yellow btn">Buy</Button>
              </div>
          </div>
          <div>
            <div className="input_grp btn_grey">
            <Input value="N/A" disabled />
            <span>NEX</span>
            </div>
            <div className="max_buy_sec_1">
              <Button className="btn btn_blue">Claim</Button>
              
              </div>
          </div>
         
       
        </div>
      </CardBody>
      </div>
    </StyledFarmStakingCard>
    

    </Modal>
  )
}

export default LaunchpadModal
