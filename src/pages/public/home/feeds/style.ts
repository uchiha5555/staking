import styled from "styled-components";

export const FeedsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 48px;

    @media (max-width: 991px) {
        padding: 0 32px;
    }

    @media (max-width: 768px) {
        padding: 0 24px;
    }
`;

export const StateTableHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 40px;
    border: 1px solid #ecedef;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    margin-top: 32px;
`

export const StateTable = styled.div`
    border: 1px solid #ecedef;
    /* border-bottom: none; */
    border-radius: 0 0 4px 4px;
    padding: 40px 24px 24px;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;

    &>* {
        :not(:last-child) {
            margin-right: 16px;
        }
    }
`;

export const StatusBar = styled.div`
    margin-top: 40px;
`;

export const StatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 32px;

    &>* {
        :not(:last-child) {
            margin-bottom: 12px;

            @media (max-width: 768px) {
                border: none;
            }
        }
    }

    :not(:first-child) {
        border-left: 1px solid #ECEDEF;
    }

    @media (max-width: 768px) {
        border: none;
    }
`;

export const TableContainer = styled.div`
    margin-top: 40px;
`;

export const TableCellContainer = styled.div`
    display: flex;
    align-items: center;
    
    &>* {
        :not(:last-child) {
            margin-right: 16px;
        }
    }
    font-size: 14px;
    color: #0C162C;
`;

export const SuccessBadge = styled.div`
    display: flex;
    height: 24px;
    padding: 5px 7.8px 5px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #F4FCF8;
    width: fit-content;
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 24px;
`;

export const PageButton = styled.div<{ color?: string }>`
    ${({ color }) => color && `border: 2px solid ${color};`}
    ${({ color }) => color && `color: ${color};`}
    border-radius: 4px;
    padding: 13px 26px;
`;

export const NotifyContainer = styled.div`
    margin: 40px;
    color: #6D7380;
    font-size: 16px;
    text-align: center;
`;