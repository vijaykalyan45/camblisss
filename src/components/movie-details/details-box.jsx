import MovieDetailsForm from "@components/forms/movie-details-form";
import useGlobalContext from "@hooks/use-context";
import React from "react";

const DetailsBox = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      <div className="fm-movie-wrapper-details">
        <div className="fm-movie-details-box mb-30 p-relative">
          {movie?.videoUrl ? (
            <iframe
              width="100%"
              height="auto"
              src={`https://www.youtube.com/embed/${movie?.videoUrl}`}
              title={movie?.title}
            ></iframe>
          ) : (
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/72eQ0seOP1k"
              title="All Avengers Movie Final Battle in Hindi Feat Get On Me"
            ></iframe>
          )}
          <div
            className="fm-sliderfullheight-video-button fm-btn-pos"
            data-animation="fadeInUp"
            data-delay="1.3s"
          ></div>
          <div className="fm-movie-details-box-content">
            <div className="movie-border-bottom">
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="fm-movie-details-header-wrapper mb-10">
                    <h4 className="fm-movie-details-text">
                      {movie?.title && movie?.title}
                    </h4>
                    <div className="fm-movie-details-meta">
                      <span className="fm-movie-details-meta-single">
                        <i className="fa-solid fa-eye"></i>14,254
                      </span>
                      <span className="fm-movie-details-meta-single dounle-i">
                        <i className="fa-light fa-thumbs-down"></i>
                        <i className="fa-light fa-heart"></i>3,536
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="fm-movie-details-metabutton text-xl-end">
                    <span className="fm-movie-details-metabtn">
                      <i className="fa-light fa-heart"></i>Like
                    </span>
                    <span className="fm-movie-details-metabtn">
                      <i className="fa-solid fa-thumbs-down"></i>Dislike
                    </span>
                    <span className="fm-movie-details-metabtn">
                      <i className="fa-solid fa-share"></i>Share
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fm-movie-review-box">
          <h4 className="fm-movie-details-inner-title mb-25">Review</h4>
          <div className="fm-movie-details-rating-wrapper">
            <span className="fm-movie-details-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="fm-movie-details-rating-adventure d-inline-block mb-10">
              Awesome
            </span>
          </div>
          <div className="fm-movie-details-form-wrapper mt-40">
            <MovieDetailsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBox;
