import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import HomeTwo from '../components/home-two'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle='Services' />
            <HomeTwo />
        </Wrapper>
    );
};

export default index;