import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import React from "react";
import ShopDetails from "@components/shop-details/shop-main-area";
import { useRouter } from "next/router";

const ServiceDetails = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Wrapper>
      <SEO pageTitle="Faime" />
      <ShopDetails id={id} />
    </Wrapper>
  );
};

export default ServiceDetails;
