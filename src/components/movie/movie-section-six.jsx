import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import FiltredMovieArea from "./filtred-movie-area";
import NiceSelect from "@ui/niceSelect";
import axios from "axios";
import useMovieFatching from "@hooks/use-movie";

const MovieSectionSix = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(" ");
  const [categorys, setCategorys] = useState("");
  const [movieCategory, setMovieCategory] = useState([]);
  const movies = useMovieFatching();
  const handleMovieAll = () => {
    setCategorys("View all");
  };
  //video open
  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };

  //filter category data
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}category/all-category`)
      .then((res) => {
        setMovieCategory(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  //filter movie
  const filterMovie = movies
    .slice(20, 30)
    .filter((movie) => movie.category === categorys);
  const selectHandler = (e) => {};

  return (
    <>
        <div className="fm-landing-filter-movies-area bg-common-black padding-gap">
          <div className="container">
            <div
              className="row g-5 section-title-spacing-small wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-6">
                <h4 className="fm-landing-section-title text-white fade_bottom_5">
                  Movies for You
                </h4>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-5 col-sm-6">
                <div className="fm-landing-filter-option-wrapper fm-landing-filter-option-wrapper-static fade_bottom_5 text-sm-end">
                  <NiceSelect
                    options={movieCategory}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="Filter"
                    setCategorys={setCategorys}
                  />
                  <button
                    onClick={handleMovieAll}
                    className="fm-landing-filter-viewall"
                  >
                    View All
                  </button>
                </div>
              </div>
            </div>
            <div className="landing-row">
              <FiltredMovieArea
                movies={movies}
                filterMovie={filterMovie}
                openVideoModal={openVideoModal}
              />
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

export default MovieSectionSix;
