import Link from 'next/link';
import React from 'react';
import FooterTwoCopyRight from './component/footer-two-copyright';
import Image from 'next/image';
import LogoImg from '@assets/img/logo/logo.png';

const FooterTwo = () => {
    return (
        <footer className="position-relative pt-80 bg-common-black">
        <div className="footer-area">
           <div className="main-footer-top">
              <div className="container">
                 <div className="row">
                    <div className="col-12">
                       <div className="footer-contact text-center">
                          <div className="footer-contact-text">
                             <h2 className="footer-contact-title small fw-600 text-white bdFadeUp">If {`you'd`} like to <Link
                                   className="mark-text" href="/contact">talk to us</Link> about a project,
                                we would love to hear from you.</h2>
                          </div>
                          <div className="footer-logo-wrapper">
                             <Link href="/" className="fm-footer-logo">
                                <Image src={LogoImg} style={{width:'auto',height:'auto'}} alt="img not found"/>
                             </Link>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        <FooterTwoCopyRight/>
        </div>
     </footer>
    );
};

export default FooterTwo;