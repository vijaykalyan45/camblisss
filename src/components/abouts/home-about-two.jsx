import React from 'react';
import aboutImg from '@assets/img/bg/about-bg-3.png';
import aboutBgImg from '@assets/img/bg/about-bg-2.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import imageabout from "@assets/img/logo/video-2-0.png";
import servicesimage1 from "@assets/img/logo/servicesimage1.png";


const AboutSectionTwo = () => {
   const [isOpen, setIsOpen] = useState(false);
   const openVideoModal = () => setIsOpen(!isOpen);
   return (
      <>
         <section className="about-area fm-about-style bg-common-black">
            <div className="fm-about-bg-thumb" style={{ backgroundImage: `url(${servicesimage1.src})` }}>
               <div className="container">
                  {/* <div className="about-exp-2">
                     <h4 className="about-exp-num  about-clr-black">10</h4>
                     <p className="about-exp-text small about-clr-black">YEARS OF <br /> EXPERIENCE</p>
                  </div> */}
               </div>
            </div>
            <div className="container p-relative z-1">
               <div className="row justify-content-lg-end">
                  <div className="col-xl-7 col-lg-9">
                     <div className="fm-about-wrapper section-spacing">
                        <div className="section-title">
                           <span className="section-subtitle featured-sub-title title-anim wow fadeInUp" data-wow-delay="0.3s">About CAMBLISS</span>
                           <h2 className="section-main-title text-white mb-30 title-anim wow fadeInUp" data-wow-delay="0.4s">Simplify.Thrive.Repeat
                              Choose Cambliss Subscription
                           </h2>
                           <p className="about-text-2 large wow fadeInUp" data-wow-delay="0.5s">
                              Whether you are in need of a simple logo or a high end 3D animation VFX or website development, social media marketing,
                              sales, E-commerce solutions or SEO , CAMBLISS IS HERE!!!!
                           </p>
                        </div>
                        <div className="fm-about-btn-2 btn_wrapper wow fadeInUp" data-wow-delay="0.6s">
                           <Link href="/service-details" className="blog-rotate-btn is-white btn__item-move">
                              <span>
                                 <i className="flaticon-right-arrow-1"></i>
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="fm-about-video-wrap d-none d-sm-block wow fmSlideInRight" data-wow-delay="0.7s">
                  <div className="fm-about-video-thumb">
                     <Image src={aboutImg} style={{ width: '100%', height: 'auto' }} alt="img not found" /> */}
                     {/* <div className="fm-films-video-button-main btn-style">
                        <button
                           className="fm-film-video-btn popup-video" onClick={() => { openVideoModal(); }}>
                           <i className="fa-thin fa-play"></i>
                           <svg className="eltdf-svg-circle">
                              <circle cx="50%" cy="50%" r="45%"></circle>
                           </svg>
                        </button>
                     </div> */}
                  {/* </div>
               </div> */}
            </div>
         </section>
         <ModalVideo channel='youtube' isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
      </>

   );
};

export default AboutSectionTwo;