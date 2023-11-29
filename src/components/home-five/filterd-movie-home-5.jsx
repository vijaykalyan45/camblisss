import GetRating from "@hooks/use-rating";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FilteredMovieHomeFive = ({ filterMovie, openVideoModal, movies }) => {

  return (
    <>
      {filterMovie.length ?
        filterMovie.map((item) => (
          <div className="col-xl-4 col-lg-4 col-md-6" key={item._id}>
            <div className="fm-landing-trending-single fade_bottom">
              <div className="fm-landing-trending-single-img-2 fm-skewy">
                <Link href={`/movie-details/${item._id}`}>
                  {" "}
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
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
          </div>
        ))
        : movies.slice(20, 32).map((item) => (
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay={item.delay}
            key={item._id}
          >
            <div className="fm-landing-trending-single fade_bottom">
              <div className="fm-landing-trending-single-img-2 fm-skewy">
                <Link href={`/movie-details/${item._id}`}>
                  {" "}
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
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
          </div>
        ))}
    </>
  );
};

export default FilteredMovieHomeFive;
