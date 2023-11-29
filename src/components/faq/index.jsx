import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import FaqSection from "@components/portfolo-details-page/faq-section";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="FAQ" subTitle="FAQ" />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
