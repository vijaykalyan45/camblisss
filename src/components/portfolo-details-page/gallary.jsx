import Image from "next/image";
import React from "react";
import imageOne from "@assets/img/logo/websiteservices.png";
import imageTwo from "@assets/img/logo/websiteservices1.png";
import imageThree from "@assets/img/logo/websiteservices2.png";
import imageFour from "@assets/img/logo/websiteservice4.png";
import CaseSubtitleIcon from "@svg/case-subtitle-icon";
import { PhotoProvider, PhotoView } from "react-photo-view";

const galary_data = [
  {
    id: 1,
    img: imageOne,
  },
  {
    id: 2,
    img: imageTwo,
  },
  {
    id: 3,
    img: imageFour,
  },
  {
    id: 4,
    img: imageThree,
  },
];

const GallarySection = () => {
  return (
    <section className="design-area wow fadeInUp" data-wow-delay="0.3s">
      <h4 className="case-subtitle">
        <span>
          <CaseSubtitleIcon />
        </span>
        Gallery
      </h4>
      <PhotoProvider
      speed={() => 800}
      easing={(type) =>
        type === 2
          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
          : "cubic-bezier(0.34, 1.56, 0.64, 1)"}
      >
        <div className="design-humb-grid ">
          {galary_data &&
            galary_data.map((item) => (
              <PhotoView key={item.id} src={item.img.src}>
                <div className="design-thumb img-tilt all__item-fade common-galary-icons">
                  <Image
                    src={item.img}
                    style={{ width: "100%", height: "auto" }}
                    alt="image not found"
                  />
                  <div className="common-galary-icon">
                    <i className="fal fa-plus fm-film-video-btn"></i>
                  </div>
                </div>
              </PhotoView>
            ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default GallarySection;

