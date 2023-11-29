import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import axios from "axios";

const PortFolioSectionFour = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoUrl(id);
  };
  //portfolio data
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}portfolio/all-portfolio`)
      .then((res) => {
        setPortfolios(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      {/* <div className="gallery-area section-spacing gallery-style">
        <div
          className="gallery-bg-thumb"
          style={{ backgroundImage: "url(assets/img/gallery/bg/bg-1.jpg)" }}
        ></div>
        <div className="container">
          <div
            className="row section-title-spacing wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-12">
              <div className="sec-sub">
                <div className="section-title sec-sub-style  text-center">
                  <span className="section-subtitle">Our Work</span>
                  <div className="p-relative">
                    <h2 className="section-main-title history-sec-title">
                      Latest Work Gallery
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fade_animation">
            <div className="row g-5">
              {portfolios.slice(10, 16).map((item) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                  data-wow-delay={item.delay}
                  key={item._id}
                >
                  <div className="portfolio-wrapper fade__anim-item">
                    <div className="portfolio-img">
                      <Link href={`/portfolio-details/${item._id}`}>
                        <Image
                          src={item.image}
                          width={500}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                          alt="img not found"
                        />
                      </Link>
                      <div className="portfolio-content">
                        <div className="portfolio-video">
                          <button
                            className="popup-video fm-profolio-video-btn"
                            onClick={() => {
                              openVideoModal(item.videoUrl);
                            }}
                          >
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                        <h3 className="portfolio-title">
                          <Link href={`/portfolio-details/${item._id}`}>
                            {item.title} <br /> {item.subTitle}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoUrl}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default PortFolioSectionFour;
