import ContactSection from "@components/common/contact/contact-area";
import MovieSliderTwo from "@components/elements/slider/movie-slider/movie-slider-two";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import MovieSectionFive from "./movie-section-five";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <MovieSliderTwo />
        <MovieSectionFive />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
