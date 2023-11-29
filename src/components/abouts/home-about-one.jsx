import Image from 'next/image';
import React from 'react';
import aboutImage from '@assets/img/about/director-about.png'
import Link from 'next/link';
import aboutusimage from "@assets/img/logo/aboutus.jpeg";
import aboutusimage1 from "@assets/img/logo/aboutus1.png";

const AboutSection = () => {
   return (
      <div className="fm-about-area bg-common-black section-spacing fix">
         <div className="container">
            <div className="row align-items-center g-5 gy-50">
               <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
                  <div className="fm-director-about-img">
                     <Image src={aboutusimage1} style={{ width: '100%', height: 'auto' }} alt="img not found" />
                     {/* <div className="fm-director-years">
                        <span className="fm-director-years-number">30</span>
                        <span className="fm-director-years-content">
                           <span className="fm-director-plus">+</span>
                           <span className="fm-director-years-text">Years <br /> Experience</span>
                        </span>
                     </div> */}
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                  <div className="fm-about-content-section">
                     <span className="section-subtitle title-anim">ABOUT US</span>
                     <h2 className="section-main-title text-white mb-25 title-anim">Turning Your Ideas <br /> into smart digital products
                     </h2>
                     <p className="mb-20">{`At our Cambliss Studio`} , our mission is to empower bussiness with the tools and strategies
                      they need to thrive in the digital landscape. We strive to help our clients build a strong online presence, reach their 
                      target audience effectively, and drive measurable results.
                        </p>

                     <p>Our mission is to stay at the forefront of digital marketing trends and technologies, continously refining our expertise
                        to deliver innovative and cutting-edge solutions.We aim to be a trusted partner to our clients, providing them with customized strategies
                        that align with their goals and objectives.
                     </p>
                     {/* <div className="fm-director-about-name mt-55">
                        <Link href="/team-details" className="director-about-nam">David Anderson</Link>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutSection;