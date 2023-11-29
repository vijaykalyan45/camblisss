import React from "react";
import movieNine from "@assets/img/movie/movie10.jpg";
import movieTen from "@assets/img/movie/movie17.jpg";
import movieOne from "@assets/img/movie/movie12.jpg";
import movieTwentyFive from "@assets/img/movie/movie16.jpg";
import movieTwentySix from "@assets/img/movie/movie19.jpg";
import movieTwentySeven from "@assets/img/movie/movie18.jpg";
import movieTwentyEight from "@assets/img/movie/movie11.jpg";
import movieTwentyNine from "@assets/img/movie/movie6.jpg";
import movieSixteen from "@assets/img/movie/movie4.jpg";
import movieTwelve from "@assets/img/movie/movie21.jpg";
import movieThurty from "@assets/img/movie/movie23.jpg";
import movieEleven from "@assets/img/movie/movie24.jpg";
import movieFour from "@assets/img/movie/movie8.jpg";
import movieSix from "@assets/img/movie/movie9.jpg";
import movieTwo from "@assets/img/movie/movie15.jpg";
import movieFive from "@assets/img/movie/movie14.jpg";
//swipper
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Link from "next/link";
import Image from "next/image";

const MovieSliderSeven = () => {
  const MovieSliderData = [
    {
      id: 1,
      image: movieNine,
    },
    {
      id: 2,
      image: movieTen,
    },
    {
      id: 3,
      image: movieOne,
    },
    {
      id: 4,
      image: movieTwentySix,
    },
    {
      id: 5,
      image: movieTwentySeven,
    },
    {
      id: 6,
      image: movieTwentyEight,
    },
    {
      id: 7,
      image: movieTwentyNine,
    },
    {
      id: 8,
      image: movieTwentyFive,
    },
    {
      id: 9,
      image: movieSixteen,
    },
    {
      id: 10,
      image: movieTwelve,
    },
    {
      id: 11,
      image: movieThurty,
    },
    {
      id: 12,
      image: movieEleven,
    },
    {
      id: 13,
      image: movieFour,
    },
    {
      id: 14,
      image: movieSix,
    },
    {
      id: 15,
      image: movieTwo,
    },
    {
      id: 16,
      image: movieFive,
    },
  ];
  //home data
  return (
    <>
      <div className="fm-landing-download-movies-area section-spacing-bottom bg-common-black">
        <div className="container">
          <div className="fm-landing-download-movies-wrapper">
            <div className="fm-landing-movies-flex">
              <div
                className="fm-landing-download-movies-content-wrapper wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="fm-landing-download-movies-content">
                  <span className="fm-landing-download-movies-content-subtext title-anim">
                    Watch Offline TV
                  </span>
                  <h4 className="fm-landing-download-content-text title-anim mb-25">
                    Download your shows and watch offline
                  </h4>
                  <h3 className="fm-download-big-text bdFadeUp">
                    HD <span>4k</span>
                  </h3>
                  <Link href="" className="fm-download-btn bdFadeUp">
                    Download Now
                  </Link>
                </div>
              </div>
              <div className="fm-landing-download-movies-wrapper-section">
                <div className="fm-landing-download-movies-wrapper fix">
                  <div className="fm-landing-download-movies-flex justify-content-lg-end">
                    <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      slidesPerView={3}
                      spaceBetween={10}
                      loop={true}
                      grabCursor={true}
                      speed={1000}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      className="mySwiper1 d-height"
                    >
                      {MovieSliderData.slice(0, 4).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="fm-dmovie-slide">
                            <Link href="/movie">
                              <Image
                                src={item.image}
                                alt="image not found"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      slidesPerView={3}
                      spaceBetween={10}
                      loop={true}
                      grabCursor="true"
                      speed={1000}
                      autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        reverseDirection: true,
                      }}
                      className="mySwiper2 d-height"
                    >
                      {MovieSliderData.slice(4, 8).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="fm-dmovie-slide">
                            <Link href="/movie">
                              <Image
                                src={item.image}
                                alt="image not found"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      slidesPerView={3}
                      spaceBetween={10}
                      loop={true}
                      grabCursor="true"
                      speed={1000}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      className="mySwiper3 d-height"
                    >
                      {MovieSliderData.slice(8, 12).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="fm-dmovie-slide">
                            <Link href="/movie">
                              <Image
                                src={item.image}
                                alt="image not found"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
                      modules={[Autoplay]}
                      direction={"vertical"}
                      slidesPerView={3}
                      spaceBetween={10}
                      loop={true}
                      grabCursor={true}
                      speed={1000}
                      autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        reverseDirection: true,
                      }}
                      className="mySwiper4 d-height"
                    >
                      {MovieSliderData.slice(12, 16).map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="fm-dmovie-slide">
                            <Link href="/movie">
                              <Image
                                src={item.image}
                                alt="image not found"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSliderSeven;
