import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import Services from '@components/service'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle='Faime' />
            <Services />
        </Wrapper>
    );
};

export default index;