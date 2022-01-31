import React from 'react'

import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import VisionCard from 'views/Home/components/VisionCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TwitterCard from './components/TwitterCard'
import { useTotalValue } from '../../state/hooks'

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
  margin-bottom: 30px;

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
  const tvl = totalValue.toNumber().toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if(totalValue.toNumber() > 0){
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: tvl })
  };
  fetch('https://titannexswap.finance/api/updateTotal', requestOptions)
      .then(response => response.json())
  
  }


  return (
    <Page className="px-0">
      <Hero  className="banner_home">
        {/* <Heading as="h1" mb="20px" color="primaryblack" className="hvd_comic_serif orange_head" style={{ fontSize: "2.5rem" }}>
          {TranslateString(576, 'TITANNEX')}
        </Heading> */}
          <img src="/images/banner_icon.png" alt="NEX" />
          <div className='text-left'>
        <Heading as="h3" className="dash_heading_1" color="dash_heading">Decentralized Trading Platform & Yield Farming</Heading>
        <Text className="dash_subheading" color="secondary">{TranslateString(578, 'Your Trusted AMM and Yield Farm on Binance Smart Chain')}</Text>
        </div>
      
      </Hero>
      <div className="px-left-right">
        {/* <CardsLarge>
          <VisionCard />
        </CardsLarge> */}
         <Cards>
        <FarmStakingCard />

          <CakeStats />

          {/* <EarnAPYCard />   */}
          {/* <TwitterCard/> */}

        </Cards>
        <Cards>

          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
