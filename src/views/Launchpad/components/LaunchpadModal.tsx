import BigNumber from 'bignumber.js'
import styled from 'styled-components'

import React, { useCallback, useMemo, useState } from 'react'
import { Heading, Card, CardBody, Flex, Button, Modal, Text, Image, Progress, Input } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { provider } from 'web3-core'
import { AbiItem } from 'web3-utils'
import presaleABI from 'config/abi/presale.json'
import erc20 from 'config/abi/erc20.json'
import useWeb3 from 'hooks/useWeb3'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { getTATAddress } from 'utils/addressHelpers'

interface LaunchpadModalProps {
//   onConfirm: (amount: string) => void
  onDismiss?: () => void
  presaleAddress:string
  tokenAddress:string
  tokenName:string
  tokenSymbol:string
  ethereum?: provider
  account?: string

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
const LaunchpadModal: React.FC<LaunchpadModalProps> = ({onDismiss,presaleAddress,tokenSymbol,tokenAddress,tokenName, ethereum, account}) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const [invested, setInvested] = useState('0')
  const [claim, setClaim] = useState('0')
  const [youGet, setyouGet] = useState('0')
  const [min, setMin] = useState('0')
  const [allowance, setAllowance] = useState('')
  const [maxtoken, setMaxtoken] = useState('0')
  const [maxAmount, setmaxAmount] =  useState('0')
 
  const [maxLimit, setmaxLimit] =  useState('0')
  const [hardCap, sethardCap] =  useState('0')
  const [isClaimble, setisClaimble] =  useState(false)
  const [sold, setSold] = useState('')
  const [maxCont,setMaxCont] = useState(0);
  const [isWhitelisted, setisWhitelisted] = useState('')

  const [presaleContract, setpresaleContract] = useState('')
  const TranslateString = useI18n()
  const web3 = useWeb3();
  const presaleAbi = (presaleABI as unknown) as AbiItem
  const erc20Abi  =(erc20 as unknown) as AbiItem
  const Presale = new web3.eth.Contract(presaleAbi, presaleAddress);
  const erc20Token = new web3.eth.Contract(erc20Abi, getTATAddress());
  const presaleToken = new web3.eth.Contract(erc20Abi, tokenAddress);
  
//   const fullBalance = useMemo(() => {
//     return getFullDisplayBalance(max)
//   }, [max])

  const handleChange = async(data) => {
    console.log("change data : ",data)
      if(data !== null){
       console.log("Value  :",(data));
       const decimals =  await presaleToken.methods.decimals().call();
        console.log("decimals : ",decimals)
      if(data !== ""){
      const price = await Presale.methods.getTokensPerEth(new BigNumber(data).times(new BigNumber(10).pow(18)).toString()).call() / 10 ** parseInt(decimals);
      console.log("price per : ",price)
      setyouGet(price.toString());
      setVal(data.toString());
      console.log("value : ",val)
      }else{
        setyouGet("0");
      }
    }
    }
   
  
  const BuyToken = async () => {
    const data = parseInt(val);
    const amount = new BigNumber(data).times(new BigNumber(10).pow(18));
    if(data <= parseInt(allowance) && data >= parseInt(min) && data <= parseInt(maxtoken) ){
      await Presale.methods.buyToken(amount.toString()).send({ from: account })
      .then( async(result) => {
       handleData();  
     })
     .catch(e=>{
        console.log("Error");
     })
    }
  }

  const claimToken = async()=>{
    await Presale.methods.claimTokens().send({ from: account })
        .then( async(result) => {
         handleData();  
       })
       .catch(e=>{
          console.log("Error");
       })
  }

  const Approve = async(value) =>{
    const data = parseInt(val);
    const amount = new BigNumber(data).times(new BigNumber(10).pow(18));
   
    await erc20Token.methods.approve(presaleAddress,amount).send({ from: account })
    .then(async (result) => {
      console.log("result");
      const allownce = await erc20Token.methods.allowance(account,presaleAddress).call() / 10 ** 18;
      setAllowance(allownce.toString());
        
    }).catch(e => {
      console.log("Error ")
    })
  }
  

const handleData = async () => {
  try {
    
const investedT = await Presale.methods.getUserInvestments(account).call() / 10 ** 18;
setInvested(investedT.toString());

const soldT = await Presale.methods.soldTokens().call() / 10 ** 9;
setSold(soldT.toString())
const claimb = await Presale.methods.getUserClaimbale(account).call() / 10 ** 18;
setClaim(claimb.toString());
const minamount = await Presale.methods.minEthLimit().call() / 10 ** 18;
setMin(minamount.toString());
const maxamount = await Presale.methods.maxEthLimit().call() / 10 ** 18;
setMaxtoken(maxamount.toString());
const allownce = await erc20Token.methods.allowance(account,presaleAddress).call() / 10 ** 18;
setAllowance(allownce.toString());
const balanceMax = await erc20Token.methods.balanceOf(account).call() / 10 ** 18;
setmaxAmount(balanceMax.toString());
const whitelist = await Presale.methods.isWhitelisted().call();
setisWhitelisted(whitelist);
if(whitelist){
  const white = await Presale.methods.whitelistedAddresses(tokenAddress,account).call();
  setMaxCont(white);
}else{
  setMaxCont(maxamount);
}

  }
catch (e) {
      console.error(e)
    }
  }
  handleData()

  const handleSelectMax = () => {
    setVal(maxAmount)
    handleChange(maxAmount)
  }

  return (
    <Modal title={`${TranslateString(316, tokenName)}`} onDismiss={onDismiss}>
      {/* <TokenInput
        value={val}
        onChange={handleChange}
      /> */}
       <StyledFarmStakingCard className="white_box launc_card mt-0">
        <div className="card_pos">
        {/* <div className="status_card succ_card">
            Completed
        </div> */}
      <CardBody className="modal_card mt-0">
        
      
        <div className="progres_theme">
        <Progress primaryStep={(parseInt(sold)/parseInt(hardCap))*100} showProgressBunny />
       
        </div>
        <div className="progress_theme_new">
        <p className="progress_txt">Progress ({sold} / {hardCap} NEX)</p>
        <p className="progress_txt_right">{(parseInt(sold)/parseInt(hardCap))*100} % </p>

        </div>
        <CardMidContent color="secondary">
         <ul className="coin_ul_desc coin_ul_desc_new">
             <li>
                 <div>
                 <Text color="color_purple_new" className="coin_desc_li_one">Your NEX Balance</Text>
                 </div>
                 <div>
                 <Text color="color_purple_black" className="coin_name_title">{maxAmount} NEX</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple_new" className="coin_desc_li_one">Your Contribution</Text>
                 </div>
                 <div>
                 <Text color="color_purple_black" className="coin_name_title">{invested} NEX</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple_new" className="coin_desc_li_one">Your Maximum Contribution</Text>
                 </div>
                 <div>
                 <Text color="color_purple_black" className="coin_name_title"> {maxCont} NEX</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple_new" className="coin_desc_li_one">You will Get</Text>
                 </div>
                 <div>
                 <Text color="color_purple_black" className="coin_name_title">{youGet} {tokenSymbol}</Text>
                 </div>
             </li>
            
         </ul>
        </CardMidContent>
        
        <div className="btn_div_grid">
        <div>
            <div className="input_grp">
            <Input value={val} max={maxCont} min={min}  onChange={(e) => {setVal(e.currentTarget.value); handleChange(e.currentTarget.value)}} placeholder="Enter Amount"/>
            <span>NEX</span>
            </div>
            <div className="max_buy_sec">
              <Button onClick={handleSelectMax} className="btn_yellow btn">Max</Button>
              {(parseInt(val) <= parseInt(allowance))?
              <Button  disabled={pendingTx}  onClick={async () => {
                setPendingTx(true)
                await BuyToken()
                setPendingTx(false)
                onDismiss()
              }} className="btn_yellow btn">  {pendingTx ? TranslateString(488, 'Pending...') : TranslateString(464, 'Buy')}</Button>:
              <Button onClick={async () => {
                setPendingTx(true)
                await Approve(val)
                setPendingTx(false)
              }} className="btn_yellow_rev btn">{pendingTx ? TranslateString(488, 'Pending...') : TranslateString(464, 'Approve')}</Button>
              }
              </div>
          </div>
          <div>
            <div className="input_grp btn_grey">
            <Input value={claim} disabled />
            <span>{tokenSymbol}</span>
            </div>
            <div className="max_buy_sec_1">
              {isClaimble && parseInt(claim) > 0 ? 
              <Button onClick={async () => {
                setPendingTx(true)
                await claimToken()
                setPendingTx(false)
              }}  className="btn btn_blue">{pendingTx ? TranslateString(488, 'Pending...') : TranslateString(464, 'Claim')}</Button>:
              <Button className="btn btn_blue disabled">Claim</Button>
            }
              
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
