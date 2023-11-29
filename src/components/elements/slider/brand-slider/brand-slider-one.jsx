// import React from "react";
// //swipper
// import { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/bundle";
// import BrandSvgOne from "@svg/brand-svg-one";
// import BrandSvgTwo from "@svg/brand-svg-two";
// import BrandSvgThere from "@svg/brand-svg-there";
// import BrandSvgFour from "@svg/brand-svg-four";

// const BrandAreaSection = ({ brandWrapperClass, borderClass }) => {

//   const brandData = [
//     {
//         id: 1,
//         brandSvg: <BrandSvgOne />
//     },
//     {
//         id: 2,
//         brandSvg: <BrandSvgTwo />
//     },
//     {
//         id: 3,
//         brandSvg: <BrandSvgThere />
//     },
//     {
//         id: 4,
//         brandSvg: <BrandSvgFour />
//     },
//     {
//         id: 5,
//         brandSvg: <BrandSvgTwo />
//     },
//     {
//         id: 6,
//         brandSvg: <BrandSvgThere />
//     },
// ]


//   return (
//     <div
//       className={`${brandWrapperClass
//         ? brandWrapperClass
//         : "brand-area section-spacing bg-common-black"
//         }`}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
//             <div className="brand-active">
//               <div>
//                 <Swiper
//                   modules={[Navigation]}
//                   direction="horizontal"
//                   loop={false}
//                   speed={1000}
//                   spaceBetween={30}
//                   centeredSlides={false}
//                   grabCursor={true}
//                   keyboard={true}
//                   navigation={{
//                     nextEl: ".fm-brand-next",
//                     prevEl: ".fm-brand-prev",
//                   }}
//                   breakpoints={{
//                     0: {
//                       slidesPerView: 1,
//                     },
//                     480: {
//                       slidesPerView: 1,
//                     },
//                     768: {
//                       slidesPerView: 2,
//                     },
//                     992: {
//                       slidesPerView: 2,
//                     },
//                     1200: {
//                       slidesPerView: 3,
//                     },
//                     1400: {
//                       slidesPerView: 4,
//                     },
//                     1600: {
//                       slidesPerView: 4,
//                     },
//                   }}
//                 >
//                   {brandData.slice(0, 5).map((item) => (
//                     <SwiperSlide key={item.id}>
//                       <div>
//                         <div
//                           className={
//                             borderClass ? borderClass : "fm-brand is-white"
//                           }
//                         >
//                           {item.brandSvg}
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandAreaSection;



import React from "react";
//swipper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const BrandAreaSection = ({ brandWrapperClass, borderClass }) => {
  const brandData = [
    {
      id: 1,
      brandImage: "/assets/img/logo/client0.png",
    },
    {
      id: 2,
      brandImage: "/assets/img/logo/client1.jpg",
    },
    {
      id: 3,
      brandImage: "/assets/img/logo/client2.png",
    },
    {
      id: 4,
      brandImage: "/assets/img/logo/client3.png",
    },
    {
      id: 5,
      brandImage: "/assets/img/logo/client4.png",
    },
    {
      id: 6,
      brandImage: "/assets/img/logo/client5.png",
    },
    {
      id: 7,
      brandImage: "/assets/img/logo/client6.png",
    },
  ];

  // Blo
};

export default BrandAreaSection;
