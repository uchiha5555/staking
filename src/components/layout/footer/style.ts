import styled from "styled-components";

export const FooterContainer = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    padding: 64px 0;
    width: 100%;
    height: 100%;
    background: #252E42;
    z-index: 999;

    @media (max-width: 991px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (max-width: 768px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const FooterWrapper = styled.div`
    max-width: min(calc(1440px - 2 * 64px) ,calc(100% - 2 * 64px));
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const CopyrightContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #0C162C;
    padding: 40px 64px;

    @media (max-width: 991px) {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (max-width: 768px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const FooterColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 260px; */

    &>* {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`

export const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    width: 100%;

    @media (max-width: 479px) {
        flex-direction: column;
    }
`;

export const CopyrightFont = styled.div`
    font-size: 14px;
    color: #858A95;
`;

export const CopyrightFont1 = styled.div`
    font-size: 14px;
    color: #858A95;

    @media (max-width: 991px) {
        display: none;
    }
`;

export const CopyrightFont2 = styled.div`
    font-size: 14px;
    color: #858A95;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const CustomFlex = styled.div`
    display: flex;
    align-items: center;

    &>* {
        :not(:last-child) {
            margin-right: 24px;

            @media (max-width: 479px) {
                margin-bottom: 24px;
                margin-right: 0px;
            }
        }
    }
`

export const CustomFlex2 = styled.div`
    display: flex;
    align-items: center;

    &>* {
        :not(:last-child) {
            margin-right: 24px;

            @media (max-width: 479px) {
                /* margin-bottom: 24px; */
                margin-right: 24px;
            }
        }
    }
`