import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "@assets/img/logo/logo.png";
import MobileMenus from "./mobile-menus";
import Cambliss1 from "@assets/img/logo/cambliss.png"

const OffCanvasMain = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  const handleSubmit = (e) => {

    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div
        className={`fm-header-sidebar-area fm-header-sidebar-left ${isOffCanvasOpen ? "header-sidebar-visible" : ""
          }`}
      >
        <div className="fm-header-sidebar-wrapper">
          <div className="fm-header-sidebar-action mb-75">
            <div className="fm-header-sidebar-logo">
              <Link href="/">
                <Image
                  src={Cambliss1}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="img not found"
                />
              </Link>
            </div>
            <div className="offcanvas-close">
              <button
                className="offcanvas-btn"
                onClick={() => setIsOffCanvasOpen(false)}
              >
                <i className="fa-thin fa-times"></i>
              </button>
            </div>
          </div>
          <div className="d-none d-sm-block">
            <div className="fm-header-sidebar-search">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search here" />
                <button type="submit">
                  <i className="flaticon flaticon-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="mobile-menu mean-container d-xl-none">
            <nav className="mean-nav">
              <MobileMenus />
            </nav>
          </div>
          <div className="d-none d-sm-block">
            <div className="fm-offcanvas-about mt-30 mb-30">
              <h4>About CAMBLISS</h4>
              <p>
                We Believe Film And Moving Image Has The PowerTo Create
                Significant Change.
              </p>
            </div>
          </div>
          <div className="offcanvas-contact mt-45 mb-30">
            <h4 className="offcanvas-contact-title">Contact Information</h4>
            <ul>
              <li className="d-flex align-items-center gap-2">
                <div className="offcanvas-contact-icon">
                  <Link
                    target="_blank"
                    href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                  >
                    <i className="fal fa-map-marker-alt"></i>
                  </Link>
                </div>
                <div className="offcanvas-contact-text">
                  <Link
                    target="_blank"
                    href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                  >
                    SURVEY NO: 75/2, BALAPUR(V), HYDERABAD, TELANGANA, 500005
                  </Link>
                </div>
              </li>
              <li className="d-flex align-items-center gap-2">
                <div className="offcanvas-contact-icon">
                  <Link href="tel:+088889797697">
                    <i className="far fa-phone"></i>
                  </Link>
                </div>
                <div className="offcanvas-contact-text">
                  <Link href="tel:915550303420">8309264634</Link>
                </div>
              </li>
              <li className="d-flex align-items-center gap-2">
                <div className="offcanvas-contact-icon">
                  <Link href="mailto:contact@camblissstudio.com">
                    <i className="fal fa-envelope"></i>
                  </Link>
                </div>
                <div className="offcanvas-contact-text">
                  <Link href="mailto:contact@camblissstudio.com">
                  contact@camblissstudio.com
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="d-none d-sm-block d-sm-none d-md-block">
            <div className="fm-offcanvas-social">
              <span className="social-text">Follow :</span>
              <div className="fm-offcanvas-social-icon">
                <Link href="https://www.facebook.com/profile.php?id=61553561020127" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link href="https://twitter.com/" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link href="https://www.pinterest.com/" target="_blank">
                  <i className="fa-brands fa-pinterest-p"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${isOffCanvasOpen ? "visible-overlay" : ""}`}
        onClick={() => setIsOffCanvasOpen(false)}
      ></div>
    </React.Fragment>
  );
};

export default OffCanvasMain;
