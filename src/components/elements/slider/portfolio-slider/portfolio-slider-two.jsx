import React from "react";
import PortfolioImgOne from "@assets/img/portfolio/p-details/img-1.jpg";
import PortfolioImgTwo from "@assets/img/portfolio/p-details/img-3.jpg";
import PortfolioImgThere from "@assets/img/portfolio/p-details/img-2.jpg";
import PortfolioImgFour from "@assets/img/portfolio/p-details/img-4.jpg";
import PortfolioImgFive from "@assets/img/portfolio/p-details/img-5.jpg";
import Image from "next/image";
//swipper
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const PortfolioSliderTwo = () => {
  const portfolioImg = [
    {
      id: 1,
      image: PortfolioImgOne,
    },
    {
      id: 2,
      image: PortfolioImgTwo,
    },
    {
      id: 3,
      image: PortfolioImgThere,
    },
    {
      id: 4,
      image: PortfolioImgFour,
    },
    {
      id: 5,
      image: PortfolioImgFive,
    },
  ];
  return (
    <>
      <div className="case-slider-area section-spacing wow fadeInUp" data-wow-delay="0.3s">
        <div className="portfolio-slider-active slider-drag">
          <div>
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              observeParents={true}
              observer={true}
              breakpoints={{
                1200: {
                  slidesPerView: "auto",
                },
                992: {
                  slidesPerView: "auto",
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 30,
                },
                576: {
                  slidesPerView: "auto",
                  spaceBetween: 30,
                },
                0: {
                  slidesPerView: "auto",
                },
              }}
            >
              {portfolioImg.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="case-slider-item">
                      <Image
                        src={item.image}
                        style={{ width: "auto", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSliderTwo;
