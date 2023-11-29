import React from "react";
import CuponArea from "./cupon-area";
import CheckoutSection from "./checkout-section";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderThere from "@layout/headers/header-there";
import FooterOne from "@layout/footers/footer-one";
import { useSelector } from "react-redux";

const CheckoutMainArea = () => {
  const { cartProducts } = useSelector((state) => state?.cart);
  return (

    <>
      <HeaderThere />
      {cartProducts?.length === 0 && (
        <>
          <Breadcrumb title="Checkout Page" subTitle="Checkout Page" />
          <div className="container">
            <div className="empty-text pt-100 checkout-title text-center">
              <h3>You can see the checkout <br /> page after adding the product</h3>
            </div>
          </div>
        </>
      )}
      {cartProducts?.length >= 1 && (
        <main>
          <Breadcrumb title={"Cheakout"} subTitle={"Cheakout"} />
          <CuponArea />
          <CheckoutSection />
        </main>
      )}
      <FooterOne />
    </>

  );
};

export default CheckoutMainArea;
