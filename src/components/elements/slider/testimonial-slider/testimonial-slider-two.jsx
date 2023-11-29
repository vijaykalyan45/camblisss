import testimonialData from "@data/testimonial-data";
import Image from "next/image";
import React from "react";
//swipper
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const TestimonialSliderTwo = () => {
  return (
    <div className="client-area section-spacing">
      <div className="container">
        <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12">
            <div className="sec-sub">
              <div className="section-title sec-sub-style  text-center">
                <span className="section-subtitle">CLIENT SAYS</span>
                <div>
                  <h2 className="section-main-title  title-anim client-sec">
                    What People Says
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-active-2 wow fadeInUp" data-wow-delay="0.4s">
          <div>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              loop={true}
              observeParents={true}
              observer={true}
              navigation={{
                nextEl: ".fm-slider-next",
                prevEl: ".fm-slider-prev",
              }}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              // Responsive breakpoints
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonialData.slice(3, 6).map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="client-wrapper">
                      <div className="client-content">
                        <div className="client-name">
                          <div className="client-img">
                            <Image
                              src={item.image}
                              style={{ width: "100%", height: "auto" }}
                              alt="img not found"
                            />
                          </div>
                          <div className="client-text">
                            <h4>{item.author}</h4>
                            <span>{item.subTitle}</span>
                          </div>
                        </div>
                        <p>{item.description}</p>
                        <div className="client-icon">
                          {item.rettings.map((item) => (
                            <i className={item.icon} key={item.id}></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="fm-slider-navigation mt-50 wow fadeInUp" data-wow-delay="0.3s">
          <span className="fm-slider-prev slider-nav-btn">
            <i className="fa-solid fa-arrow-left-long"></i>
          </span>
          <span className="fm-slider-next slider-nav-btn">
            <i className="fa-solid fa-arrow-right-long"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderTwo;
