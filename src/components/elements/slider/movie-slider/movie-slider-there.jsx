import Link from "next/link";
import React, { useState } from "react";
//swipper
import { A11y, Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ModalVideo from "react-modal-video";
import useMovieFatching from "@hooks/use-movie";
import Preloader from "@components/preloader";

const MovieSliderThere = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(" ");
  const movies = useMovieFatching();
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };
  return (
    <>
      <div className="fm-slider-main-area">
        <div className="fm-slider-main-inner">
          <div className="fm-slider-active">
            <div>
              <Swiper
                modules={[Autoplay, Pagination, A11y, EffectFade]}
                slidesPerView={1}
                parallex="true"
                speed={1000}
                freeMode={false}
                grabCursor={true}
                parallax={true}
                loop={true}
                effect={"fade"}
                autoplay={{
                  delay: 7000,
                }}
                pagination={{
                  el: ".fm-slider-main-slide-pagination",
                  clickable: true,
                }}
                a11y={false}
              >
                {
                  movies?.length ?
                    <>
                      {
                        movies.slice(32, 35).map((item) => (
                          <SwiperSlide key={item._id}>
                            <div
                              className="fm-director-thumb"
                              style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                            <div className="fm-landing-slider-inner">
                              <div className="adjust-header-space"></div>
                              <div className="container">
                                <div className="row align-items-center">
                                  <div className="col-xl-8 col-lg-8">
                                    <div className="fm-landing-slider-content ">
                                      <div className="fm-landing-slider-subtext fm-landing-slider-subtext-responsive mb-20 fm-translateY-80 fm-delay-03 fm-opacity-0 fm-duration-07">
                                        <span className="fm-landing-slider-subtag">
                                          {item.movieTag}
                                        </span>
                                        <span
                                          className="fm-landing-slider-tagcount"
                                          data-animation="fadeInUp"
                                          data-delay=".3s"
                                        >
                                          {item.views}
                                        </span>
                                        <span
                                          className="fm-landing-slider-tagtime d-inline-block"
                                          data-animation="fadeInUp"
                                          data-delay=".5s"
                                        >
                                          {item.duration}
                                        </span>
                                      </div>
                                      <h2 className="fm-landing-slider-title mb-25 fm-translateY-80 fm-delay-04 fm-opacity-0 fm-duration-07">
                                        {item.title}
                                      </h2>
                                      <p className="fm-translateY-80 fm-delay-05 fm-opacity-0 fm-duration-07">
                                        T{item.description} <br /> {item.desInfo}
                                      </p>
                                      <div className="fm-landing-slider-info mt-30 mb-35 fm-translateY-80 fm-delay-06 fm-opacity-0 fm-duration-07">
                                        <span
                                          data-animation="fadeInUp"
                                          data-delay=".7s"
                                        >
                                          <strong>Languages:</strong>{" "}
                                          {item.movieLanguage}
                                        </span>
                                        <span
                                          data-animation="fadeInUp"
                                          data-delay=".8s"
                                        >
                                          <strong>Genre:</strong>
                                          {item.adventure}
                                        </span>
                                        <span
                                          data-animation="fadeInUp"
                                          data-delay=".9s"
                                        >
                                          <strong>Cast:</strong>
                                          {item.cast}
                                        </span>
                                      </div>
                                      <div className="fm-landing-slider-review fm-translateY-80 fm-delay-07 fm-opacity-0 fm-duration-07">
                                        <i className="fa-solid fa-star"></i>
                                        {item.ratingAvg}{" "}
                                        <span>
                                          ({`${item.ratingReview}reviews`})
                                        </span>
                                      </div>
                                      <div className="fm-landing-slider-button mt-45 fm-translateY-80 fm-delay-08 fm-opacity-0 fm-duration-07">
                                        <Link
                                          href={`/movie-details/${item._id}`}
                                          className="fm-director-btn is-white arrow-effect"
                                        >
                                          {item.movieBtn}{" "}
                                          <span>
                                            <i className="fa-light fa-arrow-right-long"></i>
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4 col-lg-4">
                                    <div
                                      className="fm-sliderfullheight-video-button d-none d-sm-none d-md-block fm-translateX-80 fm-delay-08 fm-opacity-0 fm-duration-07"
                                      data-animation="fadeInUp"
                                      data-delay="1.3s"
                                    >
                                      <button
                                        onClick={() => {
                                          openVideoModal(item.videoUrl);
                                        }}
                                        className="popup-video"
                                      >
                                        <span className="fm-film-video-btn">
                                          <i className="fa-thin fa-play"></i>
                                          <svg className="eltdf-svg-circle">
                                            <circle
                                              cx="50%"
                                              cy="50%"
                                              r="45%"
                                            ></circle>
                                          </svg>
                                        </span>
                                        PLAY NOW
                                      </button>
                                    </div>
                                  </div>
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
          <div className="d-none d-md-block">
            <div className="fm-slider-main-slide-pagination"></div>
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

export default MovieSliderThere;
