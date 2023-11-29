import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@assets/img/logo/logo.png";
import { useEffect } from "react";
import { useState } from "react";
import Menus from "./menus";
import OffCanvasMain from "@components/common/off-canvas";
import useGlobalContext from "@hooks/use-context";
import Cambliss from "@assets/img/logo/cambliss.png"

const Header = ({ HeaderWrapperClass }) => {
  const { user, logout } = useGlobalContext();
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
        className={
          HeaderWrapperClass
            ? `fm-header-area header-border transparent-header header-main ${HeaderWrapperClass}`
            : "fm-header-area header-border transparent-header header-main"
        }
      >
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="header-wrapper">
              <div className="fm-header-logo-wrapper">
                <Link href="/" className="fm-header-logo">
                  <Image
                    style={{ width: "200px", height: "60px" }}
                    src={Cambliss}
                    alt="img not found"
                  />
                </Link>
                <span className="separator d-none d-xl-block"></span>
                <button
                  className="fm-header-bar-1"
                  onClick={() => setIsOffCanvasOpen(true)}
                >
                  <span className="fm-header-bar-line fm-header-bar-line-1"></span>
                  <span className="fm-header-bar-line fm-header-bar-line-2"></span>
                  <span className="fm-header-bar-line fm-header-bar-line-3"></span>
                </button>
              </div>
              <div className="header-menu-spc d-none d-xl-block">
                <div className="fm-header-nav">
                  <nav className="mean-nav" id="mobile-menu ">
                    <Menus />
                  </nav>
                </div>
              </div>
              <div className="fm-header-right d-none d-xl-block">
                {user ? (
                  <button onClick={() => logout()} className="fill-btn">
                    Log out
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </button>
                ) : (
                  <Link href="/login" className="fill-btn">
                    Login
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
      {/* full canvas area start */}
      <OffCanvasMain
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
    </>
  );
};

export default Header;
