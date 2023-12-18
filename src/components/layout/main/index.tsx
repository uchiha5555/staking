import React from "react";
import styled from "styled-components";

export const Main = styled.main<{ slideOpened?: boolean }>`
    position: relative;
    transition: all ease-in .5s;
    width: 100%;
    background: var(--white);
    /* min-height: 900px; */
`;
