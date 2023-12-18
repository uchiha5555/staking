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

export const StatusCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    border-radius: 4px;
    border: 1px solid #ECEDEF;
    background: #FFF;
`