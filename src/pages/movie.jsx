import SEO from '@components/seo';
import { Wrapper } from '@layout/index';
import React from 'react';
import MovieMain from '../components/movie'

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle='Faime' />
            <MovieMain />
        </Wrapper>
    );
};

export default index;