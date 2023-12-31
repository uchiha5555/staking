import { Icon } from "@/components/custom";
import { HeaderActionContainer, HeaderButton, HeaderContainer, HeaderFlex, HeaderFont, HeaderWrapper, IconContainer, LastNavItem, MobileMenuIcon, MobileMenuItem, NavItem, NavList,ErrorText } from "./style";
import { Drawer } from "antd";
import { useEffect, useState } from "react";
import useScroll from "@/hooks/useScroll";
import { Flex, Span } from "@/components/basic";
import { Link, useLocation, useNavigate } from "react-router-dom";
import _ROUTERS from "@/constants/route.constant";

import Wallet from '@/assets/img/wallet-1.svg';
import Ether from '@/assets/img/ethereum.svg';
import Image from "@/components/basic/img";

import WalletFilled from '@/assets/img/wallet_filled.svg';

const Header = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [, scrollY,] = useScroll();
    const { hash, pathname, search } = useLocation();
    const [name, setName] = useState('Connect Wallet')

    useEffect(() => {
        if (pathname === _ROUTERS._REWARDS) {
            setName('Detecting Wallet');
            setTimeout(() => {setName('Connect Wallet')}, 1000);
        }
    }, [pathname]);

    return (
        <HeaderContainer isTop={!(scrollY > 50)}>
            <HeaderWrapper>
                <HeaderFlex>
                    <Icon icon="Logo" width="auto" height="20px" />
                    <NavItem>
                        <Icon icon="Staking" width="20px" height="20px" />
                        <Span $style={{ color: 'header', size: '16px' }}>Staking</Span>
                        <Icon icon="ChevronDown" width="12px" height="12px" />
                    </NavItem>
                    <NavItem>
                        <Link to={_ROUTERS._HOME}><Span $style={{ color: 'header', size: '16px' }}>Overview</Span></Link>
                        <Link to={_ROUTERS._REWARDS}><LastNavItem><Span $style={{ color: 'header', size: '16px' }}>Rewards</Span></LastNavItem></Link>
                    </NavItem>
                    <MobileMenuIcon onClick={() => setVisible(true)}>
                        <Icon icon="Menu" width="auto" height="20px" />
                    </MobileMenuIcon>
                </HeaderFlex>
                <HeaderActionContainer>
                    <HeaderButton>
                        <Icon icon="Info" />
                    </HeaderButton>
                    <HeaderButton>
                        <Icon icon="Ether" />
                        <HeaderFont>Ethereum Ma..</HeaderFont>
                    </HeaderButton>
                    <HeaderButton>
                        <Image src={WalletFilled} alt="" $style={{ w: '16px', h: '16px', bradius: '0' }} />
                        <HeaderFont>{name}</HeaderFont>
                    </HeaderButton>
                </HeaderActionContainer>
                <IconContainer>
                    <Image src={Ether} alt="" $style={{ w: '14px', h: '20px', bradius: '0' }} />
                    <Image src={Wallet} alt="" $style={{ w: '20px', h: '20px', bradius: '0' }} />
                </IconContainer>
            </HeaderWrapper>
            <Drawer open={visible} onClose={() => setVisible(false)} placement="left" className="custom-drawer" closable={false}>
                <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                    <Flex $style={{ vAlign: 'center' }}>
                        <Icon icon="ArrowLeft" />
                        <Span $style={{ color: 'primary', size: '.875rem', weight: '700' }}>Main menu</Span>
                    </Flex>
                    <Flex onClick={() => setVisible(false)}>
                        <Icon icon="Close" />
                    </Flex>
                </Flex>
                <MobileMenuItem isFirst>/ Staking /</MobileMenuItem>
                <MobileMenuItem onClick={() => { setVisible(false); navigate(_ROUTERS._HOME) }}>Overview</MobileMenuItem>
                <MobileMenuItem onClick={() => { setVisible(false); navigate(_ROUTERS._REWARDS) }}>Rewards</MobileMenuItem>
            </Drawer>
        </HeaderContainer>
    )
}

export default Header;
