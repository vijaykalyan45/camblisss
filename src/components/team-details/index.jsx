import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import TeamDetailsArea from "./team-details-area";
import MovieSliderEight from "@components/elements/slider/movie-slider/movie-slider-eight";
import ContactSection from "@components/common/contact/contact-area";
import SkillArea from "./skill-area";

const index = ({ id }) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Team Details" subTitle="Team Details" />
        <TeamDetailsArea id={id} />
        <SkillArea />
        <MovieSliderEight />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
