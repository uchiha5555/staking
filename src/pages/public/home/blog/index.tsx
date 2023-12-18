import React from 'react'
import { BlogContainer, BlogWrapper, CardContainer, CardContent } from './style'
import { Flex, Grid, Heading, P } from '@/components/basic'
import { Icon } from '@/components/custom'

const Blogs = () => {
  return (
    <BlogContainer>
      <Heading level={2} $style={{ color: 'header' }}>Read more about Chainlink Staking</Heading>
      <BlogWrapper>
        <Grid $style={{ columns: '4', w: '100%', fWrap: 'no-wrap', overflow: 'scroll' }}>
          <CardContainer>
            <Flex $style={{
              hAlign: 'space-between',
              vAlign: 'center',
              w: '100%'
            }}>
              <P $style={{ transform:'uppercase', color: 'primary', size: '0.75rem' }}>Article</P>
              <Icon icon='Chain' width='auto' height='22px' />
            </Flex>
            <CardContent>Introducing the Chainlink Staking Platform: v0.2 Upgrade and Launch Details</CardContent>
          </CardContainer>
          <CardContainer>
            <Flex $style={{
              hAlign: 'space-between',
              vAlign: 'center',
              w: '100%'
            }}>
              <P $style={{ transform:'uppercase', color: 'primary', size: '0.75rem' }}>Article</P>
              <Icon icon='Chain' width='auto' height='22px' />
            </Flex>
            <CardContent>How to Stake Chainlink (LINK)</CardContent>
          </CardContainer>
          <CardContainer>
            <Flex $style={{
              hAlign: 'space-between',
              vAlign: 'center',
              w: '100%'
            }}>
              <P $style={{ transform:'uppercase', color: 'primary', size: '0.75rem' }}>Article</P>
              <Icon icon='Chain' width='auto' height='22px' />
            </Flex>
            <CardContent>Migration and Early Access Eligibility for Chainlink Staking v0.2</CardContent>
          </CardContainer>
          <CardContainer>
            <Flex $style={{
              hAlign: 'space-between',
              vAlign: 'center',
              w: '100%'
            }}>
              <P $style={{ transform:'uppercase', color: 'primary', size: '0.75rem' }}>Article</P>
              <Icon icon='Chain' width='auto' height='22px' />
            </Flex>
            <CardContent>Sustainable Oracle Economics Are Critical to the Success of Web3</CardContent>
          </CardContainer>
        </Grid>
      </BlogWrapper>
    </BlogContainer>
  )
}

export default Blogs