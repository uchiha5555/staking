import React from 'react'
import { CopyrightContainer, CopyrightFont, CopyrightFont1, CopyrightFont2, CopyrightWrapper, CustomFlex, CustomFlex2, FooterColumnWrapper, FooterContainer, FooterWrapper } from './style';
import { Flex, Grid, Heading, P } from '@/components/basic';
import { Icon } from '@/components/custom';

const Footer = () => {
  return (
    <Flex $style={{ fDirection: 'column', w: '100%' }}>
      <FooterContainer>
        <FooterWrapper>
          <Grid $style={{
            columns: '4',
            gap: '48px',
            w: '100%',
            justifyContent: 'center',
            queries: {
              912: {
                columns: '3'
              },
              700: {
                columns: '2'
              },
              479: {
                columns: '1'
              }
            }
          }}>
            <FooterColumnWrapper>
              <Heading level={6} $style={{ color: 'white', weight: '500', mb: '32px !important' }}>Developers</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Docs</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Faucets</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Developer Hub</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Developer Experts</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Chainlink Hackathon</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Bootcamp</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Use Cross-Chain (CCIP)</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Use Data Feeds</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Use Randomness (VRF)</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Use Automation</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Use Functions</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Node Operators</Heading>
            </FooterColumnWrapper>
            <FooterColumnWrapper>
              <Heading level={6} $style={{ color: 'white', weight: '500', mb: '32px !important' }}>Products</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Cross-Chain</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Faucets</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Data Streams</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Market and Data Feeds</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Functions</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>VRF</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Automation</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Proof of Reserve</Heading>
            </FooterColumnWrapper>
            <FooterColumnWrapper>
              <Heading level={6} $style={{ color: 'white', weight: '500', mb: '32px !important' }}>Use Cases</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Overview</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Financial Services</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>DeFi</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Gaming</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>NFT Collectibles</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Climate Markets</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Enterprise</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Insurance</Heading>
            </FooterColumnWrapper>
            <FooterColumnWrapper>
              <Heading level={6} $style={{ color: 'white', weight: '500', mb: '32px !important' }}>Community</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Community Overview</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Grant Program</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Events</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Become an Advocate</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Code of Conduct</Heading>
            </FooterColumnWrapper>
            <FooterColumnWrapper>
              <Heading level={6} $style={{ color: 'white', weight: '500', mb: '32px !important' }}>Resources</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Whitepaper</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Case Studies</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Tech Talks</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Blog</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Economics 2.0</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Staking</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>FAQs</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Education Hub</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>What Is DeFi?</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>What Is an Oracle?</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>What Is a Smart Contract?</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>What Is an NFT?</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>What Is Web3?</Heading>
            </FooterColumnWrapper>
            <FooterColumnWrapper>
              <Heading level={6} $style={{ color: 'white', weight: '500', mb: '32px !important' }}>Chainlink</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Ecosystem</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Data Providers</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Press</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Team</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Circulating Supply</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Brand Assets</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Chainlink Badging</Heading>
            </FooterColumnWrapper>
            <FooterColumnWrapper>
              <Heading level={6} $style={{ color: 'white', weight: '500', mb: '32px !important' }}>Contact</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Talk to an Expert</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Security</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Support</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Custom Chainlinks</Heading>
              <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Press Inquiries</Heading>
            </FooterColumnWrapper>
            <FooterColumnWrapper>
              <Heading level={6} $style={{ color: 'white', weight: '500', mb: '32px !important' }}>Social</Heading>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Twitter' />
                <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Twitter</Heading>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Youtube' />
                <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>YouTube</Heading>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Discord' />
                <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Discord</Heading>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Telegram' />
                <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Telegram</Heading>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='WeChat' />
                <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>WeChat</Heading>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Reddit' />
                <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Reddit</Heading>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Kakao' />
                <Heading level={6} $style={{ color: 'color-secondary', weight: '400' }}>Kakao</Heading>
              </Flex>
            </FooterColumnWrapper>
          </Grid>
        </FooterWrapper>
      </FooterContainer>
      <CopyrightContainer>
        <CopyrightWrapper>
          <CustomFlex>
            <Icon icon='FooterLogo' width='auto' height='26px' />
            <CopyrightFont1>Chainlink®</CopyrightFont1>
            <CopyrightFont2>© 2023 Chainlink Foundation</CopyrightFont2>
          </CustomFlex>
          <CustomFlex2>
            <Flex $style={{ vAlign: 'center', gap: '2px' }}>
              <Icon icon='Flag' />
              <CopyrightFont>EN</CopyrightFont>
            </Flex>
            <CopyrightFont>Privacy Policy</CopyrightFont>
            <CopyrightFont>Terms of Service</CopyrightFont>
          </CustomFlex2>
        </CopyrightWrapper>
      </CopyrightContainer>
    </Flex>
  )
}

export default Footer;