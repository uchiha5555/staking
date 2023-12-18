import React, { useState } from 'react'
import { FeedsContainer, LaptopPaginationContainer, MobilePaginationContainer, NotifyContainer, PageButton, PaginationContainer, StateTable, StateTableHeader, StatusBar, StatusWrapper, SuccessBadge, TableCellContainer, TableContainer, TitleContainer } from './style'
import { Flex, Grid, Heading, P, Span } from '@/components/basic'
import { Icon } from '@/components/custom'
import { Table } from 'antd';
import { mockData } from '@/constants/mockdata'

const columns = [
  {
    title: 'Oracle',
    dataIndex: 'oracle_name',
    render: (text: any, record: any, index: number) => (
      <TableCellContainer>
        <Icon icon={record.icon} width='24px' height='24px' />
        <Span>{text}</Span>
      </TableCellContainer>
    ),
    key: 'oracle_name',
    width: '100px'
  },
  {
    title: 'Lastest answer',
    dataIndex: 'latest_answer',
    render: (text: any, record: any, index: number) => <Span $style={{ color: 'color-placeholder', size: '14px' }}>{text}</Span>,
    width: '100px',
    key: 'latest_answer'
  },
  {
    dataIndex: 'date',
    title: 'Date',
    render: (text: any, record: any, index: number) => <Span $style={{ color: 'color-placeholder', size: '14px' }}>{text}</Span>,
    width: '200px',
    key: 'date',
  },
  {
    dataIndex: 'status',
    title: 'Status',
    render: (text: any, record: any, index: number) => <SuccessBadge><Span $style={{ color: 'success', size: '14px' }}>{text}</Span></SuccessBadge>,
    width: '100px',
    key: 'status'
  },
  {
    title: 'Action',
    render: (text: any, record: any, index: number) => <Icon icon='Details' width='auto' height='24px' />,
    width: '100px'
  }
];



const Feeds = () => {
  const [pageCount, setPageCount] = useState(1);
  return (
    <FeedsContainer>
      <Heading level={3} $style={{ color: 'header', weight: '500' }}>Data feeds secured</Heading>
      <StateTableHeader>
        <TitleContainer>
          <Icon icon='Ether1' width='auto' height='32px' />
          <Heading level={4} $style={{ color: 'header', weight: '500' }}>ETH/USD Feed</Heading>
          <Icon icon='OutLink' width='auto' height='16px' />
        </TitleContainer>
        <StatusBar>
          <Grid $style={{
            columns: '4',
            gap: '32px',
            queries: {
              768: {
                columns: '1'
              }
            }
          }}>
            <StatusWrapper>
              <Flex $style={{ vAlign: 'center', fDirection: 'row', gap: '8px' }}>
                <Span $style={{ color: 'color-status', size: '14px' }}>Answer</Span>
                <Icon icon='Sub' width='auto' height='12px' />
              </Flex>
              <Heading level={5} $style={{ color: 'number', weight: '500' }}>$2,230.31</Heading>
            </StatusWrapper>
            <StatusWrapper>
              <Flex $style={{ vAlign: 'center', fDirection: 'row', gap: '8px' }}>
                <Span $style={{ color: 'color-status', size: '14px' }}>Oracle responses</Span>
                <Icon icon='Sub' width='auto' height='12px' />
              </Flex>
              <Heading level={5} $style={{ color: 'number', weight: '500' }}>29/31</Heading>
            </StatusWrapper>
            <StatusWrapper>
              <Flex $style={{ vAlign: 'center', fDirection: 'row', gap: '8px' }}>
                <Span $style={{ color: 'color-status', size: '14px' }}>Last update</Span>
                <Icon icon='Sub' width='auto' height='12px' />
              </Flex>
              <Heading level={5} $style={{ color: 'number', weight: '500' }}>6 minutes ago</Heading>
            </StatusWrapper>
            <StatusWrapper>
              <Flex $style={{ vAlign: 'center', fDirection: 'row', gap: '8px' }}>
                <Span $style={{ color: 'color-status', size: '14px' }}>Alerts raised</Span>
                <Icon icon='Sub' width='auto' height='12px' />
              </Flex>
              <Heading level={5} $style={{ color: 'number', weight: '500' }}>0</Heading>
            </StatusWrapper>
          </Grid>
        </StatusBar>
      </StateTableHeader>
      <StateTable>
        <Heading level={4} $style={{ color: 'header', weight: '500' }}>Node operators</Heading>
        <TableContainer>
          <Table columns={columns} dataSource={mockData.slice(pageCount * 10, pageCount * 10 + 10)} scroll={{ x: 900 }} pagination={false} />
        </TableContainer>
        <PaginationContainer>
          <PageButton color='#CED0D5' onClick={() => pageCount > 0 && setPageCount(pageCount - 1)}>Prev</PageButton>
          <LaptopPaginationContainer>
            <P $style={{ color: 'color-placeholder', size: '15px' }}>Showing {pageCount * 10 < 1 ? 1 : pageCount * 10} to {pageCount * 10 + 10 < mockData.length ? pageCount * 10 + 10 : mockData.length} of {mockData.length} entries</P>
          </LaptopPaginationContainer>
          <PageButton color='#375BD2' onClick={() => pageCount * 10 + 10 < mockData.length && setPageCount(pageCount + 1)}>Next</PageButton>
        </PaginationContainer>
        <MobilePaginationContainer>
          <P $style={{ color: 'color-placeholder', size: '15px' }}>Showing {pageCount * 10 < 1 ? 1 : pageCount * 10} to {pageCount * 10 + 10 < mockData.length ? pageCount * 10 + 10 : mockData.length} of {mockData.length} entries</P>
        </MobilePaginationContainer>
      </StateTable>
      <NotifyContainer>Please see the following blog posts and <Span $style={{ color: 'primary' }}>Terms of Service</Span> for important information and disclosures. <P $style={{ color: 'color-placeholder', size: '16px', align: 'center' }}>Chainlink Staking v0.2 is currently in beta.</P></NotifyContainer>
    </FeedsContainer>
  )
}

export default Feeds