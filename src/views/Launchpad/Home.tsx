import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'

import LaunchpadCard from 'views/Launchpad/components/LaunchpadCard'
import LaunchPads from 'config/constants/launchpad'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'


import { useTotalValue } from '../../state/hooks'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/egg/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/home.png'), url('/images/home.png');
    // background-position: left center, right center;
    // height: 300px;
    // padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const CardsLarge = styled(BaseLayout)`
  align-items: stretch;
  justify-self: center;
  margin-bottom: 32px;

  & > div {
    grid-column: span 12;
    width: 100%;
    text-align: center;

  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const totalValue = useTotalValue();
  const tvl = totalValue.toFixed(2);
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const data = true;
  const collected= 10;
  
  return (
    <Page className="px-0">
      <Hero  className="banner_home_launchpad">
        {/* <Heading as="h1" mb="20px" color="primaryblack" className="hvd_comic_serif orange_head" style={{ fontSize: "2.5rem" }}>
          {TranslateString(576, 'TITANNEX')}
        </Heading> */}
        <Heading as="h3" className="dash_heading_1">LaunchPad</Heading>  
        <Text className="dash_subheading my-3-px dash_color_white">Buy New Tokens Before They Are Launched for Trading</Text>

      
      </Hero>
      <div className="px-left-right">
        {/* <CardsLarge>
          <VisionCard />
        </CardsLarge> */}
        
        <CardsLarge>
         {
          
           LaunchPads.map((pad)=>
           
           <LaunchpadCard 
           key={pad.pid}
           tokenAddress={pad.tokenAddresses[CHAIN_ID]}
           tokenName={pad.tokenName}
           tokenSymbol={pad.tokenSymbol}
           presaleAddress={pad.presaleAddress[CHAIN_ID]}
           ethereum={ethereum}
           account={account}
          
           />
           )     
         }  
        </CardsLarge>
      </div>
    </Page>
  )
}

export default Home
