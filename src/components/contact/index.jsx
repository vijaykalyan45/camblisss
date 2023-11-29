import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import ContactArea from "./contact-area";
import ContactMap from "./contact-map";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Contact Us" subTitle="Contact Us" />
        <ContactArea />
        <ContactMap />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
