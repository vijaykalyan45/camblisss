import Image from "next/image";
import Link from "next/link";
import React from "react";
import historyImgOne from "@assets/img/logo/aboutuscambliss1.png";
import historyImgTwo from "@assets/img/history/img-2.jpg";
import historyImgThere from "@assets/img/history/img-3.jpg";

const HistorySectionFour = () => {
  const historyData = [
    {
      id: 1,
      title: "Who we are",
      iconOne: "far fa-mug-hot",
      iconTwo: "far fa-check",
      description:
        "we are a team of young techno-savy minds melding our creativity with our enthusiasm ",
    },
    {
      id: 2,
      title: "Our Mission",
      iconOne: "fa-solid fa-stars",
      iconTwo: "far fa-check",
      description:
        "empower bussiness with tools and strategies you need to thrive in digital landscape",
    },
    {
      id: 3,
      title: "Our Values",
      iconOne: "far fa-mug-hot",
      iconTwo: "far fa-check",
      description:
        "we give 100% client satisfaction using complex and reliable digital solutions ",
    },
  ];
  return (
    <div className="history-area section-spacing-bottom">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="single-history">
              <div className="section-title sec-sub-style mb-60 wow fadeInUp" data-wow-delay="0.3s">
                <span className="section-subtitle">Why Work With US</span>
                <h2 className="section-main-title about-sec-title-2  title-anim">
                  Where imagination and Strategy Converge
                 
                </h2>
              </div>

              <ul className="history-link wow fadeInUp" data-wow-delay="0.4s">
                {historyData.map((item) => (
                  <li key={item.id}>
                    <div className="history-2-icon">
                      <i className={item.iconOne}></i>
                      <div className="history-tag">
                        <i className={item.iconTwo}></i>
                      </div>
                    </div>
                    <div className="history-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* <div className="history-btn fade_bottom_2 wow fadeInUp" data-wow-delay="0.5s">
                <Link href="/blog-details" className="fill-btn">
                  view more
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div> */}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="fm-history-thumb-wrapper wow fadeInUp" data-wow-delay="0.4s">
              <div className="history-thumb-1">
                <Image
                  src={historyImgOne}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              {/* <div className="history-thumb-2">
                <Image
                  src={historyImgTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="history-thumb-3">
                <Image
                  src={historyImgThere}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySectionFour;
