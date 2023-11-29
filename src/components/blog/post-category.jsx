import Link from 'next/link';
import React from 'react';

const PostCategory = () => {
   return (
      <div className="sidebar__widget ">
         <h3 className="sidebar__widget-title mb-30">Post Category</h3>
         <div className="sidebar__widget-content">
            <ul>
               <li><Link href="/blog"><span>Action</span> <span>10</span></Link></li>
               <li><Link href="/blog"><span>Romance</span> <span>08</span></Link></li>
               <li><Link href="/blog"><span>Science Fiction</span> <span>12</span></Link></li>
               <li><Link href="/blog"><span>Animation</span> <span>09</span></Link></li>
            </ul>
         </div>
      </div>
   );
};

export default PostCategory;