// import React from 'react';

// import client0 from "@assets/img/logo/client0.png";
// import client1 from "@assets/img/logo/client1.jpg";
// import client2 from "@assets/img/logo/client2.png";
// import client3 from "@assets/img/logo/client3.png";
// import client4 from "@assets/img/logo/client4.png";
// import client5 from "@assets/img/logo/client5.png";

// //swipper
// import { Autoplay, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/bundle";

// const CertificateSlider = () => {
//    const certificateData = [
//       {
//          id: 1,
//          image: client0
//       },
//       {
//          id: 2,
//          image: client1
//       },
//       {
//          id: 3,
//          image: client2
//       },
//       {
//          id: 4,
//          image: client3
//       },
//       {
//          id: 5,
//          image: client4
//       },
//       {
//          id: 6,
//          image: client5
//       },
//       // {
//       //    id: 7,
//       //    image: imageTwo
//       // },
//       // {
//       //    id: 8,
//       //    image: imageThere
//       // },

//    ]

//    return (
//       <div className="certificate-area section-spacing bg-common-black">
//          <div className="container">
//             <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
//                <div className="col-12">
//                   <div className="sec-sub">
//                      <div className="section-title sec-sub-style  text-center">
//                         <span className="section-subtitle">OUR CLIENTS</span>
//                         {/* <div>
//                            <h2 className="section-main-title text-white title-anim">Our Achievement
//                            </h2>
//                         </div> */}
//                      </div>
//                   </div>
//                </div>
//             </div>
//             <div className="certificate-active wow fadeInUp" data-wow-delay="0.4s">
//                <div>
//                   <Swiper
//                      modules={[Navigation, Autoplay]}
//                      spaceBetween={30}
//                      loop={true}
//                      observeParents={true}
//                      observer={true}
//                      navigation={{
//                         nextEl: ".fm-slider-next",
//                         prevEl: ".fm-slider-prev",
//                      }}
//                      autoplay={{
//                         delay: 3000,
//                         pauseOnMouseEnter: true,
//                      }}
//                      // Responsive breakpoints
//                      breakpoints={{
//                         450: {
//                            slidesPerView: 2,
//                         },
//                         576: {
//                            slidesPerView: 2,
//                         },
//                         768: {
//                            slidesPerView: 3,
//                         },
//                         991: {
//                            slidesPerView: 3,
//                         },
//                         1200: {
//                            slidesPerView: 4,
//                         },
//                         1400: {
//                            slidesPerView: 4,
//                         },
//                      }}
//                   >
//                      {
//                         certificateData.map((item) => (
//                            <SwiperSlide key={item.id}>
//                               <div className="certificate-img">
//                                  <Image src={item.image} style={{ width: '100%', height: 'auto' }} alt="img not found" />
//                               </div>
//                            </SwiperSlide>
//                         ))
//                      }
//                   </Swiper>
//                </div>
//             </div>
//             <div className="fm-slider-navigation mt-50 wow fadeInUp" data-wow-delay="0.3s">
//                <span className="fm-slider-prev slider-nav-btn"><i className="fa-solid fa-arrow-left-long"></i></span>
//                <span className="fm-slider-next slider-nav-btn"><i className="fa-solid fa-arrow-right-long"></i></span>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default CertificateSlider;

// Import necessary modules and components
import React from 'react';
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from 'next/image';
import client0 from "@assets/img/logo/client0.png";
import client1 from "@assets/img/logo/client1.jpg";
import client2 from "@assets/img/logo/client2.png";
import client3 from "@assets/img/logo/client3.png";
import client4 from "@assets/img/logo/client4.png";
import client5 from "@assets/img/logo/client5.png";
import client6 from "@assets/img/logo/client6.png";
import { auto } from '@popperjs/core';

const CertificateSlider = () => {
   // Define certificate data
   const certificateData = [
      {
         id: 1,
         image: client0
      },
      {
         id: 2,
         image: client1
      },
      {
         id: 3,
         image: client2
      },
      {
         id: 4,
         image: client3
      },
      {
         id: 5,
         image: client4
      },
      {
         id: 6,
         image: client5
      },
      {
         id: 7,
         image: client6
      },
   ];

   return (
      <div className="certificate-area section-spacing bg-common-black">
         <div className="container">
            <div className="row section-title-spacing wow fadeInUp" data-wow-delay="0.3s">
               <div className="col-12">
                  <div className="sec-sub">
                     <div className="section-title sec-sub-style  text-center">
                        <span className="section-subtitle">OUR CLIENTS</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="certificate-active wow fadeInUp" data-wow-delay="0.4s">
               <Swiper
                  modules={[Navigation, Autoplay]}
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
                  breakpoints={{
                     450: {
                        slidesPerView: 2,
                     },
                     576: {
                        slidesPerView: 2,
                     },
                     768: {
                        slidesPerView: 3,
                     },
                     991: {
                        slidesPerView: 3,
                     },
                     1200: {
                        slidesPerView: 4,
                     },
                     1400: {
                        slidesPerView: 4,
                     },
                  }}
               >
                  {certificateData.map((item) => (
                     <SwiperSlide key={item.id}>
                        <div className="certificate-img">
                           {/* Use the Image component with the correct syntax */}
                           <Image
                              src={item.image}
                      
                              height={300}
                              alt={`Certificate Image ${item.id}`}
                           />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className="fm-slider-navigation mt-50 wow fadeInUp" data-wow-delay="0.3s">
               <span className="fm-slider-prev slider-nav-btn"><i className="fa-solid fa-arrow-left-long"></i></span>
               <span className="fm-slider-next slider-nav-btn"><i className="fa-solid fa-arrow-right-long"></i></span>
            </div>
         </div>
      </div>
   );
};

export default CertificateSlider;
