import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import BlogDetailsArea from "./blog-details-area";

const index = ({ id }) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Blog Details" subTitle="Blog Details" />
        <BlogDetailsArea id={id} />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
