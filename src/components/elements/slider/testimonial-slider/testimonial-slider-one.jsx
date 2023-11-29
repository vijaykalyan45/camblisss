import testimonialData from "@data/testimonial-data";
import Image from "next/image";
import React from "react";
import testimonialBg from '@assets/img/bg/testimonial.png'
//swipper
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const TestimonialSliderOne = () => {
  return (
    <section className="testimonial-area section-spacing p-relative">
      <div
        className="testimonial-bg"
        data-background="assets/img/bg/testimonial.png"
        style={{ backgroundImage: `url(${testimonialBg.src})` }}
      ></div>
      <div className="container">
        <div className="row g-5 align-items-center section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-6 order-lg-2">
            <div className="testimonial-sec-wrapper">
              <div className="section-title testimonial-pos">
                <span className="section-subtitle title-anim">FEEDBACK</span>
                <h2 className="section-main-title text-white title-anim">
                  Customers Feedback
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="testimonial-pagination circle-dot-pagination fade_bottom_2"></div>
          </div>
        </div>
        <div className="fm-testimonial-slide-wrapper wow fadeInUp" data-wow-delay="0.4s">
          <div className="testimonial-active">
            <div>
              <Swiper
                modules={[Pagination, Autoplay,]}
                spaceBetween={30}
                loop={true}
                observeParents={true}
                observer={true}
                pagination={{
                  el: ".testimonial-pagination",
                  clickable: true,
                }}
                autoPlay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                }}
                // Responsive breakpoints
                breakpoints={{
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
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 2,
                  },
                }}
              >
                {testimonialData.slice(0, 3).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div>
                      <div className="fm-testimonial-content">
                        <div className="fm-testimonial-quote-icon">
                          <span>
                            {item.TestimonialIconOne}
                          </span>
                        </div>
                        <div className="fm-testimonial-text">
                          <p>{item.description}</p>
                        </div>
                        <div className="fm-testimonial-bottom-content">
                          <div className="fm-testimonial-author">
                            <span>{item.author}</span>
                          </div>
                          <div className="fm-testimonial-brand-thumb">
                            <Image
                              src={item.image}
                              style={{ width: '100%', height: 'auto' }}
                              alt="img not found"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default TestimonialSliderOne;
