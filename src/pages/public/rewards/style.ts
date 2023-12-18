import { Heading, P } from "@/components/basic";
import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const RewardsContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 900px;
    margin-top: 120px;
    margin-left: auto;
    margin-right: auto;
`;

export const RewardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-left: 64px;
    margin-right: 64px;

    @media (max-width: 991px) {
        margin-left: 32px;
        margin-right: 32px;
    }

    @media (max-width: 768px) {
        margin-left: 24px;
        margin-right: 24px;
    }
`

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto;
    padding: 48px;
    border: 1px solid #ecedef;
    border-radius: 4px;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 648px;
    }

    @media (max-width: 768px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const Title = styled(Heading)`
    color: var(--header);
    font-size: ${GV('font-size-3')};
    margin: 48px 0 16px;
`;

export const Description = styled(P)`
    font-size: 16px;
    color: #6d7380;
    margin-bottom: 24px;
`;

export const Caption = styled.div`
    font-size: 1.25rem;
    color: ${GV('color-placeholder')};
    margin-top: 16px;
    display: none;

    @media (max-width: 479px) {
        display: inline-block;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`;

export const ConnectButton = styled.button`
    display: flex;
    justify-content: space-between;
    color: white;
    background: var(--primary);
    border-radius: 4px;
    padding: 12px 24px;
`;

export const VersionContainer = styled.div`
    @media (max-width: 479px) {
        display: none;
    }
`