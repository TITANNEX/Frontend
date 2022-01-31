import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from 'state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  margin-left: auto;
  margin-right: auto;
  background-image: url('/images/coin_bg_card_2.png');
  background-repeat: no-repeat;
  background-position: top -30px right -50px;
 
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  const tvl = totalValue.toNumber().toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ value: tvl })
// };
// fetch('http://localhost:2053/api/updateTotal', requestOptions)
//     .then(response => response.json())

  return (
    <StyledTotalValueLockedCard className="card_radius">
      <CardBody>       
        <Text color="textSubtle" className="hvd_comic_serif card_tile_home">
          {TranslateString(762, 'Total Value Locked (TVL)')}
        </Text>
        <>
      
        <Heading className="orange_text_head" size="xl" mb="5px" color="orange_text_head">{`$${tvl}`}</Heading>
          <Text color="textblack" className="card_3_subtiele">{TranslateString(999, 'Across all Farms and Pools')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
