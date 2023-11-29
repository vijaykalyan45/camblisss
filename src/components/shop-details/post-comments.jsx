import Link from 'next/link';
import React from 'react';

const PostComments = () => {
   return (
      <div className="post-comments-title mb-30">
         <h3>Your Review</h3>
         <div className="post-rating">
            <span>Your Rating :</span>
            <ul className="review-rating">
               <li>
                  <Link href="">
                     <i className="fas fa-star"></i>
                  </Link>
               </li>
               <li>
                  <Link href="">
                     <i className="fas fa-star"></i>
                  </Link>
               </li>
               <li>
                  <Link href="">
                     <i className="fas fa-star"></i>
                  </Link>
               </li>
               <li>
                  <Link href="">
                     <i className="fas fa-star"></i>
                  </Link>
               </li>
               <li>
                  <Link href="">
                     <i className="fas fa-star"></i>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default PostComments;