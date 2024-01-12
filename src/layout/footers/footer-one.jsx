import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterOneCopyright from "./component/footer-one-copyright";
import Logo from '@assets/img/logo/cambliss.png';
import bgImage from '@assets/img/bg/footer/img-1.jpg';
import footerData from "@data/footer-data";
import { PhotoProvider, PhotoView } from "react-photo-view";


const FooterOne = () => {
  return (
    <>
      <PhotoProvider
      speed={() => 800}
      easing={(type) =>
        type === 2
          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
          : "cubic-bezier(0.34, 1.56, 0.64, 1)"}
      >
        <footer>
          <div className="footer-area-5 section-spacing-top pos-rel">
            <div
              className="footer-bg-3"
              style={{ backgroundImage: `url(${bgImage.src})` }}
            ></div>
            <div className="container">
              <div className="footer-middle-area">
                <div className="footer-wrapper footer-widget-about">
                  <div className="footer-logo-2">
                    <Link href="/">
                      <Image
                        src={Logo}
                        style={{ width: "200px", height: "60px" }}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                    Home<br/>
                    About Us<br/>
                    Services<br/>
                    Contact<br/>
                    </p>
                  </div>
                </div>
                <div className="footer-wrapper footer-widget-gallery">
                  <div className="footer-title">
                    <h4>Our Gallery</h4>
                  </div>
                  <ul className="footer-img">
                    {footerData.gallery.galleryData.map((item, i) => (
                      <PhotoView src={item.image.src} key={i}>
                        <li>
                          <span className="popup-image">
                            <Image
                              alt="gallery-image"
                              style={{ width: "100%", height: "auto" }}
                              src={item.image}
                            />
                          </span>
                        </li>
                      </PhotoView>
                    ))}
                  </ul>
                </div>
                <div className="footer-wrapper footer-widget-social">
                  <div className="footer-title">
                    <h4>Follow Me</h4>
                  </div>
                  <div className="footer-info">
                    <p>Connect with us on social media</p>
                  </div>
                  <div className="fm-social-2 footer-social-3">
                    {footerData.socialLink.socialIcons.map((item) => (
                      <Link key={item.id} href={item.url} target="_blank">
                        <i className={item.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="footer-wrapper footer-widget-contact">
                  <div className="footer-title">
                    <h4>Contact Us</h4>
                  </div>
                  <ul className="footer-2-link">
                    {footerData.quickLinks.address.slice(0,3).map((item) => (
                      <li key={item.id}>
                        <i className={item.addressWrapperClass}></i>
                        <p>
                          {" "}
                          <Link href={item.contactInfo}>{item.contact}</Link>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <FooterOneCopyright />
            </div>
          </div>
        </footer>
      </PhotoProvider>
    </>
  );
};

export default FooterOne;
