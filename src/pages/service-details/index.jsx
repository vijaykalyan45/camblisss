import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import ServiceDetails from "@components/service-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Faime" />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
