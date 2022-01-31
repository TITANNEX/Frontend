import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from 'use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/coin_bg_card.png');
  background-repeat: no-repeat;
  background-position: top -50px right -81px;
  min-height: 376px;
  border-radius:10px;
  // background-size:100% 100%;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.contrast};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard className="card_radius farm_stak_card">
      <CardBody>
        <Heading size="xl" mb="24px" className="hvd_comic_serif card_tile_home" color="text">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <Block>
          <Heading color="contrast" size="md" className="card_small_1">
            {TranslateString(544, 'NEX to Harvest')}:
          </Heading>
          <CakeHarvestBalance earningsSum={earningsSum} />
          <Label color="contrast" className="label_color">~${(eggPrice * earningsSum).toFixed(2)}</Label>
        </Block>
        <Block>
          <Heading color="contrast" size="md" className="card_small_1">
            {TranslateString(546, 'NEX to wallet')}:
          </Heading>
          <CakeWalletBalance cakeBalance={cakeBalance} />
          <Label color="contrast" className="label_color">~${(eggPrice * cakeBalance).toFixed(2)}</Label>
        </Block>
        <Actions>
          {account ? (
            <Button className="btn_green"
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting EGG')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton className="btn_green" fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
