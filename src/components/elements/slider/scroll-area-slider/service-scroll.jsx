import React from "react";
//swipper
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const ServiceScroll = () => {
  const serviceScroll = [
    {
      id: 1,
      title: "BEST SERVICES.",
    },
    {
      id: 2,
      title: "FEATURED SERVICES.",
    },
  ];
  return (
    <div className="services-scroll-area section-spacing-top fix wow fadeInUp" data-wow-delay="0.3s">
      <div className="services-scroll-border" >
        <div className="swiper text-scroll">
          <div className="services-scroll-wrapper">
            <Swiper
              modules={[Autoplay, FreeMode]}
              allowTouchMove={false}
              loop={true}
              freeMode={true}
              slidesPerView="auto"
              centeredSlides={true}
              spaceBetween={30}
              speed={15000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
              }}
            >
              {serviceScroll.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="services-scroll-line">
                    <h2 className="scroll-line-heading">{item.title}</h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div >
    </div >
  );
};

export default ServiceScroll;
