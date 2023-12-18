import React from 'react'
import { FeedsContainer, NotifyContainer, PageButton, PaginationContainer, StateTable, StateTableHeader, StatusBar, StatusWrapper, SuccessBadge, TableCellContainer, TableContainer, TitleContainer } from './style'
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
    width: '200px'
  },
  {
    title: 'Lastest answer',
    dataIndex: 'latest_answer',
    render: (text: any, record: any, index: number) => <Span $style={{ color: 'color-placeholder', size: '14px' }}>{text}</Span>,
    width: '150px',
    key: 'latest_answer'
  },
  {
    dataIndex: 'date',
    title: 'Date',
    render: (text: any, record: any, index: number) => <Span $style={{ color: 'color-placeholder', size: '14px' }}>{text}</Span>,
    width: '300px',
    key: 'date',
  },
  {
    dataIndex: 'status',
    title: 'Status',
    render: (text: any, record: any, index: number) => <SuccessBadge><Span $style={{ color: 'success', size: '14px' }}>{text}</Span></SuccessBadge>,
    width: '210px',
    key: 'status'
  },
  {
    title: 'Action',
    render: (text: any, record: any, index: number) => <Icon icon='Details' width='auto' height='24px' />,
    width: '100px'
  }
];


const Feeds = () => {
  return (
    <FeedsContainer>
      <Heading level={2} $style={{ color: 'header' }}>Data feeds secured</Heading>
      <StateTableHeader>
        <TitleContainer>
          <Icon icon='Ether' width='auto' height='32px' />
          <P $style={{ color: 'header', size: '27px' }}>ETH/USD Feed</P>
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
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Span $style={{ color: 'color-status', size: '14px' }}>Answer</Span>
                <Icon icon='Sub' width='auto' height='12px' />
              </Flex>
              <P $style={{ color: 'color-number', size: '23px' }}>$2,230.31</P>
            </StatusWrapper>
            <StatusWrapper>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Span $style={{ color: 'color-status', size: '14px' }}>Oracle responses</Span>
                <Icon icon='Sub' width='auto' height='12px' />
              </Flex>
              <P $style={{ color: 'color-number', size: '23px' }}>31/31</P>
            </StatusWrapper>
            <StatusWrapper>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Span $style={{ color: 'color-status', size: '14px' }}>Last update</Span>
                <Icon icon='Sub' width='auto' height='12px' />
              </Flex>
              <P $style={{ color: 'color-number', size: '23px' }}>19 minutes ago</P>
            </StatusWrapper>
            <StatusWrapper>
              <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                <Span $style={{ color: 'color-status', size: '14px' }}>Alerts raised</Span>
                <Icon icon='Sub' width='auto' height='12px' />
              </Flex>
              <P $style={{ color: 'color-number', size: '23px' }}>0</P>
            </StatusWrapper>
          </Grid>
        </StatusBar>
      </StateTableHeader>
      <StateTable>
        <P $style={{ color: 'header', size: '27px' }}>Node operators</P>
        <TableContainer>
          <Table columns={columns} dataSource={mockData} scroll={{ x: 1100 }} pagination={false} />
        </TableContainer>
        <PaginationContainer>
          <PageButton color='#CED0D5'>Prev</PageButton>
          <P $style={{ color: 'color-placeholder', size: '15px' }}>Showing 1 to 10 of 31 entries</P>
          <PageButton color='#375BD2'>Next</PageButton>
        </PaginationContainer>
      </StateTable>
      <NotifyContainer>Please see the following blog posts and Terms of Service for important information and disclosures. Chainlink Staking v0.2 is currently in beta.</NotifyContainer>
    </FeedsContainer>
  )
}

export default Feeds