import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import MovieDetailsPage from "../../components/movie-details/movie-details-main";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Faime" />
      <MovieDetailsPage />
    </Wrapper>
  );
};

export default index;
