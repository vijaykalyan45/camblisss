import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import React from "react";
import ShopArea from "./shop-area";
import HeaderThere from "@layout/headers/header-there";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <>
      <HeaderThere />
      <main>
        <Breadcrumb title="Shop Sidebar" subTitle="Shop Sidebar" />
        <ShopArea />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
