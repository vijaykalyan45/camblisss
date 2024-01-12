import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeTwoBg from "@assets/img/bg/home-2-bg.png";
import HomeTwoBgTwo from "@assets/img/bg/home-2-bg-2.png";
import awardLogo from "@assets/img/new-award-logo/award-2.png";
import logo1 from "@assets/img/logo/servicespage1.png";
import logo2 from "@assets/img/logo/servicespage2.png";


const HeroTwo = () => {
  return (
    <>
      {/* <div className="adjust-header-space bg-common-black"></div> */}
      <section className="fm-hero-area-2 fm-home-style-2 bg-common-black fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="fm-hero-wrapper p-relative">
                <div className="fm-hero-thumb-2">
                  <Image
                    src={logo1}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                </div><br/><br/>
                <div className="fm-hero-title-wrapper">
                  <h1 className="fm-sec-title text-white">
                    <span className="sec-title-3 sec-title-left">
                      UNLEASHING CREATIVITY
                    </span>
                    <span className="sec-title-3 story">ELEVATING BRANDS</span>
                  </h1>
                </div>
              <br/><br/><br/><br/><br/><br/><br/>
                <div className="fm-hero-content">
                  <p className="fm-hero-text animate_content large">
                    At Cambliss, we prioritize delivering exceptional value to our clients.
                    We understand that their success is our success, and we strive to go above and beyond
                    to exceed their excpectations  and drive tangible results for their bussiness.
                  </p>

                  <div className="fm-btn mt-35">
                    <Link href="/contact" className="border-btn is-white">
                      Explore Now
                      <span>
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div><br/><br/><br/>
                <div className="d-none d-sm-none d-md-block">
                  <div className="fm-hero-thumb-3">
                    <Image
                      src={logo2}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </div>
                </div>
                <div className="d-none d-xxl-block">
                  <div className="fm-sidebar-2">
                    <div className="fm-sliderfull-social">
                      <label className="label-bg">Follow</label>
                      <Link href="https://www.facebook.com/profile.php?id=61553561020127">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link href="https://twitter.com/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link href="https://www.pinterest.com/">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTwo;
