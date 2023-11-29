import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import { Header } from "@layout/index";
import React from "react";
import PortfolioDetailsArea from "./portfolio-details-area";
import CaseQouteArea from "./case-quote-area";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";

const index = ({ id }) => {
  return (
    <>
      <Header extraClass="fm-header-area header-border header-spc-2 fm-header-transparent header-main" />
      <main>
        <Breadcrumb title="Portfolio Details" subTitle="Portfolio Details" />
        <PortfolioDetailsArea id={id} />
        <CaseQouteArea />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
