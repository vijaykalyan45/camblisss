import Link from "next/link";
import React, { useEffect, useState } from "react";
import BtnBg from "@assets/img/bg/btn-bg.png";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import FeaturedScrollArea from "../scroll-area-slider/featured-scroll-area";
//swipper
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import axios from "axios";

const MovieSliderOne = () => {
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
      <section className="featured-area section-spacing featured-full-width p-relative bg-common-black">
        <div className="container">
          <div
            className="row g-5 section-title-spacing wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-8">
              <div className="fm-featured-wrapper">
                <div className="featured-sec-wrapper">
                  <div className="section-title">
                    <span className="section-subtitle featured-sub-title title-anim">
                      Featured PRODUCTION
                    </span>
                    <h2 className="section-main-title text-white title-anim">
                      The featured production we created proudly
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn-featured-wrapper d-flex justify-content-lg-end">
                <div className="featured-btn-circle-wrap btn_wrapper">
                  <Link
                    href="/movie-details"
                    className="featured-rotate-btn btn__item-move"
                  >
                    <span>
                      <i className="flaticon-right-arrow-1"></i>
                    </span>
                    <Image
                      className="image-text"
                      src={BtnBg}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container section-spacing-bottom">
          <div
            className="featured-wrapper featured-slider-wrapper wow fadeInUp"
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
              {movies.length &&
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
        <FeaturedScrollArea />
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoUrl}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default MovieSliderOne;
