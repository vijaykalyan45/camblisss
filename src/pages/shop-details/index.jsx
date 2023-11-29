import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import ShopDetails from "@components/shop-details/shop-main-area";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Faime" />
      <ShopDetails />
    </Wrapper>
  );
};

export default index;
