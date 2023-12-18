import React, { useEffect } from "react";

import { BackgroundContainer, HomeContainer, HomeWrapper } from "./style";
import Staking from "./staking";
import Feeds from "./feeds";
import Blogs from "./blog";
import { Icon } from "@/components/custom";


const HomePage = () => {
    useEffect(() => {
    }, [])
    return (
        <HomeWrapper>
            <BackgroundContainer>
                <Icon icon='Rect' width="100%" height="100%" />
            </BackgroundContainer>
            <HomeContainer>
                <Staking />
                <Feeds />
                <Blogs />
            </HomeContainer>
        </HomeWrapper>
    )
}

export default HomePage;
