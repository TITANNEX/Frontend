

import { MenuEntry } from '@pancakeswap-libs/uikit'


// const baseurl="http://localhost:3000";
// const swap="https://exchange.titannexswap.finance";
const baseurl="https://titannexswap.finance";
const swap="https://exchange.titannexswap.finance";
// const landingurl="http://69.164.195.140:8091";
// const baseurl="http://69.164.195.140:8092";
// const swap="http://69.164.195.140:8093";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: baseurl,
    calloutClass: 'menulink'
  },
  // {
  //   label: 'Exchange',
  //   icon: 'SwapIcon',
  //   href: swap.concat('/#/swap'),
  //   calloutClass: 'menulink'
  // },
  // {
  //   label: 'Liquidity',
  //   icon: 'AddPoolIcon',
  //   href: swap.concat('/#/pool'),
  //   calloutClass: 'menulink'
  // },
  {
    label: 'Trade',
    icon: 'SwapIcon',
    calloutClass: 'menulink',
    items: [
      {
        label: 'Exchange',
        href: swap.concat('/#/swap'),
      },
      {
        label: 'Liquidity',
        href: swap.concat('/#/pool'),
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    // href: '/farms',
    href:baseurl.concat('/farms'),
    calloutClass: 'menulink'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    // href: '/nests',
    href:baseurl.concat('/pools'),

    calloutClass: 'menulink'
  },
 
  // {
  //   label: 'LaunchPad',
  //   icon: 'NftIcon',
   
  //   href:baseurl.concat('/launchpad'),
  //   calloutClass: 'menulink'
  // },
  {
    label: 'Locked Staking',
    icon: 'NftIcon',
    href:baseurl.concat('/lockedstaking'),
    calloutClass: 'menulink'    
  },
  // {
  //   label: 'How It Works',
  //   icon: 'HelpIcon',
  
  //   href: "https://www.youtube.com/watch?v=mQoQslRS2FM&list=PLR21KoH9MrilMdKhz_ZbT_EjZJw_j6uyC",

  //   calloutClass: 'menulink'
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/tatswap-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/tatswap-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   calloutClass: 'menulink',
  //   items: [     
  //     {
  //       label: 'Blog',
  //       href: baseurl,
  //     },
  //   ],
  // }, 
]

export default config
