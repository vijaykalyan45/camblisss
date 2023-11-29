import PortfolioSlider from "@components/elements/slider/portfolio-slider/portfolio-slider";
import { Header } from "@layout/index";
import React from "react";

const index = () => {
  return (
    <>
      <Header HeaderWrapperClass="bg-common-black" />
      <main>
        <PortfolioSlider />
      </main>
    </>
  );
};

export default index;
