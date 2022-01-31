import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'NEX-BUSD LP',
    lpAddresses: {
      97: '0x45611147c682ac797B5719842Ce7D3Fe1F9997e8',
      56: '0xc53b454B0C0ea0F4471d4DaC2537B153B85e0516',
    },
    tokenSymbol: 'NEX',
    tokenAddresses: {
      97: '0x84CfB75584ed04C3CCc124Df10A48bE2d2cD9890',
      56: '0x7c9b5181f234f4ec268cf167f856b2db07c49163',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'NEX-BNB LP',
    lpAddresses: {
      97: '0xa0193f6eD20cDF1F52847F58a0541CCA0b35c5CC',
      56: '0x49E66a79741d672D30ccbc365f405f69aA732f4D',
    },
    tokenSymbol: 'NEX',
    tokenAddresses: {
      97: '0x84CfB75584ed04C3CCc124Df10A48bE2d2cD9890',
      56: '0x7c9b5181f234f4ec268cf167f856b2db07c49163',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe6cAA91e79261F8a36C1C668F27cC7Bf838Ac594',
      56: '0x2b0b3C71F32361f9b66531Bb8136C11732807787',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xBaE36c04b80FE01bb1611160B199fACB7E3CdC27',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'NEX',
    lpAddresses: {
      97: '0xe6cAA91e79261F8a36C1C668F27cC7Bf838Ac594',
      56: '0xc53b454B0C0ea0F4471d4DaC2537B153B85e0516',
    },
    tokenSymbol: 'NEX',
    tokenAddresses: {
      97: '0xBaE36c04b80FE01bb1611160B199fACB7E3CdC27',
      56: '0x7c9b5181f234f4ec268cf167f856b2db07c49163',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
