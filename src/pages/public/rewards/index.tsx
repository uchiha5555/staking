import React from 'react'
import { ButtonContainer, Caption, ConnectButton, Description, MainWrapper, RewardsContainer, RewardsWrapper, Title, VersionContainer } from './style'
import { Flex, Heading, P, Span } from '@/components/basic'
import Image from '@/components/basic/img';

import WalletImage from '@/assets/img/wallet.svg';
import { Icon } from '@/components/custom';

const Rewards = () => {
  return (
    <RewardsContainer>
        <RewardsWrapper>
            <Flex $style={{ hAlign: 'space-between', vAlign: 'flex-end', w: '100%', mb: '24px' }}>
                <Flex $style={{ fDirection: 'column' }}>
                    <Heading level={2} $style={{ color: 'header' }}>Staking Rewards</Heading>
                    <Caption>V 0.2</Caption>
                </Flex>
                <VersionContainer>
                    <P $style={{ size: '1.25rem', color: 'color-placeholder' }}>Version 0.2</P>
                </VersionContainer>
            </Flex>
            <MainWrapper>
                <Image src={WalletImage} alt='' $style={{ w: '200px', h: '200px' }} />
                <Title>Connect your wallet</Title>
                <Description>To see your v0.2 staking rewards, please connect to your wallet first.</Description>
                <ButtonContainer>
                    <ConnectButton>
                        <Icon icon='Save' />
                        <Span>Connect wallet</Span>
                    </ConnectButton>
                </ButtonContainer>
            </MainWrapper>
        </RewardsWrapper>
    </RewardsContainer>
  )
}

export default Rewards