import NiceSelect from "@ui/niceSelect";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import FilteredMovieHomeFive from "./filterd-movie-home-5";
import axios from "axios";

const MovieSectionFive = () => {
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [categorys, setCategorys] = useState(" ");
  const [movieCategory, setMovieCategory] = useState([]);
  const [videoUrl, setVideoUrl] = useState(" ");
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };
  //get data
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}movie/all-movie`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  //get filtering data
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}category/all-category`)
      .then((res) => {
        setMovieCategory(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const filterdeMovie = movies
    .slice(20, 30)
    .filter((movie) => movie.category === categorys);
  const selectHandler = () => {};

  return (
    <>
      <div className="fm-movie-all-wrapper section-spacing">
        <div className="container">
          <div
            className="row align-items-center g-5 section-title-spacing-small wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
              <div className="fm-moveiall-notification-wrapper">
                <p className="fm-movieall-notification">
                  We found 142 products available for you
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-4">
              <div className="fm-landing-filter-option-wrapper fm-movieall-filter text-sm-end">
                <NiceSelect
                  options={movieCategory}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name="Select Subject"
                  setCategorys={setCategorys}
                />
              </div>
            </div>
          </div>
          <div className="row g-5">
            <FilteredMovieHomeFive
              movies={movies}
              filterMovie={filterdeMovie}
              openVideoModal={openVideoModal}
            />
          </div>

          <div className="row">
            <div className="col-12">
              <div className="fm-films-more-button text-center mt-50 bdFadeBottom">
                <Link href="/movie" className="border-btn">
                  Load More
                </Link>
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

export default MovieSectionFive;
