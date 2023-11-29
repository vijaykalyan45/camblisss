import React from "react";
import ShopProduct from "./shop-product";
import ProductContent from "./product-content";
import ShopMovieSlider from "@components/elements/slider/movie-slider/shop-movie-slider";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const ShopDetailsArea = () => {
  return (
    <>
      <Breadcrumb title="Shop Details" subTitle="Shop Details" />

      <div className="fm-shop-details-area section-spacing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ShopProduct />
              <ProductContent />
              <ShopMovieSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailsArea;
