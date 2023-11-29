import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '@assets/img/logo/logo.png';
import HeaderSidebarTwo from '@components/common/sidebar/header-sidebar-two';

const HeaderTwo = () => {
       // Sticky Menu Area start
	useEffect(() => {
		window.addEventListener('scroll', sticky);
		return () => {
		   window.removeEventListener('scroll', sticky);
		};
	 });
  
	 const sticky = (e) => {
		const header = document.querySelector('.header-main');
		const scrollTop = window.scrollY;
		scrollTop >= 40 ? header.classList.add('sticky') : header.classList.remove('sticky');
	 };
	 // Sticky Menu Area End
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
    const handleMenuOpenClose = () =>{
      setIsOffCanvasOpen(!isOffCanvasOpen)
    }
    return (
      <><header id="header-sticky" className="fm-header-area-2  header-spc-2 header-main">
      <div className="container">
         <div className="row align-items-center">
            <div className="col-12">
               <div className="header-wrapper-2">
                  <div className="fm-header-logo-wrapper fm-header-logo-wrapper-2 justify-content-between">
                     <Link href="/" className="fm-header-logo-2">
                        <Image src={Logo} style={{width:'auto',height:'auto'}} alt="img not found"/>
                     </Link>
                     <button onClick={handleMenuOpenClose} className="fm-menu-bar fm-menu-bar-2 mobile-menu-btn">
                        <div className="fm-header-bar-1 ">
                           <span className="fm-header-bar-line fm-header-bar-line-1"></span>
                           <span className="fm-header-bar-line fm-header-bar-line-2"></span>
                           <span className="fm-header-bar-line fm-header-bar-line-3"></span>
                        </div>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
    {/* full canvas area start */}
    <HeaderSidebarTwo
        isOffCanvasOpen={isOffCanvasOpen}
        handleMenuOpenClose={handleMenuOpenClose}
      />
   </>
    );
};

export default HeaderTwo;