import Link from 'next/link';
import React from 'react';

const 
FooterTwoCopyRight = () => {
    return (
        <div className="footer-bottom">
        <div className="container">
           <div className="footer-bottom-wrapper">
              <div className="footer-bottom-inner">
                 <div className="footer-copyright ">
                    <p>© 2023<Link className="color-theme-1" href="/"> CAMBLISS </Link> All Rights Reserved.</p>
                 </div>
                 <div className="footer-rules ">
                 <Link href="/">Privacy Policy</Link>
                  <Link href="/">Terms & Condition</Link>
                 {/* <Link href="/policy-privacy">Privacy Policy</Link>
                  <Link href="/terms-conditions">Terms & Condition</Link> */}
                 </div>
                 <div className="footer-social ">
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
    );
};

export default FooterTwoCopyRight;