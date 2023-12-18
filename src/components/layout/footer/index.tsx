import React from 'react'
import { CopyrightContainer, CopyrightFont, CopyrightFont1, CopyrightFont2, CopyrightWrapper, CustomFlex, CustomFlex2, FooterContainer, FooterWrapper } from './style';
import { Flex, Grid, P } from '@/components/basic';
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
            <Flex $style={{ fDirection: 'column', gap: '16px', w: '260px' }}>
              <P $style={{ size: '15px', color: 'color' }}>Developers</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Docs</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Faucets</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Developer Hub</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Developer Experts</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Chainlink Hackathon</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Bootcamp</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Use Cross-Chain (CCIP)</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Use Data Feeds</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Use Randomness (VRF)</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Use Automation</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Use Functions</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Node Operators</P>
            </Flex>
            <Flex $style={{ fDirection: 'column', gap: '16px', w: '260px' }}>
              <P $style={{ size: '15px', color: 'color' }}>Products</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Cross-Chain</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Faucets</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Data Streams</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Market and Data Feeds</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Functions</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>VRF</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Automation</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Proof of Reserve</P>
            </Flex>
            <Flex $style={{ fDirection: 'column', gap: '16px', w: '260px' }}>
              <P $style={{ size: '15px', color: 'color' }}>Use Cases</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Overview</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Financial Services</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>DeFi</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Gaming</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>NFT Collectibles</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Climate Markets</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Enterprise</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Insurance</P>
            </Flex>
            <Flex $style={{ fDirection: 'column', gap: '16px', w: '260px' }}>
              <P $style={{ size: '15px', color: 'color' }}>Community</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Community Overview</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Grant Program</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Events</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Become an Advocate</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Code of Conduct</P>
            </Flex>
            <Flex $style={{ fDirection: 'column', gap: '16px', w: '260px' }}>
              <P $style={{ size: '15px', color: 'color' }}>Resources</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Whitepaper</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Case Studies</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Tech Talks</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Blog</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Economics 2.0</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Staking</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>FAQs</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Education Hub</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>What Is DeFi?</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>What Is an Oracle?</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>What Is a Smart Contract?</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>What Is an NFT?</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>What Is Web3?</P>
            </Flex>
            <Flex $style={{ fDirection: 'column', gap: '16px', w: '260px' }}>
              <P $style={{ size: '15px', color: 'color' }}>Chainlink</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Ecosystem</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Data Providers</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Press</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Team</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Circulating Supply</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Brand Assets</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Chainlink Badging</P>
            </Flex>
            <Flex $style={{ fDirection: 'column', gap: '16px', w: '260px' }}>
              <P $style={{ size: '15px', color: 'color' }}>Contact</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Talk to an Expert</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Security</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Support</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Custom Chainlinks</P>
              <P $style={{ size: '16px', color: 'color-secondary' }}>Press Inquiries</P>
            </Flex>
            <Flex $style={{ fDirection: 'column', gap: '16px', w: '260px' }}>
              <P $style={{ size: '15px', color: 'color' }}>Social</P>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Twitter' />
                <P $style={{ size: '16px', color: 'color-secondary' }}>Twitter</P>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Youtube' />
                <P $style={{ size: '16px', color: 'color-secondary' }}>YouTube</P>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Discord' />
                <P $style={{ size: '16px', color: 'color-secondary' }}>Discord</P>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Telegram' />
                <P $style={{ size: '16px', color: 'color-secondary' }}>Telegram</P>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='WeChat' />
                <P $style={{ size: '16px', color: 'color-secondary' }}>WeChat</P>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Reddit' />
                <P $style={{ size: '16px', color: 'color-secondary' }}>Reddit</P>
              </Flex>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Icon icon='Kakao' />
                <P $style={{ size: '16px', color: 'color-secondary' }}>Kakao</P>
              </Flex>
            </Flex>
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