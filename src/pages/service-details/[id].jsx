import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import { useRouter } from "next/router";
import React from "react";
import ServiceDetailsPage from "@components/service-details";

const ServiceDetails = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Wrapper>
      <SEO pageTitle="Faime" />
      <ServiceDetailsPage id={id} />
    </Wrapper>
  );
};

export default ServiceDetails;
