import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  /* background: ${GV('white')}; */
  margin-top: 120px;
  max-width: min(calc(1440px - 2 * 64px),calc(100% - 2 * 64px));
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
`

export const BackgroundContainer = styled.div`
  position: absolute;
  top: -150px;
  left: -20px;
  z-index: -1;
`