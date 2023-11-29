import Link from 'next/link';
import React from 'react';

const ContactSection = () => {
   return (
      <section className="contact-top-area bg-common-black">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="fm-contact-wrapper fm-contact-pad">
                     <div className="section-title title-anim wow fadeInLeft" data-wow-delay="0.3s">
                        <span className="section-subtitle featured-sub-title">GET IN TOUCH</span>
                        <h2 className="section-main-title text-white fw-400 mb-15">Ready To Get Focused?</h2>
                        <h2 className="section-main-title text-white">Get In Touch</h2>
                     </div>

                     <div className="fm-contact-btn btn_wrapper wow fadeInRight" data-wow-delay="0.3s">
                        <Link href="/contact" className="blog-rotate-btn is-white large btn__item-move">
                           <span>
                              <i className="flaticon-right-arrow-1"></i>
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactSection;