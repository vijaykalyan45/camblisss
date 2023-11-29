import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
//swipper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ModalVideo from "react-modal-video";
import GetRating from "@hooks/use-rating";
import useMovieFatching from "@hooks/use-movie";
import Preloader from "@components/preloader";


const MovieSliderFour = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(" ");
  const movies = useMovieFatching();
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };

  return (
    <>
      <div className="fm-landing-trending-area bg-common-black section-spacing">
        <div className="container">
          <div
            className="row align-items-center g-5 section-title-spacing-small wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-xl-8 col-lg-8 col-sm-8">
              <h4 className="fm-landing-section-title text-white fade_bottom">
                Trending Now
              </h4>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4">
              <div className="fm-landing-trending-slider-navigation text-sm-end fade_bottom">
                <span className="fm-landing-trending-prev">
                  <i className="fa-light fa-angle-left"></i>
                </span>
                <span className="fm-landing-trending-next">
                  <i className="fa-light fa-angle-right"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="fm-landing-trending-slider-wrapper">
                <div className="fm-landing-trending-slider-active">
                  <div>
                    <Swiper
                      modules={[Navigation]}
                      loop={true}
                      navigation={{
                        nextEl: ".fm-landing-trending-next",
                        prevEl: ".fm-landing-trending-prev",
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        480: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        992: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        1200: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },
                      }}
                    >
                      {
                        movies?.length ?
                          <>
                            {
                              movies.slice(35, 40).map((item) => (
                                <SwiperSlide key={item._id}>
                                  <div
                                    className="fm-landing-trending-single wow fadeInUp"
                                    data-wow-delay={item.delay}
                                  >
                                    <div className="fm-landing-trending-single-img">
                                      <span className="fm-landing-trending-premium-badge">
                                        {item.badgeImg && (
                                          <Image
                                            src={item.badgeImg}
                                            width={500}
                                            height={500}
                                            style={{
                                              width: "auto",
                                              height: "auto",
                                            }}
                                            alt="image not found"
                                          />
                                        )}
                                      </span>
                                      <Link href={`/movie-details/${item._id}`}>
                                        <Image
                                          src={item.image}
                                          width={500}
                                          height={500}
                                          style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                          }}
                                          alt="image not found"
                                        />
                                      </Link>
                                      <span className="fm-landing-trending-time">
                                        {item.duration}
                                      </span>
                                      <button
                                        className="fm-trending-video-btn popup-video"
                                        onClick={() => {
                                          openVideoModal(item.videoUrl);
                                        }}
                                      >
                                        <span>
                                          <i className="fa-thin fa-play"></i>WATCH
                                        </span>
                                      </button>
                                    </div>
                                    <div className="fm-landing-trending-content">
                                      <div className="fm-landing-trending-content-text">
                                        <h4 className="fm-landing-trending-content-title">
                                          <Link href={`/movie-details/${item._id}`}>
                                            {item.title}
                                          </Link>
                                        </h4>
                                        <span className="fm-landing-trending-rating">
                                          <GetRating averageRating={item.ratings} />
                                        </span>
                                        <div className="fm-landing-trending-meta-wrapper">
                                          <span className="fm-landing-trending-meta">
                                            {item.tradingTime}
                                          </span>
                                          <span className="fm-landing-trending-meta">
                                            {item.views}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="fm-landing-trending-content-bookmark">
                                        <span className="fm-landing-trending-content-bookmark-icon">
                                          <i className="flaticon-love"></i>
                                        </span>
                                      </div>
                                    </div>
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
      <ModalVideo
        autoPlay
        isOpen={isOpen}
        videoId={videoUrl}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default MovieSliderFour;
