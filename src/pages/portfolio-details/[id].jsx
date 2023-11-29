import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import { useRouter } from "next/router";
import React from "react";
import PortfolioDetailsPage from "@components/portfolo-details-page";

const PortfolioDetails = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Wrapper>
      <SEO pageTitle="Faime" />
      <PortfolioDetailsPage id={id} />
    </Wrapper>
  );
};

export default PortfolioDetails;
