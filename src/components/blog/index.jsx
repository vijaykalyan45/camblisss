import FooterOne from "@layout/footers/footer-one";
import { Header } from "@layout/index";
import React from "react";
import SectionTitle from "./section-title";
import PostBoxArea from "./postbox-area";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitle />
        <PostBoxArea />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
