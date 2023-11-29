import Link from 'next/link';
import React from 'react';

const Pagination_Data = () => {
   return (
      <div className="bd-basic__pagination d-flex align-items-center bdFadeUp">
         <nav>
            <ul>
               <li>
                  <Link href="">
                     <i className="fa-light fa-arrow-left-long"></i>
                  </Link>
               </li>
               <li>
                  <span className="current">1</span>
               </li>
               <li>
                  <Link href="">2</Link>
               </li>
               <li>
                  <Link href="">
                     <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Pagination_Data;