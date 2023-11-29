import React from "react";
//swipper
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ModalVideo from "react-modal-video";
import { useState, useEffect } from "react";
import axios from "axios";
import Preloader from "@components/preloader";

const MovieSliderTwo = () => {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(" ");
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}movie/all-movie`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="adjust-header-space bg-common-black"></div>
      {/* -- fm-movie-slider-area-start -- */}
      <div className="fm-movie-slider-area fm-movie-pad">
        <div
          className="fm-movie-slider-wrapper wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="fm-movie-slider-active">
            <div>
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                grabCursor={true}
                navigation={{
                  nextEl: ".fm-movie-next",
                  prevEl: ".fm-movie-prev",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  el: ".fm-movie-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.6,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 1.8,
                  },
                }}
              >
                {movies?.length ?
                  <>
                    {
                      movies.slice(17, 20).map((item) => (
                        <SwiperSlide key={item._id}>
                          <div
                            className="fm-movie-slider-single"
                            style={{ backgroundImage: `url(${item.image})` }}
                          >
                            <div className="fm-movie-slider-content">
                              <span className="fm-movie-tag">{item.movieTag}</span>
                              <h4 className="fm-movie-slider-title">
                                {item.title}
                              </h4>
                              <span className="fm-movie-duration">
                                {item.duration}
                              </span>
                            </div>
                            <div className="fm-movie-video">
                              <button
                                className="popup-video"
                                onClick={() => {
                                  openVideoModal(item.videoUrl);
                                }}
                              >
                                <span className="movie-video-button">
                                  <i className="fa-thin fa-play"></i>
                                  <svg className="eltdf-svg-circle">
                                    <circle cx="50%" cy="50%" r="45%"></circle>
                                  </svg>
                                </span>
                                WATCH NOW
                              </button>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    }

                  </>
                  :
                  <>

                  </>
                }
              </Swiper>
            </div>
            <div className="fm-movie-navigation">
              <span className="fm-movie-next">
                <i className="fa-thin fa-angle-right"></i>
              </span>
              <span className="fm-movie-prev">
                <i className="fa-thin fa-angle-left"></i>
              </span>
            </div>
          </div>
          <div className="fm-movie-pagination swiper-pagination mt-40"></div>
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

export default MovieSliderTwo;
