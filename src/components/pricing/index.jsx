import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import PricingSection from "@components/service/pricing-section";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Pricing" subTitle="Pricing" />
        <PricingSection />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
