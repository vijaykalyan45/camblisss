import Home from "@components/home";
import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Home Main"} />
      <Home />
    </Wrapper>
  );
};

export default index;
