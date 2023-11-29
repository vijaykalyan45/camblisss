import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import TeamSectionTwo from "@components/common/team/team-section-two";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Team" subTitle="Team" />
        <TeamSectionTwo />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
