import Link from "next/link";
import React from "react";

const FooterOneCopyright = () => {
  return (
    <>
       <div className="footer-bottom-4">
               <div className="footer-bottom-wrapper-2 ">
                  <div className="footer-bottom-inner">
                     <div className="footer-copyright">
                        <p>© 2023<Link href="/"> CAMBLISS </Link> All Rights Reserved.</p>
                     </div>
                     <div className="footer-rules ">
                     <Link href="/policy-privacy">Privacy Policy</Link>
                        <Link href="/terms-conditions">Terms & Condition</Link>
                        {/* <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms & Condition</Link> */}
                     </div>
                  </div>
               </div>
            </div>
    </>
  );
};

export default FooterOneCopyright;
