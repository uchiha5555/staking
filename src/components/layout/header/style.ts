import { Span } from "@/components/basic";
import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const ErrorText = styled.div`
  position: fixed;

  top: 80px;
  left: 200px;

  font-size: 40px;
  line-height: 50px;
  color: red;
`

export const HeaderContainer = styled.header<{ isTop?: boolean }>`
  position: fixed;
  /* ${({ isTop }) =>
    !isTop
      ? `position: fixed;`
      : `position: absolute;`} */
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  width: 100%;
  min-height: 64px;
  z-index: 999;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.06);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: min(calc(1440px - 2 * 64px),calc(100% - 2 * 64px));
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 24px;
  }
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;

  &>* {
    :not(:last-child) {
      margin-right: 16px;
    }
  }
`;

export const HeaderFont = styled(Span)`
  font-size: 14px;
  color: initial;
  margin-left: 8px;
`;

export const IconContainer = styled.div`
  align-items: center;
  display: none;

  &>* {
    :not(:last-child) {
      margin-right: 24px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

export const HeaderActionContainer = styled.div`
  display: flex;
  align-items: center;

  &>* {
    :not(:last-child) {
      margin-right: 8px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LastNavItem = styled.div`
  margin-left: 16px;
`;

export const HeaderCustomButton = styled.button`
  border: 2px solid #375BD2;
  border-radius: 0.25rem;
  box-shadow: 0px 12px 32px -12px rgba(12, 22, 44, 0.32);
  color: var(--primary);
  font-weight: ${GV('weight-md')};
  font-size: ${GV('font-size-5')};
  min-width: 140px;
  max-width: 140px;
  width: 100%;
  height: 44px;

  @media (max-width: 996px) {
    display: none;
  }
`;

export const MobileHeaderCustomButton = styled.div`
  color: var(--header);
  border-bottom: 2px solid var(--header);
  font-size: 16px;
  display: none;

  @media (max-width: 996px) {
    display: inline-block;
  }
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid #DFE7FB;
  padding: 0 16px;

  &>* {
    :not(:last-child) {
      margin-right: 8px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`

export const MobileMenuItem = styled.div<{ isFirst?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  line-height: 1rem;
  font-weight: 600;
  color: ${GV('color-placeholder')};
  font-size: 1rem;

  ${({ isFirst }) => isFirst ? `font-size: 0.875rem; color: #b7bac0;` : ``}
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  transition: all .3s ease;
  border: 1px solid transparent;
  white-space: nowrap;

  &:hover {
    border: 1px solid #dfe7fb;
    border-radius: 4px;
    opacity: .9;
  }
`