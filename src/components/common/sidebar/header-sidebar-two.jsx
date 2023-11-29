import Link from "next/link";
import React from "react";
import LogoImg from "@assets/img/logo/logo.png";
import FacebookIcon from "@assets/img/new-icon/social/facebook.svg";
import InstagramIcon from "@assets/img/new-icon/social/instagram.svg";
import PinterestIcon from "@assets/img/new-icon/social/pinterest.svg";
import TwitterIcon from "@assets/img/new-icon/social/twitter.svg";
import Image from "next/image";
import MobileMenusTwo from "../off-canvas/mobile-menus-two";

const HeaderSidebarTwo = ({ isOffCanvasOpen, handleMenuOpenClose }) => {
  return (
    <div className="main-nav-wrapper">
      <div className={`main-nav-js ${isOffCanvasOpen ? "show-menu" : " "}`}>
        <div className="mobile-logo-area d-flex justify-content-between align-items-center">
          <div className="header-logo">
            <Link href="/">
              <Image
                src={LogoImg}
                style={{ width: "auto", height: "auto" }}
                alt="img not found"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="menu-close-btn" onClick={handleMenuOpenClose}>
            <i className="fa-thin fa-xmark"></i>
          </div>
        </div>
        <div className="sidebar-menu-area">
          <MobileMenusTwo />
        </div>
        <div className="sidebar-social d-flex justify-content-center gap-5 fm-toggle-social">
          <Link href="https://www.facebook.com/profile.php?id=61553561020127" target="_blank">
            <Image
              src={FacebookIcon}
              style={{ width: "100%", height: "auto" }}
              alt="img not found"
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image
              src={InstagramIcon}
              style={{ width: "100%", height: "auto" }}
              alt="img not found"
            />
          </Link>
          <Link href="https://www.pinterest.com/" target="_blank">
            <Image
              src={PinterestIcon}
              style={{ width: "100%", height: "auto" }}
              alt="img not found"
            />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <Image
              src={TwitterIcon}
              style={{ width: "100%", height: "auto" }}
              alt="img not found"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSidebarTwo;
