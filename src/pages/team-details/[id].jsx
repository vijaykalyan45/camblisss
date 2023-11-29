import SEO from "@components/seo";
import { Wrapper } from "@layout/index";
import { useRouter } from "next/router";
import React from "react";
import TeamDetailsPage from "@components/team-details";

const TeamDetails = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Wrapper>
      <SEO pageTitle="Faime" />
      <TeamDetailsPage id={id} />
    </Wrapper>
  );
};

export default TeamDetails;
