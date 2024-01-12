// import Image from "next/image";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import ModalVideo from "react-modal-video";
// import BtnBgImg from "@assets/img/bg/btn-bg.png";
// import Link from "next/link";
// import axios from "axios";

// const PortfolioSectionTwo = () => {
//   const [portfolios, setPortfolios] = useState([]);
//  //portfolio data
//  useEffect(() => {
//   axios
//     .get(`${process.env.BASE_URL}portfolio/all-portfolio`)
//     .then((res) => {
//       setPortfolios(res.data);
//     })
//     .catch((err) => console.log(err));
// }, []);

//   const [isOpen, setIsOpen] = useState(false);
//   const [videoId, setvideoId] = useState(" ");
//   const openVideoModal = (id) => {
//     setIsOpen(!isOpen);
//     setvideoId(id);
//   };
//   return (
//     <>
//       <section className="featured-area bg-common-black section-spacing-bottom">
//         <div className="container">
//           <div
//             className="row section-title-spacing justify-content-center wow fadeInUp"
//             data-wow-delay="0.3s"
//           >
//             <div className="col-lg-8">
//               <div className="section-title text-center">
//                 <span className="section-subtitle title-anim">
//                   FEATURED PROJECTS
//                 </span>
//                 <h2 className="section-main-title text-white title-anim">
//                   Our Featured Projects
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className="fm-featured-wrapper-2">
//             {portfolios.slice(6, 10).map((item) => (
//               <div
//                 className="fm-single-featured-2 wow fadeInUp"
//                 data-wow-delay={item.delay}
//                 key={item._id}
//               >
//                 <div className={item.portfolioItemClass}>
//                   <Link href={`/portfolio-details/${item._id}`}>
//                     <Image
//                       src={item.image}
//                       width={500}
//                       height={500}
//                       style={{ width: "100%", height: "auto" }}
//                       alt="img not found"
//                     />
//                   </Link>
//                   <div className="fm-featured-content-2">
//                     <div className="fm-featured-content-inner">
//                       <Link href={`/portfolio-details/${item._id}`}>
//                         <h4 className="fm-featured-title">{item.title}</h4>
//                       </Link>
//                       <span className="fm-featured-meta">
//                         {item.releaseDate}
//                       </span>
//                     </div>

//                     <div
//                       className="fm-video-play"
//                       onClick={() => {
//                         openVideoModal(item.videoUrl);
//                       }}
//                     >
//                       <button className="fm-featured-video-wrapper fm-featured-video-btn btn-clr popup-video btn-pos">
//                         <i className="fas fa-play"></i>
//                         <span>Play Trailer</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div
//               className="fm-featured-info wow fmSlideInLeft"
//               data-wow-delay="0.5s"
//             >
//               <div className="featured-btn-circle-wrap-2">
//                 <div className="featured-btn-circle-wrap btn_wrapper">
//                   <Link
//                     href="/service"
//                     className="featured-rotate-btn btn__item-move"
//                   >
//                     <Image
//                       className="image-text"
//                       src={BtnBgImg}
//                       style={{ width: "auto", height: "auto" }}
//                       alt="img not found"
//                     />
//                     <span>
//                       <i className="flaticon-right-arrow-1"></i>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ModalVideo
//         channel="youtube"
//         autoPlay
//         isOpen={isOpen}
//         videoId={videoId}
//         onClose={() => setIsOpen(false)}
//       />
//     </>
//   );
// };

// export default PortfolioSectionTwo;




// import Image from "next/image";
// import React, { useState } from "react";
// import ModalVideo from "react-modal-video";
// import BtnBgImg from "@assets/img/bg/btn-bg.png";
// import Link from "next/link";
// import image from "@assets/img/logo/satavahana.jpeg"
// import image1 from "@assets/img/logo/flicm.jpeg";
// import image2 from "@assets/img/logo/enchant.jpeg";
// import image3 from "@assets/img/logo/facesofstyle.jpeg"
// import image4 from "@assets/img/logo/fullfill.jpeg";
// import image5 from "@assets/img/logo/anandgiri1.jpeg";

// const PortfolioSectionTwo = () => {
//   const manualPortfolios = [
//     {
//       _id: "1",
//       title: "Satavahana University",
//       image:  image,
//       // releaseDate: "2023-11-22",
//       // videoUrl: fleetins,
//       delay: "0.1s",
//       // portfolioItemClass: "your-portfolio-item-class-1",
//       websiteUrl: "https://satavahana.ac.in/",
//     },
//     {
//       _id: "2",
//       title: "Project 2",
//       image: image1,
//       releaseDate: "2023-11-23",
//       videoUrl: "your-youtube-video-id-2",
//       delay: "0.2s",
//       portfolioItemClass: "your-portfolio-item-class-2",
//     },
//     {
//       _id: "3",
//       title: "Project 2",
//       image: image2,
//       releaseDate: "2023-11-23",
//       videoUrl: "your-youtube-video-id-2",
//       delay: "0.2s",
//       portfolioItemClass: "your-portfolio-item-class-2",
//     },
//     {
//       _id: "4",
//       title: "Project 2",
//       image: image3,
//       releaseDate: "2023-11-23",
//       videoUrl: "your-youtube-video-id-2",
//       delay: "0.2s",
//       portfolioItemClass: "your-portfolio-item-class-2",
//     },
//     {
//       _id: "5",
//       title: "Project 2",
//       image: image4,
//       releaseDate: "2023-11-23",
//       videoUrl: "your-youtube-video-id-2",
//       delay: "0.2s",
//       portfolioItemClass: "your-portfolio-item-class-2",
//     },
//     {
//       _id: "6",
//       title: "Project 2",
//       image: image5,
//       releaseDate: "2023-11-23",
//       videoUrl: "your-youtube-video-id-2",
//       delay: "0.2s",
//       portfolioItemClass: "your-portfolio-item-class-2",
//     },
//     // Add more projects as needed
//   ];

//   const [isOpen, setIsOpen] = useState(false);
//   const [videoId, setVideoId] = useState(" ");

//   const openVideoModal = (id) => {
//     setIsOpen(!isOpen);
//     setVideoId(id);
//   };

//   return (
//     <>
//       <section className="featured-area bg-common-black section-spacing-bottom">
//         <div className="container">
//           <div
//             className="row section-title-spacing justify-content-center wow fadeInUp"
//             data-wow-delay="0.3s"
//           >
//             <div className="col-lg-8">
//               <div className="section-title text-center">
//                 <span className="section-subtitle title-anim">
//                   FEATURED PROJECTS
//                 </span>
//                 <h2 className="section-main-title text-white title-anim">
//                   Our Featured Projects
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className="fm-featured-wrapper-2">
//             {manualPortfolios.map((item) => (
//               <div
//                 className="fm-single-featured-2 wow fadeInUp"
//                 data-wow-delay={item.delay}
//                 key={item._id}
//               >
//                 <div className={item.portfolioItemClass}>
//                   <Link href={`/portfolio-details/${item._id}`}>
//                     <Image
//                       src={item.image}
//                       width={500}
//                       height={500}
//                       style={{ width: "100%", height: "auto" }}
//                       alt="img not found"
//                     />
//                   </Link>
//                   <div className="fm-featured-content-2">
//                     <div className="fm-featured-content-inner">
//                       <Link href={`/portfolio-details/${item._id}`}>
//                         <h4 className="fm-featured-title">{item.title}</h4>
//                       </Link>
//                       <span className="fm-featured-meta">
//                         {item.releaseDate}
//                       </span>
//                     </div>

//                     <div
//                       className="fm-video-play"
//                       onClick={() => {
//                         openVideoModal(item.videoUrl);
//                       }}
//                     >
//                       <button className="fm-featured-video-wrapper fm-featured-video-btn btn-clr popup-video btn-pos">
//                         <i className="fas fa-play"></i>
//                         <span>Play Trailer</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div
//               className="fm-featured-info wow fmSlideInLeft"
//               data-wow-delay="0.5s"
//             >
//               <div className="featured-btn-circle-wrap-2">
//                 <div className="featured-btn-circle-wrap btn_wrapper">
//                   <Link
//                     href="/service"
//                     className="featured-rotate-btn btn__item-move"
//                   >
//                     <Image
//                       className="image-text"
//                       src={BtnBgImg}
//                       style={{ width: "auto", height: "auto" }}
//                       alt="img not found"
//                     />
//                     <span>
//                       <i className="flaticon-right-arrow-1"></i>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ModalVideo
//         channel="youtube"
//         autoPlay
//         isOpen={isOpen}
//         videoId={videoId}
//         onClose={() => setIsOpen(false)}
//       />
//     </>
//   );
// };

// export default PortfolioSectionTwo;
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import BtnBgImg from "@assets/img/bg/btn-bg.png";
import Link from "next/link";
import image from "@assets/img/logo/satavahana.jpeg";
import image1 from "@assets/img/logo/flicm.jpeg";
import image2 from "@assets/img/logo/enchant.jpeg";
import image3 from "@assets/img/logo/facesofstyle.jpeg";
import image4 from "@assets/img/logo/fullfill.jpeg";
import image5 from "@assets/img/logo/anandgiri1.jpeg";
import servicesimage from "@assets/img/logo/servicesimage2.png";
import servicesimage2 from "@assets/img/logo/servicesimage3.png";
import serviceimage3 from "@assets/img/logo/satavahanaserviceimage.png";
import serviceimage4 from "@assets/img/logo/serviceimage5.png";
import serviceimage5 from "@assets/img/logo/sericeimage6.png";
import serviceimage6 from "@assets/img/logo/servicesimage7.png";




const PortfolioSectionTwo = () => {
  const manualPortfolios = [
    {
      _id: "1",
      // title: "Satavahana University",
      image: serviceimage3,
      // releaseDate: "2023-11-22",
      // videoUrl: fleetins,
      delay: "0.1s",
      // portfolioItemClass: "your-portfolio-item-class-1",
      websiteUrl: "https://satavahana.ac.in/",
    },
    {
      _id: "2",
      // title: "FLIC MICROWAVES",
      image: servicesimage,
      // releaseDate: "2023-11-23",
      // videoUrl: "your-youtube-video-id-2",
      delay: "0.2s",
      // portfolioItemClass: "your-portfolio-item-class-2",
    
    },
    {
      _id: "3",
      // title: "ENCHANTXP",
      image: serviceimage4,
      // releaseDate: "2023-11-23",
      // videoUrl: "your-youtube-video-id-2",
      delay: "0.2s",
      // portfolioItemClass: "your-portfolio-item-class-2",
       // Add the website URL for the second item
    },
    
    {
      _id: "4",
      // title: "FACESOFSTYLE",
      image: servicesimage2,
      // releaseDate: "2023-11-23",
      // videoUrl: "your-youtube-video-id-2",
      delay: "0.2s",
      // portfolioItemClass: "your-portfolio-item-class-2",
     
    },
    
    {
      _id: "5",
      // title: "ANANDGIRI FOUNDATION",
      image: serviceimage5,
      // releaseDate: "2023-11-23",
      // videoUrl: "your-youtube-video-id-2",
      delay: "0.2s",
      // portfolioItemClass: "your-portfolio-item-class-2",
      websiteUrl: "http://anandgiri.org/", // Add the website URL for the second item
    },
    
    // {
    //   _id: "6",
    //   // title: "FULLFILL INDIA",
    //   image: serviceimage6,
    //   // releaseDate: "2023-11-23",
    //   // videoUrl: "your-youtube-video-id-2",
    //   delay: "0.2s",
    //   // portfolioItemClass: "your-portfolio-item-class-2",
      
    // },
    
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState(" ");

  const openVideoModal = (id) => {
    setIsOpen(!isOpen);
    setVideoId(id);
  };

  return (
    <>
      <section className="featured-area bg-common-black section-spacing-bottom">
        <div className="container">
          <div
            className="row section-title-spacing justify-content-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-8">
              <div className="section-title text-center">
                <span className="section-subtitle title-anim">
                  FEATURED PROJECTS
                </span>
                <h2 className="section-main-title text-white title-anim">
                  Our Featured Projects
                </h2>
              </div>
            </div>
          </div>
          <div className="fm-featured-wrapper-2">
            {manualPortfolios.map((item) => (
              <div
                className="fm-single-featured-2 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item._id}
              >
                <div className={item.portfolioItemClass}>
                  <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </a>
                  <div className="fm-featured-content-2">
                    <div className="fm-featured-content-inner">
                      <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <h4 className="fm-featured-title">{item.title}</h4>
                      </a>
                      <span className="fm-featured-meta">
                        {item.releaseDate}
                      </span>
                    </div>

                    <div
                      className="fm-video-play"
                      onClick={() => {
                        openVideoModal(item.videoUrl);
                      }}
                    >
                      <button className="fm-featured-video-wrapper fm-featured-video-btn btn-clr popup-video btn-pos">
                        <i className="fas fa-play"></i>
                        <span>Play Trailer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div
              className="fm-featured-info wow fmSlideInLeft"
              data-wow-delay="0.5s"
            >
              <div className="featured-btn-circle-wrap-2">
                <div className="featured-btn-circle-wrap btn_wrapper">
                  <Link
                    href="/service"
                    className="featured-rotate-btn btn__item-move"
                  >
                    <Image
                      className="image-text"
                      src={BtnBgImg}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                    <span>
                      <i className="flaticon-right-arrow-1"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoPlay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default PortfolioSectionTwo;
