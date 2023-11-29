import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GalleryImage from '@assets/img/gallery/12.png';
import HeroSmallBg from '@assets/img/bg/hero-small.png';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const HeroThere = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
       <>
        <div className="fm-hero-area bg-common-black hero-style">
        <div className="adjust-header-space"></div>
        <div className="container">
           <div className="row align-items-center">
              <div className="col-xl-9 col-lg-8 ">
                 <div className="fm-hero-section-wrapper p-relative hero__six_anim">
                    <div className="fm-hero-section-title">
                       <span className="fm-hero-subtitle ">BEST WEB SERIES 2023</span>
                       <h1 className="fm-hero-main-title text-white hero__title-6">
                          <span className="title-left">FAIME</span>
                          <span className="spc-text title-right">GAME</span>
                       </h1>
                    </div>
                    <div className="fm-hero-video-wrapper hero__six_anim">
                       <button className="play-btn popup-video" onClick={() => { openVideoModal(); }}
                         style={{ backgroundImage: `url(${HeroSmallBg.src})`}}
                          ><i className="fas fa-play"></i></button>
                    </div>
                 </div>
              </div>
              <div className="col-xl-4 col-lg-4 ">
                 <div className="fm-hero-thumb hero__right-6">
                    <Image src={GalleryImage} style={{width:'100%', height:'auto'}}  alt="img not found"/>
                 </div>
                 <div className="fm-slider-main-social-abs">
                    <div className="fm-sliderfull-social">
                       <label>Follow</label>
                       <Link href="https://www.facebook.com/profile.php?id=61553561020127" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                       <Link href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
                       <Link href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                       <Link href="https://www.pinterest.com/" target="_blank"><i
                             className="fa-brands fa-pinterest-p"></i></Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <ModalVideo channel='youtube'  isOpen={isOpen} videoId="FKqaLL067w4" onClose={() => setIsOpen(false)} />
       </>
    );
};

export default HeroThere;