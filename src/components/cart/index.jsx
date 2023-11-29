import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import CartArea from "./cart-area";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Cart" subTitle="Cart" />
        <CartArea />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
