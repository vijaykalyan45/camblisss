import Image from "next/image";
import React from "react";
import PreloaderIcon from "@assets/img/loader/film.png";
import IconTwo from "@assets/img/loader/film-2.png";
import IconThere from "@assets/img/loader/camera.png";

const Preloader = () => {
  return (
    <>
      <div className="loader">
        <div className="loader__container">
          <div className="loader__film">
            <Image
              className="loader__film-img"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
              src={PreloaderIcon}
              alt="img not found"
            />
            <Image
              className="loader__film-img"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
              src={IconTwo}
              alt="img not found"
            />
          </div>
          <Image
            className="loader__camera"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
            src={IconThere}
            alt="img not found"
          />
        </div>
      </div>
    </>
  );
};
export default Preloader;
