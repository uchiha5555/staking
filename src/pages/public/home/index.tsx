import React, { useEffect } from "react";

import { HomeContainer } from "./style";
import Staking from "./staking";
import Feeds from "./feeds";
import Blogs from "./blog";


const HomePage = () => {
    useEffect(() => {
    }, [])
    return (
        <HomeContainer>
            <Staking />
            <Feeds />
            <Blogs />
        </HomeContainer>
    )
}

export default HomePage;
