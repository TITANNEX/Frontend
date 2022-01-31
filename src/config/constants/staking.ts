import contracts from './contracts'
import { LockedConfig, QuoteToken } from './types'

const Launch: LockedConfig[] = [
    {
        pid: 3,
        tokenSymbol: 'NEX',
        tokenAddresses: {
            97: '0xe2b52d9f7b55F191f7A26c7D4B73E309b918eF3a',
            56: '0x7c9b5181f234f4ec268cf167f856b2db07c49163',
        },
        quoteTokenSymbol: QuoteToken.BUSD,
        quoteTokenAdresses: contracts.busd,
        lpAddress: {
          97: '0x193f37625455D0c563D30F00A574aF0c962e983a',
          56: '0xc53b454B0C0ea0F4471d4DaC2537B153B85e0516',
      }
    },
  //   {
  //     pid: 1,
  //     tokenSymbol: 'NEX',
  //     tokenAddresses: {
  //         97: '0xe2b52d9f7b55F191f7A26c7D4B73E309b918eF3a',
  //         56: '0x18fB791B917fbD372F872605243BeA7f0554Cd04',
  //     },
  //     quoteTokenSymbol: QuoteToken.BUSD,
  //     quoteTokenAdresses: contracts.busd,
  //     lpAddress: {
  //       97: '0x193f37625455D0c563D30F00A574aF0c962e983a',
  //       56: '0xA5D582c43fd53e1A79805eC7890b804b87203995',
  //   }
  // }
]

export default Launch