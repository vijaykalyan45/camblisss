import SliderItem from "@data/banner-data";
import Link from "next/link";
import React from "react";
//swipper
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";

const HeroSliderTwo = () => {
  return (
    <div className="fm-sliderfull-area slider-style">
      <div className="fm-sliderfull-inner">
        <div className="fm-sliderfull-active swiper-container">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
            slidesPerView={1}
            spaceBetween={30}
            parallax={true}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 700000,
              disableOnInteraction: true,
            }}
            pagination={{
              el: ".fm-sliderfull-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: ".fm-sliderfull-next",
              prevEl: ".fm-sliderfull-prev",
            }}
            a11y={false}
          >
            {SliderItem.slice(3, 7).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="fm-sliderfull-slide">
                  <div
                    className="fm-sliderful-thumb"
                    data-background="assets/img/slider/home-5/slider-1.jpg"
                    style={{ backgroundImage: `url(${item.sliderBg.src})` }}
                  ></div>
                  <div className="fm-sliderfull-content-wrap fix">
                    <div className="adjust-header-space"></div>
                    <div className="container-fluid fm-sliderfull-padding">
                      <div className="row">
                        <div className="col-xl-10">
                          <div className="fm-sliderfull-content-text">
                            <div className="fm-sliderfull-content-awards fm-translateY-80 fm-delay-03 fm-opacity-0 fm-duration-07">
                              {item.images &&
                                item.images.map((item) => (
                                  <Image
                                    key={item.id}
                                    src={item.image}
                                    style={{ width: "auto", height: "auto" }}
                                    alt="img not found"
                                  />
                                ))}
                            </div>
                            <h2
                              className="fm-sliderfull-content-title fm-translateY-80 fm-delay-04 fm-opacity-0 fm-duration-07"
                            >
                              {item.sliderTitle}
                            </h2>
                            <Link
                              href="/contact"
                              className="fill-btn is-white arrow-effect fm-translateY-80 fm-delay-05 fm-opacity-0 fm-duration-07"
                            >
                              {item.bannerBtn} <span><i className="fa-light fa-arrow-right-long"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="fm-sliderfull-navigation">
          <span className="fm-sliderfull-prev">
            <i className="fa-solid fa-arrow-left-long"></i>
          </span>
          <span className="fm-sliderfull-next">
            <i className="fa-solid fa-arrow-right-long"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderTwo;
