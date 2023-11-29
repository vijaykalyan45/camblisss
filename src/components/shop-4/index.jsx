import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import React from "react";
import ShopProducts from "./shop-products";
import HeaderThere from "@layout/headers/header-there";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <>
      <HeaderThere />
      <main>
        <Breadcrumb title="Shop" subTitle="Shop" />
        <ShopProducts />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
