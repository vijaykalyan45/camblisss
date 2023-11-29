import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import { useRouter } from "next/router";
import React from "react";
import MovieDetailsPage from "../../components/movie-details/movie-details-main";

const MovieDetails = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Wrapper>
      <SEO pageTitle={"Faime"} />
      <MovieDetailsPage id={id} />
    </Wrapper>
  );
};

export default MovieDetails;
