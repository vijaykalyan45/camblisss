import React from "react";
import imageOne from "@assets/img/objective/img-2.jpg";
import imageTwo from "@assets/img/objective/img-3.jpg";
import imageThere from "@assets/img/objective/img-4.jpg";
//badge
import badgeOne from "@assets/img/badge/award_black1.png";
import badgeTwo from "@assets/img/badge/award_black2.png";
import badgeThere from "@assets/img/badge/award_black3.png";
import Image from "next/image";

const AchievementArea = () => {
  return (
    <>
      <div className="achievement-area section-spacing">
        <div className="container">
          <div className="row g-50 align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5  order-1 order-lg-0 wow fmSlideInLeft" data-wow-delay="0.3s">
              <div className="fm-achievement-content fade__two-item-left">
                <div className="section-title">
                  <span className="section-subtitle title-anim">
                    WINNING AWARD
                  </span>
                  <h2 className="section-main-title mb-30 title-anim">
                    Achievement in
                    <span>film industry</span>
                  </h2>
                </div>
                <p className="achieve-text-clr">
                  We are a creative film and photo production company hungry for
                  quality in aesthetics. To create modern recognizable film
                  makers awards in Germany.
                </p>
                <div className="fm-achievement-badge">
                  <div className="fm-achievement-badge-1 ">
                    <Image
                      src={badgeOne}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </div>
                  <div className="fm-achievement-badge-2 ">
                    <Image
                      src={badgeTwo}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </div>
                  <div className="fm-achievement-badge-3 ">
                    <Image
                      src={badgeThere}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-0 order-lg-1 wow fmSlideInRight" data-wow-delay="0.3s">
              <div className="fm-achievement-thumb-wrapper fade__two-item-left">
                <div className="fm-achievement-thumb">
                  <Image
                    src={imageOne}
                    style={{ width: "100%", height: "100%" }}
                    alt="achievement-thumb"
                  />
                </div>
                <div className="fm-achievement-thumb">
                  <Image
                    src={imageTwo}
                    style={{ width: "100%", height: "auto" }}
                    alt="achievement-thumb"
                  />
                </div>
                <div className="fm-achievement-thumb">
                  <Image
                    src={imageThere}
                    style={{ width: "100%", height: "auto" }}
                    alt="achievement-thumb"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementArea;
