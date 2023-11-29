import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import { useRouter } from "next/router";
import React from "react";
import BlogDetailsPage from "@components/blog-details";

const MovieDetails = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Wrapper>
      <SEO pageTitle={"Faime"} />
      <BlogDetailsPage id={id} />
    </Wrapper>
  );
};

export default MovieDetails;
