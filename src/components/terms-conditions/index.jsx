import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import TermsConditionMain from "./terms-condition-main";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Terms & Conditions" subTitle="Terms & Conditions" />
        <TermsConditionMain />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
