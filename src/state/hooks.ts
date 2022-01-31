
import BigNumber from 'bignumber.js'
import addresses from 'config/constants/contracts'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import useRefresh from 'hooks/useRefresh'
import staking from 'config/constants/staking'
import presaleABI from 'config/abi/masterchefv2.json'
import erc20 from 'config/abi/erc20.json'
import { AbiItem } from 'web3-utils'
import Web3 from 'web3'
import useWeb3 from 'hooks/useWeb3'
import { fetchFarmsPublicDataAsync, fetchPoolsPublicDataAsync, fetchPoolsUserDataAsync } from './actions'
import { State, Farm, Pool } from './types'
import { QuoteToken } from '../config/constants/types'



const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

 


const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    // dispatch(fetchPoolsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}


// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices

export const usePriceBnbBusd = (): BigNumber => {
  const pid = 2 // BUSD-BNB LP
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceCakeBusd = (): BigNumber => {
  // const pid = 1 // CAKE-BNB LP
  // const bnbPriceUSD = usePriceBnbBusd()
  // const farm = useFarmFromPid(pid)
  // return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
  const pid = 0; // EGG-BUSD LP
  const farm = useFarmFromPid(pid);
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO;
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms();
  const bnbPrice = usePriceBnbBusd();
  const cakePrice = usePriceCakeBusd();
  let value = new BigNumber(0);
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val;
      if (farm.quoteTokenSymbol === QuoteToken.BNB) {
        val = (bnbPrice.times(farm.lpTotalInQuoteToken));
      }else if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
        val = (cakePrice.times(farm.lpTotalInQuoteToken));
      }else{
        val = (farm.lpTotalInQuoteToken);
      }
      value = value.plus(val);
    }
  }
  
  stakingData();
  const staked = localStorage.getItem('dataT');
  value = value.plus(new BigNumber(staked));
  return value;
}

export const stakingData = async()=>{
  const web3 =  new Web3("https://bsc-dataseed1.binance.org/")
  const lockedStake =  addresses.lockedStacking[CHAIN_ID];
  const presaleAbi = (presaleABI as unknown) as AbiItem
  const erc20Abi  =(erc20 as unknown) as AbiItem
  let value = new BigNumber(0);
  
  const data = await Promise.all(
  
    staking.map(async (stake) => {
    
   const Stakes = new web3.eth.Contract(presaleAbi,lockedStake);
   const erc20Token = new web3.eth.Contract(erc20Abi,stake.tokenAddresses[CHAIN_ID]);
   const quoteToken = new web3.eth.Contract(erc20Abi,stake.quoteTokenAdresses[CHAIN_ID]);

   const price1 =  await quoteToken.methods.balanceOf(stake.lpAddress[CHAIN_ID]).call();
   const price2 =  await  erc20Token.methods.balanceOf(stake.lpAddress[CHAIN_ID]).call();
   const TokenPrice = parseInt(price1)/parseInt(price2)
  
   
     const lpinMc =  await erc20Token.methods.balanceOf(lockedStake).call();
     const erc20T =  await  erc20Token.methods.decimals().call();
     const totalinMC = parseInt(lpinMc) / 10 ** parseInt(erc20T);
     console.log("lp in Mc : ", (TokenPrice)*totalinMC)
    value = value.plus((TokenPrice)*totalinMC)

  }),
  )
  console.log("total value in stake : ",value.toFixed(2))
  localStorage.setItem("dataT",value.toString())
  return value.toString()
}