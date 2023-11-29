import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import ShopFourPage from '@components/shop-4'

const ShopFour = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Faime" />
            <ShopFourPage />
        </Wrapper>
    );
};

export default ShopFour;