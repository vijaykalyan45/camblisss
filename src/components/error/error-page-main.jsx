import React from "react";
import Link from "next/link";
import errorImg from "@assets/img/error/404.png";
import Image from "next/image";

const ErrorPageMain = () => {
  return (
    <>
      <div className="header-adjustment bg-common-black">
        <div className="adjust-header-space bg-common-black"></div>
      </div>
      <div className="fm-error-area section-spacing">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12">
              <div className="fm-error-wrapper fade_bottom">
                <div className="fm-error-thumb mb-40">
                  <Image
                    src={errorImg}
                    style={{ width: "100%", height: "auto" }}
                    alt="image not found"
                  />
                </div>
                <div className="fm-error-content">
                  <h2 className="error-title">Error 404</h2>

                  <h4 className="fm-error-content-subtitle">
                    Sorry Page Not Found
                  </h4>
                  <div className="fm-error-button ">
                    <Link href="/" className="border-btn">
                      Back To Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPageMain;
