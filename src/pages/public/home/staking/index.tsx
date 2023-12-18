import React from 'react'
import { StakingContainer, StatusCard } from './style'
import { Flex, Grid, Heading, P } from '@/components/basic'
import { Icon } from '@/components/custom'

const Staking = () => {
  return (
    <StakingContainer>
        <Heading level={2} $style={{ color: 'header' }}>Chainlink Staking</Heading>
        <Grid $style={{
            columns: '2',
            gap: '24px',
            queries: {
                768: {
                    columns: '1'
                }
            }
        }}>
            <Grid $style={{
                rows: '2',
                columns: '1',
                gap: '24px',
            }}>
                <StatusCard>
                    <P $style={{ size: '28px', color: 'header' }}>v0.2 open for General Access</P>
                    <P $style={{ size: '16px', color: 'color-placeholder' }}>Staking v0.2 is now open to the public. Anyone can stake, provided the pool is not full. Learn more</P>
                </StatusCard>
                <StatusCard>
                    <P $style={{ size: '28px', color: 'header' }}>4.32%</P>
                    <Flex>
                        <P $style={{ size: '16px', color: 'color-placeholder' }}>Current v0.2 Variable Reward Rate</P>
                        <Icon icon='Sub' width='12px' height='12px' />
                    </Flex>
                    <P $style={{ size: '16px', color: 'color-placeholder' }}>LINK rewards divided by total LINK staked. Learn more</P>
                </StatusCard>
            </Grid>
            <Grid $style={{ rows: '1', columns: '1' }}>
                
            </Grid>
        </Grid>
    </StakingContainer>
  )
}

export default Staking