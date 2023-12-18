import styled from "styled-components";
import Background from '@/assets/img/hexagon-bg.png';

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    @media (max-width: 991px) {
        padding: 0 32px;
    }

    @media (max-width: 768px) {
        padding: 0 24px;
    }
`;


export const BlogWrapper = styled.div`
    margin-top: 40px;
    overflow-x: auto;
    /* min-width: 900px; */
    max-width: 960px;
    margin-bottom: 64px;
`;


export const CardContainer = styled.div`
    background-image: url(${Background});
    background-size: 800px 450px;
    background-position: 95% 25%;
    padding: 16px;
    height: 300px;
    width: 207px;
    border: 1px solid #ecedef;
    border-radius: 4px;
    background-color: #fff;

    &:not(:last-child) {
        margin-right: 26px;
    }
`;

export const CardContent = styled.div`
    position: relative;
    margin-top: 64px;
    color: var(--primary);

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: -16px;
        height: 2px;
        width: 18px;
        border: 1px solid var(--primary);
        border-radius: 1px;
    }
`