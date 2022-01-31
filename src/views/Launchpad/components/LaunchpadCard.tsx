import React, { useMemo,useState } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton, Text, Image, Progress, Button, Input, useModal } from '@pancakeswap-libs/uikit'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'
import useI18n from 'hooks/useI18n'
import useStake from 'hooks/useStake'
import { AbiItem } from 'web3-utils'
import BigNumber from 'bignumber.js'
import { provider } from 'web3-core'
import UnlockButton from 'components/UnlockButton'
import presaleABI from 'config/abi/presale.json'
import multicall from 'utils/multicall'
import useWeb3 from 'hooks/useWeb3'

import LaunchpadModal from './LaunchpadModal'



// import { getFarmApy } from 'utils/apy'
// import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  tokenName?: string
  pid?: number
  depositFeeBP?: number
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
interface LaunchCardProps {
presaleAddress:string
tokenAddress:string
tokenName:string
tokenSymbol:string
ethereum?: provider
account?: string
price?:number
detail?:number


}




const LaunchpadCard: React.FC<LaunchCardProps> = ({ detail,presaleAddress,price,tokenSymbol,tokenAddress,tokenName, ethereum, account }) => {
  const TranslateString = useI18n()
const [onPresentLaunch] = useModal(<LaunchpadModal presaleAddress={presaleAddress} tokenAddress={tokenAddress} tokenSymbol={tokenSymbol} tokenName={tokenName} ethereum={ethereum} account={account} />)
const [priceToken, setpriceToken] = useState('')
const [min, setMin] = useState('')
const [maxtoken, setMaxtoken] = useState('')
const [invested, setInvested] = useState('')
const [claim, setClaim] = useState('')
const [claimable, setClaimable] = useState('')
const [presale, setPresale] = useState('')
const [length, setLength] = useState(0)
const [isWhitelisted, setisWhitelisted] = useState('')
const [hardCap,sethardCap] = useState('');
const [earnedCap,setearnedCap] = useState(0);
const [sold, setSold] = useState('')
const [endDate, setendDate] = useState('')

 
const web3 = useWeb3();



const handleData = async () => {
  try {
   
const presaleAbi = (presaleABI as unknown) as AbiItem
const Presale = new web3.eth.Contract(presaleAbi, presaleAddress);
console.log("data presale : ",presaleAddress)
const pricePer = await Presale.methods.tokenRatePerEth().call();
setpriceToken(pricePer);
const minamount = await Presale.methods.minEthLimit().call() / 10 ** 18;
setMin(minamount.toString());
const maxamount = await Presale.methods.maxEthLimit().call() / 10 ** 18;
setMaxtoken(maxamount.toString());
const investedT = await Presale.methods.getUserInvestments(account).call() / 10 ** 18;
setInvested(investedT.toString());
const claimb = await Presale.methods.getUserClaimbale(account).call() / 10 ** 18;
setClaim(claimb.toString());
const whitelisted = await Presale.methods.isWhitelisted().call();
setisWhitelisted(whitelisted);
const soldT = await Presale.methods.soldTokens().call() / 10 ** 9;
setSold(soldT.toString());
const endD = await Presale.methods.endTime().call();
const date = new Date(parseInt(endD) * 1000);
const str = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
setendDate(str);
const peopleWhite = await Presale.methods.whitelistLength().call();
setLength(peopleWhite);
const pre = await Presale.methods.isPresaleOpen().call();
setPresale(pre);

const claimab = await Presale.methods.isClaimable().call();
setClaimable(claimab);


const hard = await Presale.methods.hardCap().call();
sethardCap(hard.toString());

console.log("price : ",hard);
  }
catch(e) {
      console.error(e)
    }
  }
  handleData()
  return (
   <div>
{/* 
<StyledFarmStakingCard className="white_box launc_card">
        

      <CardBody>
        <div>
        <Text color="color_balck" className="text_coimg">
        Watch this space for the Launch of the Next Big Project
        </Text>
        <a href="https://forms.gle/46VNQzUz9Z9xnJoc7" className="btn_yellow btn_coming">Only Projects Apply Here</a>
        </div>
        </CardBody>
        </StyledFarmStakingCard> */}
     <StyledFarmStakingCard className="white_box launc_card">
        <div className="card_pos">
          {(presale)? <div className="status_card yell_card">
            On Process
        </div>:<div className={claimable? `status_card succ_card` : `status_card blue_card`}>
            {claimable? "Completed": "Stopped"}
        </div>}

      <CardBody>
          <div className="flex_coin">
      <Image src={`/images/farms/${tokenSymbol.toLocaleLowerCase()}.png`} width={45} height={45} />
      <Text color="color_balck_grey" className="coin_name_title">
       {tokenName}
        </Text>
      </div>
        <Text color="color_balck" className="coin_desc">
        {detail}
        </Text>
       
        <CardMidContent color="secondary">
         <ul className="coin_ul_desc">
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Sale Price</Text>
                 </div>
                 <div>
                 <Text color="color_purple" className="coin_name_title">1 TAT = {priceToken} {tokenSymbol}</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Presale HardCap</Text>
                 </div>
                 <div>
                 <Text color="color_purple" className="coin_name_title">{hardCap} TAT</Text>
                 </div>
             </li>
            
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Min Allocation</Text>
                 </div>
                 <div>
                 <Text color="color_purple" className="coin_name_title">{min} TAT</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Max Allocation</Text>
                 </div>
                 <div>
                 <Text color="color_purple" className="coin_name_title">{maxtoken} TAT</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Participants</Text>
                 </div>
                 <div>
                 <Text color="color_purple" className="coin_name_title">{length}</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Claimable {tokenSymbol}</Text>
                 </div>
                 <div>
                 <Text color="color_purple" className="coin_name_title">{claim}</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Access</Text>
                 </div>
                 <div>
                 <Text color="color_purple" className="coin_name_title">{isWhitelisted ? "Only Whitelisted" : "Public" }</Text>
                 </div>
             </li>
           
         </ul>
        </CardMidContent>
        <div className="prog_tsx">
        <p color="contrast" className="progress_txt">Progress ({earnedCap} / {hardCap} TAT) {(parseInt(sold)/parseInt(hardCap))*100} %</p>
          </div>

        <div className="progres_theme">
       
        <Progress primaryStep={(parseInt(sold)/parseInt(hardCap))*100} showProgressBunny />
      

        </div>
        
        <Text color="color_balck_grey" className="pro_end_time">End Date: {endDate} UTC</Text>
        <div className="d-flex justify-content-end">
      
         
          <div className="text-right">
          {!account ?
           <UnlockButton mt="8px" fullWidth className="btn_yellow" /> : 
              <Button className="btn_yellow_rev" onClick={onPresentLaunch}>Buy</Button>}
          </div>
       
        </div>
      </CardBody>
      </div>
    </StyledFarmStakingCard>
   
    {/* <StyledFarmStakingCard className="white_box launc_card">
        <div className="card_pos">
        <div className="status_card succ_card">
            Completed
        </div>
      <CardBody>
      <div className="flex_coin">
      <Image src='/images/egg/logo.png' width={45} height={45} />
      <Text color="color_balck_grey" className="coin_name_title">
       {tokenName}
        </Text>
      </div> 
      <Text color="color_balck" className="coin_desc">
       Decentralized Fund Management Protocol - Enabling anyone to invest or start funds in a trustless and secure environment using smart contracts
        </Text>
        <div className="progres_theme">
        <Progress primaryStep={ (collected/hardCap) * 100 } showProgressBunny />
        <p className="progress_txt">Progress ( {collected} / {hardCap} TAT)</p>
        <p className="progress_txt_right">50%</p>

        </div>
        <CardMidContent color="secondary">
         <ul className="coin_ul_desc">
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Your {tokenSymbol} Balance</Text>
                 </div>
                 <div>
                 <Text color="color_balck_grey" className="coin_name_title">N/A {tokenSymbol}</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">Your Contribution</Text>
                 </div>
                 <div>
                 <Text color="color_balck_grey" className="coin_name_title">550 TAT</Text>
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
                 <Text color="color_purple" className="coin_desc_li_one">Your Minimum Contribution</Text>
                 </div>
                 <div>
                 <Text color="color_balck_grey" className="coin_name_title">N/A TAT</Text>
                 </div>
             </li>
             <li>
                 <div>
                 <Text color="color_purple" className="coin_desc_li_one">You will Get</Text>
                 </div>
                 <div>
                 <Text color="color_balck_grey" className="coin_name_title">N/A {tokenSymbol}</Text>
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
            <span>{tokenName}</span>
            </div>
            <div className="max_buy_sec_1">
              <Button className="btn btn_blue">Claim</Button>
              
              </div>
          </div>
         
       
        </div>
      </CardBody>
      </div>
    </StyledFarmStakingCard> */}
    </div>

    
  )
}

export default LaunchpadCard
