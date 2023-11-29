import React from 'react';
//swipper
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const FeaturedScrollArea = () => {
   const featuredScroll = [
      {
         id: 1,
         title: "BOLYWOOD. HOLLYWOD. TOLYWOOD.",
      },
      {
         id: 2,
         title: "BOLYWOOD. HOLLYWOD. TOLYWOOD.",
      },
   ];
   return (
      <div className="featured-scroll-area wow fadeInUp" data-wow-delay="0.3s">
         <div className="swiper text-scroll" dir="ltr">
            <div className="featured-scroll-wrapper">
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
                  {
                     featuredScroll.map((item) => (
                        <SwiperSlide key={item.id}>
                           <div>
                              <div className="featured-scroll-line">
                                 <h2 className="scroll-line-heading">{item.title}</h2>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))
                  }
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default FeaturedScrollArea;