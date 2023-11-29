import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import ServicesSection from "./services-section";
import AboutArea from "./about-area";
import TestimonialSliderOne from "@components/elements/slider/testimonial-slider/testimonial-slider-one";
import AchievementArea from "./achievement-area";
import BrandAreaSection from "@components/elements/slider/brand-slider/brand-slider-one";
import TeamSectionTwo from "@components/common/team/team-section-two";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="About Us" subTitle="About Us" />
        <ServicesSection />
        <AboutArea />
        {/* <TestimonialSliderOne /> */}
        <AchievementArea />
        <TeamSectionTwo teamBottomBorder={true} />
        <BrandAreaSection
          brandWrapperClass="brand-area section-spacing"
          borderClass="fm-brand"
        />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
