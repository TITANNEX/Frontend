import addresses from 'config/constants/contracts'
import React, { useMemo,useState } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton, Text, Image, Progress, Button, Input, useModal,CalculateIcon, IconButton } from '@pancakeswap-libs/uikit'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'

import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import { usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import useStake from 'hooks/useStake'
import BigNumber from 'bignumber.js'
import presaleABI from 'config/abi/masterchefv2.json'
import erc20 from 'config/abi/erc20.json'
import { AbiItem } from 'web3-utils'
import { Address } from 'config/constants/types'
import { provider } from 'web3-core'
import useWeb3 from 'hooks/useWeb3'

import UnlockButton from 'components/UnlockButton'
import Web3 from 'web3'


import LaunchpadModal from './LaunchpadModal'
import ApyButton from './ApyButton'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'
import WarningModal from '../WarningModal'


const CHAIN_ID = process.env.REACT_APP_CHAIN_ID





// import { getFarmApy } from 'utils/apy'
// import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'

export interface ApyButtonProps {
  lpLabel?: string
  cakePrice?: BigNumber
  apy?: BigNumber
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

interface StakeCardProps {
  tokenAddress: Address
  tokenSymbol: string
  pid?: number
  ethereum?: provider
  account?: string
  quoteTokenAdresses: Address
  quoteTokenSymbol:string
  lpAddress?:Address
  }


interface FarmCardActionsProps {
  lpAddress: Address
  pid?: number
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


const StakingCard: React.FC<StakeCardProps> = ({tokenAddress,tokenSymbol,pid,ethereum,account,quoteTokenSymbol,quoteTokenAdresses,lpAddress }) => {
  const TranslateString = useI18n()
  // const { onStake } = useStake()
  const web3 =  useWeb3()
  const [days, setDays] = useState('')
  const [unstake, setUnstake] = useState('-')
  const [amount, setAmount] = useState('')
  const [farmAPR, setfarmAPR] = useState('')
  const [farmAPY, setfarmAPY] = useState('')
  const [tokenDecimal, settokenDecimal] = useState('')

  const [pending, setPending] = useState('0')
  const [total, setTotal] = useState('0')
  const [staked, setStacked] = useState('0')
  const [status, setStatus] = useState(false)
  const [allowance, setAllowance] = useState(false)
  const [requestedApproval, setrequestedApproval] = useState(false)
  const [cakePrice,setcakePrice] = useState('')
  const [depositFeeBP,setdepositFeeBP] = useState('')
  const [allowanceValue,setallowanceValue] = useState('')
  const [intervalBlock,setintervalBlock] = useState(0)
const [onPresentLaunch] = useModal(<LaunchpadModal />)


const lockedStake =  addresses.lockedStacking[CHAIN_ID];
const presaleAbi = (presaleABI as unknown) as AbiItem
const erc20Abi  =(erc20 as unknown) as AbiItem
const Stakes = new web3.eth.Contract(presaleAbi,lockedStake);
const erc20Token = new web3.eth.Contract(erc20Abi,tokenAddress.toString());
const quoteToken = new web3.eth.Contract(erc20Abi,quoteTokenAdresses.toString());


const handleData = async () => {
  try {
    console.log("Styakes : ",Stakes.methods)
    const decimal = await erc20Token.methods.decimals().call();
    settokenDecimal(decimal.toString())
   if(account){
    const pend = await Stakes.methods.pendingTost(pid,account).call();
    console.log("data pending : ",pend)
    const user = await Stakes.methods.userInfo(pid,account).call();
    setStacked(user.amount)
    const dataF = (parseInt(pend) + parseInt(user.pendingRewards)) /10**parseInt(tokenDecimal)
    setPending(dataF.toFixed(2))

    // setPending(dataF.toFixed(2))
    const IntervalBlock = await Stakes.methods.intervalBlock().call()/86400;
    setintervalBlock(IntervalBlock)
    console.log("IntervalBlock : ",IntervalBlock)
    const allownce = await erc20Token.methods.allowance(account,lockedStake).call();
    console.log("allowance : ",allownce)
    setallowanceValue(allownce.toString())
    if((allownce) > 0)
    setAllowance(true);
   }

   
    const balance = await erc20Token.methods.balanceOf(account).call();
    const price1 = await quoteToken.methods.balanceOf(lpAddress).call();
    const price2 = await erc20Token.methods.balanceOf(lpAddress).call();
    const TokenPrice = parseInt(price1)/parseInt(price2)
    setcakePrice(TokenPrice.toString())
    calculateAPR(cakePrice)
    setAmount(balance.toString())
    console.log("balance of ",balance)
    const pool= await Stakes.methods.poolInfo(pid.toString()).call();
    setdepositFeeBP(pool.depositFeeBP)
     const user = await Stakes.methods.userInfo(pid,account).call();
    setStacked(user.amount)
    const date1 = ((parseInt(user.userLockedPeriod)*1000) -  Date.now()) /1000/60/60/24;
    const datee = new Date(parseInt(user.userLockedPeriod)*1000);
    console.log("date of new 1: ", datee)
    setDays((date1.toFixed()))
    if(date1 <= 0){
        setStatus(true)
    }
    const unstakeDate = datee.toLocaleDateString();
    console.log("unstake data : ",datee.toLocaleDateString())
    if((parseInt(user.userLockedPeriod)*1000) > 0)
    setUnstake(unstakeDate)
    const pools = await Stakes.methods.poolLength().call();
    console.log("data pending : ",pools)
  }
  catch(e) {
        console.error(e)
      }
}
 handleData()

 const calculateAPR = async(cake)=>{
     // eggPerBlock
     const eggPerBlock = await Stakes.methods.TostPerBlock().call()/100;
     // poolWeight
     const pool= await Stakes.methods.poolInfo(pid.toString()).call();
     const totalloc = await Stakes.methods.totalAllocPoint().call();
     const poolWeight = parseInt(pool.allocPoint)/parseInt(totalloc)
     // lpinMc
     const lpinMc = await erc20Token.methods.balanceOf(lockedStake).call();
     const erc20T = await erc20Token.methods.decimals().call();
     const totalinMC = parseInt(lpinMc) / 10 ** parseInt(erc20T);
     console.log("lp in Mc : ",parseFloat(cakePrice)*totalinMC)
     const lpTotalInQuoteToken = new BigNumber(cakePrice).times(new BigNumber(totalinMC))
     const totalValueFormated = lpTotalInQuoteToken
    ? `$${Number(lpTotalInQuoteToken).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'
     setTotal(totalValueFormated.toString())
    const cakeRewardPerBlock = new BigNumber(eggPerBlock || 1).times(new BigNumber(poolWeight)) .div(new BigNumber(10).pow(18))
    const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

    const totalValue = new BigNumber(lpTotalInQuoteToken || 0);

    const apy = (new BigNumber(cakePrice).times(cakeRewardPerYear)).div(totalValue);
    


    const farmAPYs = apy && new BigNumber(apy).times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    setfarmAPY(farmAPYs.toString())
    setfarmAPR(apy.toString())
 }

 const onStake = async(value) =>{
   // const val = parseFloat(value)* 10 **parseInt(tokenDecimal)
   console.log("onstake : ",value)
      await Stakes.methods.deposit(pid,value.toString()).send({ from: account })
   .then(async (result) => {
     handleData()

   }).catch(e => {
     console.log("Error ",e)
   })
 }

 const unStake = async(value) =>{
  const val = parseFloat(value)* 10 **parseInt(tokenDecimal)
    await Stakes.methods.withdraw(pid,val.toString()).send({ from: account })
 .then(async (result) => {
   handleData()
 }).catch(e => {
   console.log("Error ",e)
 })
}

const claim = async() =>{
    await Stakes.methods.claim(pid).send({ from: account })
 .then(async (result) => {
   handleData()
 }).catch(e => {
   console.log("Error ",e)
 })
}

const [onPresentDeposit] = useModal(<DepositModal max={new BigNumber(amount)} onConfirm={onStake} tokenName={tokenSymbol} depositFeeBP={parseInt(depositFeeBP)} />)
const [onPresentWithdraw] = useModal(
  <WithdrawModal max={new BigNumber(staked)} onConfirm={unStake} tokenName={tokenSymbol} />,
)
const [onPresentWarning] = useModal(
    <WarningModal max={new BigNumber(staked)} pid={pid} onConfirm={unStake} tokenName={tokenSymbol} />,
  )
 const Approve = async() =>{
   console.log("take")
  await erc20Token.methods.approve(lockedStake,"115792089237316195423570985008687907853269984665640564039457584007913129639935").send({ from: account })
  .then(async (result) => {
    console.log("result");
    const allownce = await erc20Token.methods.allowance(account,lockedStake).call() / 10 ** 18;
    if((allownce) > 0)
    setAllowance(true);

  }).catch(e => {
    console.log("Error ",e)
  })
}


const handleApproval = ()=>{
  return allowance && parseInt(allowanceValue) >= parseInt(amount) ? (
      <>
    <Button className="btn_yellow" mt="8px" onClick={onPresentDeposit} fullWidth disabled={requestedApproval}>
    {TranslateString(999, 'Stake')}
  </Button>
    </>
  ) : (
    <Button className="btn_yellow" mt="8px" fullWidth disabled={requestedApproval} onClick={Approve}>
      {TranslateString(999, 'Approve Contract')}
    </Button>
  )
}

  return (
      <div className="stake_card">
    <StyledFarmStakingCard className="card_radius card_staking_bg">
        <div className="card_pos">

      <CardBody>
      <div className="flex_coin">
        <div className="flec_coind_div">
      <Image src={`/images/farms/${tokenSymbol.toLocaleLowerCase()}.png`} width={45} height={45} />
      <Text color="color_balck_grey" className="coin_name_title">
       {tokenSymbol}
        </Text>
        </div>
        <div>
          <div className="stake_days">
            {intervalBlock} days
          </div>
        </div>
      </div>
      <Flex justifyContent='space-between' alignItems='center' className="mb_end mt-top-end">
        <Text className="fam_left_txt_sm" color="color_balck_grey">Unstake available after<br /><span className="end_Date_blue">{unstake}</span></Text>
        <div className="end_card"> {status ? "Ended" : "Live" }</div>
      </Flex>
       <div className="stkae_card_info">
       <div className="">
              <div className="card-d">
                  <div className="fam_left_txt">
                    Staked:
                  </div>
                  <div className="tw-800">{(parseInt(staked)/10**parseInt(tokenDecimal)).toFixed(2)}</div>
              </div>
              <div className="card-d">
                <div className="fam_left_txt">APR:</div>
                <div className="tw-800 cal-btn d-flex">

                {/* <button className="btn_yellow" type="button">Unlock Wallet</button> */}

                <Text bold style={{ marginBottom: '0px',display: 'flex', alignItems: 'center', wordBreak: 'break-all', color:'#fff' }}>

              <>
                <ApyButton
                  lpLabel={tokenSymbol}
                  quoteTokenAdresses={quoteTokenAdresses}
                  quoteTokenSymbol={quoteTokenSymbol}
                  tokenAddresses={tokenAddress}
                  cakePrice={ new BigNumber(cakePrice)}
                  apy={new BigNumber(farmAPR)}
                />
                {farmAPY} %
              </>

          </Text>

                     </div>
              </div>
              <div className="card-d">
                  <div className="fam_left_txt">
                  Earned {tokenSymbol}:
                  </div>
                  <div className="tw-800">{pending}</div>
              </div>
              <div className="card-d">
                  <div className="fam_left_txt">
                  Liquidity:
                  </div>
                  <div className="tw-800">{total}</div>
              </div>


              </div>
       </div>

       {parseInt(staked) > 0 ?
       <div className="flex_coin flex_btn_div">
        <div className="flec_coind_div">
        <button onClick={claim} className="btn_yellow" type="button">
               Claim
           </button>
        </div>
        <div>
          <div className="btn_plus_minus">
          <button onClick={onPresentDeposit} className="btn_green_new mr-1" type="button">
               +
           </button>
           <button onClick={onPresentWarning} className="btn_green_new" type="button">
               -
           </button>
          </div>
        </div>
      </div>:
      <div className="mb-btn-stake">
      {!account ?
              <UnlockButton mt="8px" fullWidth className="btn_yellow" />:
            handleApproval() }
              </div>
}

      </CardBody>
      </div>
    </StyledFarmStakingCard>


    </div>


  )
}

export default StakingCard
