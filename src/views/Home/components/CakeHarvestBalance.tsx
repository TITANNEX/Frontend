import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from 'use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import CardValue from './CardValue'

const CakeHarvestBalance = ({earningsSum}) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="card_small" fontSize="15px" style={{ lineHeight: '56px', fontWeight:600, textTransform: 'uppercase' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={earningsSum} />
}

export default CakeHarvestBalance
