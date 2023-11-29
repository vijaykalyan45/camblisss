import Image from "next/image";
import Link from "next/link";
import React from "react";
//swipper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import useMovieFatching from "@hooks/use-movie";
import Preloader from "@components/preloader";

const MovieSliderFive = () => {
  const movies = useMovieFatching();

  return (
    <>
      <div className="fm-landing-genre-area bg-common-black">
        <div className="container">
          <div
            className="row align-items-center g-5 section-title-spacing-small wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-xl-8 col-lg-8 col-sm-7">
              <h4 className="fm-landing-section-title text-white fade_bottom_2">
                Browse by Genre
              </h4>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-5">
              <div className="fm-landing-trending-slider-navigation text-sm-end fade_bottom_2">
                <span className="fm-landing-genre-prev">
                  <i className="fa-light fa-angle-left"></i>
                </span>
                <span className="fm-landing-genre-next">
                  <i className="fa-light fa-angle-right"></i>
                </span>
                <span className="fm-landing-viewall-text">
                  <Link href="/movie">View All</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="fm-landing-genre-slider-wrapper">
                <div className="fm-landing-genre-slider-active">
                  <div>
                    <Swiper
                      modules={[Navigation]}
                      loop={true}
                      navigation={{
                        nextEl: ".fm-landing-genre-next",
                        prevEl: ".fm-landing-genre-prev",
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        480: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        992: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },
                        1200: {
                          slidesPerView: 5,
                          spaceBetween: 30,
                        },
                        1400: {
                          slidesPerView: 6,
                          spaceBetween: 30,
                        },
                      }}
                    >
                      {
                        movies?.length ?
                          <>
                            {
                              movies.slice(40, 47).map((item) => (
                                <SwiperSlide key={item._id}>
                                  <div
                                    className="fm-landing-genre-single wow fadeInUp"
                                    data-wow-delay={item.delay}
                                  >
                                    <Link
                                      href="/movie"
                                      className={item.imgBgColorClass}
                                    >
                                      <Image
                                        src={item.image}
                                        width={500}
                                        height={500}
                                        style={{
                                          width: "auto",
                                          height: "auto",
                                        }}
                                        alt="image not found"
                                      />
                                      <span className="fm-landing-genre-name">
                                        {item.movieTag}
                                      </span>
                                    </Link>
                                    <Link
                                      href="/movie"
                                      className="fm-landing-genre-namesm"
                                    >
                                      {item.MovieBtn}
                                    </Link>
                                  </div>
                                </SwiperSlide>
                              ))}
                          </>
                          :
                          <>
                            <Preloader />
                          </>
                      }
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

export default MovieSliderFive;
