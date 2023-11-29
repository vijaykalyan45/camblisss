import React, { useState } from "react";
//swipper
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import useMovieFatching from "@hooks/use-movie";

const MovieSliderEight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(" ");
  const movies =useMovieFatching()
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };

 
  return (
    <>
      <section className="featured-area section-spacing featured-full-width p-relative">
        <div className="container">
          <div
            className="row section-title-spacing wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-12">
              <div className="section-title text-center">
                <span className="section-subtitle featured-sub-title title-anim">
                  FEATURED PRODUCTION
                </span>
                <div>
                  <h2 className="section-main-title featured-sec-title-2 featured-clr title-anim">
                    The featured production{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="featured-wrapper-2 featured-slider-wrapper wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              loop={true}
              centeredSlides={false}
              observeParents={true}
              observer={true}
              autoplay={true}
              pagination={{
                el: ".product-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".featured-slider-button-next",
                prevEl: ".featured-slider-button-prev",
              }}
              className="featured-active"
              // Responsive breakpoints
              breakpoints={{
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
            >
              {movies?.length &&
                movies.slice(52, 57).map((item) => (
                  <SwiperSlide key={item._id}>
                    <div>
                      <div className="fm-single-featured">
                        <div className="fm-featured-thumb">
                          <Link href="/movie">
                            <Image
                              src={item.image}
                              width={500}
                              height={500}
                              style={{ width: "auto", height: "100%" }}
                              alt="img not found"
                            />
                          </Link>
                        </div>
                        <div className="fm-featured-content">
                          <div className="fm-featured-content-inner">
                            <Link href={`/movie-details/${item._id}`}>
                              <h4 className="fm-featured-title">
                                {item.title}
                              </h4>
                            </Link>
                            <span className="fm-featured-meta">
                              {item.releaseDate}
                            </span>
                          </div>
                          <div className="fm-video-play">
                            <button
                              className="play-btn popup-video"
                              onClick={() => {
                                openVideoModal(item.videoUrl);
                              }}
                            >
                              <i className="fas fa-play"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className="featured-slider-btn">
              <div className="featured-slider-button-prev square-btn">
                <i className="fal fa-angle-left"></i>
              </div>
              <div className="featured-slider-button-next square-btn">
                <i className="fal fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        autoPlay
        isOpen={isOpen}
        videoId={videoUrl}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default MovieSliderEight;
