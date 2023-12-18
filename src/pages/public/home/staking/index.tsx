import React from 'react'
import { CustomCaption, CustomFont, OptionContainer, OptionTextContainer, RadioButton, StakingContainer, StatusCard, TextContainer } from './style'
import { Flex, Grid, Heading, P, Span } from '@/components/basic'
import { Icon } from '@/components/custom';
import Chart from './chart';
import { GV } from '@/utils/style.util';
import CardBg from '@/assets/img/staked-coins.svg';


const Staking = () => {
  return (
    <StakingContainer>
        <Heading level={2} $style={{ color: 'header', weight: '500' }}>Chainlink Staking</Heading>
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
                    <Heading level={4} $style={{ color: 'header', weight: '500' }}>v0.2 open for General Access</Heading>
                    <P $style={{ size: '16px', color: 'color-placeholder' }}>Staking v0.2 is now open to the public. Anyone can stake, provided the pool is not full. <Span $style={{ color: 'primary' }}>Learn more</Span></P>
                </StatusCard>
                <StatusCard bg={CardBg}>
                    <Heading level={3} $style={{ color: 'header', weight: '500', mb: '8px' }}>4.32%</Heading>
                    <Flex>
                        <Heading level={6} $style={{ color: 'header', weight: '500', mb: '8px' }}>Current v0.2 Variable Reward Rate</Heading>
                        <Icon icon='Sub' width='12px' height='12px' />
                    </Flex>
                    <P $style={{ size: '16px', color: 'color-placeholder' }}>LINK rewards divided by total LINK staked. <P $style={{ color: 'primary' }}>Learn more</P></P>
                </StatusCard>
            </Grid>
            <Grid $style={{ rows: '1', columns: '1' }}>
                <StatusCard isLast>
                    <Chart />
                    <TextContainer>
                        <CustomCaption>v0.2 Community Pool</CustomCaption>
                        <CustomFont>40,875,000</CustomFont>
                        <CustomCaption>/40,875,000 Link</CustomCaption>
                    </TextContainer>
                    <OptionContainer>
                        <OptionTextContainer>
                            <RadioButton bg={GV('primary')} />
                            <Span $style={{ color: 'color-placeholder' }}>Filled</Span>
                        </OptionTextContainer>
                        <OptionTextContainer>
                            <RadioButton bg='#ecedef' />
                            <Span $style={{ color: 'color-placeholder' }}>Unfilled</Span>
                        </OptionTextContainer>
                    </OptionContainer>
                </StatusCard>
            </Grid>
        </Grid>
    </StakingContainer>
  )
}

export default Staking