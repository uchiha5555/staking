import styled from "styled-components";

export const StakingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    &>* {
        :not(:last-child) {
            margin-bottom: 24px;
        }
    }

    @media (max-width: 991px) {
        padding: 0 32px;
    }

    @media (max-width: 768px) {
        padding: 0 24px;
    }
`;

export const StatusCard = styled.div<{ bg?: string, isLast?: boolean }>`
    display: flex;
    flex-direction: column;
    padding: 25px;
    border-radius: 4px;
    border: 1px solid #ECEDEF;
    ${({ isLast }) => isLast ? `height: 100%;` : `height: 207px;`}
    ${({ bg }) => bg
        ? `background-image: url(${bg}); background-repeat: no-repeat; background-position: right bottom;`
        : `background: #fff`
    }
`;

export const RadioButton = styled.div<{ bg?: string }>`
    ${({ bg }) => bg ? `background: ${bg};` : ''}
    width: 16px;
    height: 16px;
    border-radius: 50%;
`

export const OptionContainer = styled.div` 
    display: flex;
    justify-content: center;
    margin: 0;

    &>* {
        :not(:last-child) {
            margin-right: 24px;
        }
    }
`;

export const OptionTextContainer = styled.div`
    display: flex;
    align-items: center;
    
    &>* {
        :not(:last-child) {
            margin-right: 8px;
        }
    }
`