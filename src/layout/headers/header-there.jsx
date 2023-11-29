import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@assets/img/logo/logo.png";
import { useEffect } from "react";
import { useState } from "react";
import OffCanvasMain from "@components/common/off-canvas";
import SidebarCart from "@components/common/sidebar/sidebar-cart";
import Menus from "./menus";
import { useUniqueProductCount } from "@hooks/use-cart-quantity";
import useGlobalContext from "@hooks/use-context";

const HeaderThere = () => {
  const { user, logout } = useGlobalContext();

  const [openCart, setOpenCart] = useState(false);
  const quantity = useUniqueProductCount();

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = (e) => {
    const header = document.querySelector(".header-main");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  // Sticky Menu Area End
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  return (
    <>
      <header
        id="header-sticky"
        className="fm-header-area header-border transparent-header header-main"
      >
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="header-wrapper">
              <div className="fm-header-logo-wrapper">
                <Link href="/" className="fm-header-logo">
                  <Image
                    style={{ width: "auto", height: "auto" }}
                    src={Logo}
                    alt="img not found"
                  />
                </Link>

                <span className="separator d-none d-xl-block"></span>
                <button
                  onClick={() => setIsOffCanvasOpen(true)}
                  className="fm-header-bar-1"
                >
                  <span className="fm-header-bar-line fm-header-bar-line-1"></span>
                  <span className="fm-header-bar-line fm-header-bar-line-2"></span>
                  <span className="fm-header-bar-line fm-header-bar-line-3"></span>
                </button>
              </div>
              <div className="header-menu-spc d-none d-xl-block">
                <div className="fm-header-nav">
                  <nav id="mobile-menu">
                    <Menus />
                  </nav>
                </div>
              </div>
              <div className="fm-header-right d-none d-xl-block">
                <span onClick={() => setOpenCart(true)} className="fm-cart ">
                  <i className="fas fa-shopping-basket"></i>
                  <span className="product-quantity-circle-cart">
                    {quantity}
                  </span>
                </span>
                {user ? (
                  <button onClick={() => logout()} className="fill-btn">
                    Log Out
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </button>
                ) : (
                  <Link href="/login" className="fill-btn">
                    Log In
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffCanvasMain
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* side cart */}
      <SidebarCart openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
};

export default HeaderThere;
