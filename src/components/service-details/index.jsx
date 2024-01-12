import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import CaseQouteArea from "@components/portfolo-details-page/case-quote-area";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import ServiceDetails from "./service-details";
import PricingSection from "@components/service/pricing-section";

const index = ({ id }) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Service Details" subTitle="Service Details" />
        <ServiceDetails id={id} />
        {/* <CaseQouteArea /> */}
        <PricingSection/>
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
