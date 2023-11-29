import Link from "next/link";
import React from "react";
import Image from "next/image";
import SliderItem from "@data/banner-data";
import backgroundImage from "@assets/img/logo/cambliss.jpeg";

//swipper
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const HeroOne = () => {
  return (
    <div className="fm-slider-main-area">
      <div className="fm-slider-main-inner">
        <div className="fm-slider-active">
          <div>
            <Swiper
              modules={[Pagination, EffectFade, Autoplay]}
              slidesPerView={1}
              // parallex="true"
              speed={1000}
              freeMode={false}
              grabCursor={true}
              loop={true}
              effect={"fade"}
              autoPlay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
                el: ".fm-slider-main-slide-pagination",
              }}
            >
              {SliderItem.slice(0, 3).map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div
                      className="fm-director-thumb"
                      style={{ backgroundImage: `url(${backgroundImage.src})` }}
                    ></div>
                    <div className="fm-slider-main-inner">
                      <div className="adjust-header-space"></div>
                      <div className="container">
                        <div className="fm-slider-main-slide-content ">
                          <span
                            className="fm-director-subtitle fm-translateY-80 fm-delay-03 fm-opacity-0 fm-duration-07"
                          >
                            {item.sliderSubtitle}
                          </span>

                          <h2
                            className="fm-director-title fm-translateY-80 fm-delay-04 fm-opacity-0 fm-duration-07"

                            data-delay={item.dataDelay2}
                          >
                            {item.sliderTitle}
                          </h2>
                          <p

                            data-delay={item.dataDelay2}
                            className="director-text fm-translateY-80 fm-delay-05 fm-opacity-0 fm-duration-07"
                          >
                            {item.description}
                          </p>
                          <div
                            className="fm-director-button fm-translateY-80 fm-delay-06 fm-opacity-0 fm-duration-07"
                          >
                            <Link
                              href="/contact"
                              className="fm-director-btn is-white arrow-effect"
                            >
                              {item.sliderbtn} <span><i className="fa-light fa-arrow-right-long"></i></span>
                            </Link>
                          </div>
                        </div>
                        {/* <div className="fm-director-awards d-none  d-sm-none d-md-block fm-translateX-80 fm-opacity-0 fm-delay-07 fm-duration-07">
                          {item.images &&
                            item.images.map((item) => (
                              <Image
                                key={item.id}
                                data-animation="fadeInUp"
                                data-delay={item.dataDelay}
                                src={item.image}
                                style={{ width: "auto", height: "auto" }}
                                alt="img not found"
                              />
                            ))}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="d-none d-md-block">
            <div className="fm-slider-main-social-abs social-icon-pos">
              <div className="fm-sliderfull-social">
                <label>Follow</label>
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
        <div className="fm-slider-main-slide-pagination"></div>
      </div>
    </div>
  );
};

export default HeroOne;
