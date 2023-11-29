import { Header } from "@layout/index";
import React, { useEffect } from "react";
import MovieDetailsArea from "./movie-details-area";
import ContactSection from "@components/common/contact/contact-area";
import FooterOne from "@layout/footers/footer-one";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import useGlobalContext from "@hooks/use-context";
import axios from "axios";

const MovieDetailsMain = ({ id }) => {
  const { setMovie } = useGlobalContext();

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.BASE_URL}movie/all-movie/${id}`)
        .then((res) => {
          setMovie(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [id, setMovie]);

  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Movie Details" subTitle="Movie Details" />
        <MovieDetailsArea />
        <ContactSection />
      </main>
      <FooterOne />
    </>
  );
};

export default MovieDetailsMain;
