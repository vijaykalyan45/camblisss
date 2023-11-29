import Blogs from '@components/blog/blogs';
import PostCategory from '@components/blog/post-category';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blogImg from '@assets/img/blog/img-5.jpg';

const BlogSidebarArea = () => {
   return (
      <div className="col-xxl-4 col-xl-5 col-lg-5">
         <div className="sidebar__wrapper wow fadeInUp">
            <div className="sidebar__widget mb-50">
               <div className="sidebar__widget-content">
                  <div className="sidebar__search">
                     <form>
                        <div className="sidebar__search-input">
                           <input type="text" placeholder="Enter your keywords..." />
                           <button type="submit">
                              <i className="flaticon-search"></i>
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <Blogs />
            <PostCategory />
            <div className="sidebar__widget mb-45">
               <div className="sidber__adv-thumb">
                  <Image src={blogImg} style={{ width: "100%", height: "auto" }} data-speed="auto" alt="img not found" />
               </div>
            </div>
            <div className="sidebar__widget">
               <h3 className="sidebar__widget-title mb-30">Popular Tags</h3>
               <div className="sidebar__widget-content">
                  <div className="sidebar__tag">
                     <Link href="/blog">Action</Link>
                     <Link href="/blog">Comedy</Link>
                     <Link href="/blog">Romance</Link>
                     <Link href="/blog">Horror</Link>
                     <Link href="/blog">Thriller</Link>
                     <Link href="/blog">Animation</Link>
                     <Link href="/blog">Mystery</Link>
                     <Link href="/blog">Crime</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BlogSidebarArea;