import Link from 'next/link';
import React from 'react';
import BgImage from "@assets/img/bg/breadcrumb-bg.png";

const Breadcrumb = ({ title, subTitle }) => {
  return (
    <>
      <div className="adjust-header-space bg-common-black"></div>
      {/* <div
        className="fm-breadcrumb-area breadcrumb-style"
        style={{ backgroundImage: `url(${BgImage.src})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="page-title-wrapper ">
                <h1 className="page-title">{title}</h1>
              </div>
              <div className="breadcrumb-menu ">
                <nav
                  aria-label="Breadcrumbs"
                  className="breadcrumb-trail breadcrumbs"
                >
                  <ul className="trail-items">
                    <li className="trail-item trail-begin ">
                      <Link href="/">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className="trail-item trail-end ">
                      <span>{subTitle}</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Breadcrumb;