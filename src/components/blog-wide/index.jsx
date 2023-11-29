import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import BlogWideArea from "./blog-wide-area";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Blog Wide" subTitle="Blog Wide" />
        <BlogWideArea />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
