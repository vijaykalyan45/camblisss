import React from "react";
import AboutImgOne from "@assets/img/logo/one.png";
import AboutImgTwo from "@assets/img/logo/two/3.png";
import AboutImgThere from "@assets/img/logo/three.png";
import Image from "next/image";
import Link from "next/link";

const HomeAboutFour = () => {
  return (
    <div className="about-area section-spacing-top fix-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="fm-about-thumb-wrapper-3 wow fmSlideInLeft" data-wow-delay="0.4s">
              <div className="fm-about-thumb-3">
                <Image
                  src={AboutImgOne}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="fm-about-thumb-3">
                <Image
                  src={AboutImgTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="fm-about-thumb-3">
                <Image
                  src={AboutImgThere}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-2-wrapper wow fmSlideInRight" data-wow-delay="0.4s">
              <div className="section-title sec-sub-style mb-30">
                <span className="section-subtitle">ABOUT US</span>
                <h2 className="section-main-title about-sec-title-2 title-anim ">
            Your Success Story Starts with<br/>
                  <span>Cambliss Studio</span>
                </h2>
              </div>
              <div className="fm-about-content-2">
                <p>
                  Cambliss Studio specializes in a wide range of cutting-edge
                  Technologies that power the digital landscape and we make sure
                  that your bussiness moves forward.
                
                </p>
                <p>
                  We Believe that Cambliss Studio is Your reliable partner in the ever evolving world of marketing and your secret weapon
                  for a standout online presence.
                </p>
                {/* <Link href="/contact" className="fill-btn fade_bottom">
                  Hire Me
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutFour;
