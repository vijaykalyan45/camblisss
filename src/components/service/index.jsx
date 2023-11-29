import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import TestimonialSliderOne from "@components/elements/slider/testimonial-slider/testimonial-slider-one";
import ServiceSectionThere from "@components/home-there/service-section-there";
import { Header } from "@layout/index";
import React from "react";
import PricingSection from "./pricing-section";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Services" subTitle="Services" />
        <ServiceSectionThere />
        {/* <TestimonialSliderOne /> */}
        <PricingSection />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
