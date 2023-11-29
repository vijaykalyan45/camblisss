import Link from 'next/link';
import React from 'react';

const BlogSocailIcon = () => {
      return (
            <div className="postbox__share-wrapper mb-60 ">
                  <div className="postbox__share-love">
                        <span><i className="fa-light fa-heart"></i></span>
                  </div>
                  <div className="fm-social-2">
                        <Link href="https://www.facebook.com/profile.php?id=61553561020127" target="_blank"><i
                              className="fa-brands fa-facebook-f"></i></Link>
                        <Link href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
                        <Link href="https://www.instagram.com/" target="_blank"><i
                              className="fa-brands fa-instagram"></i></Link>
                        <Link href="https://www.pinterest.com/" target="_blank"><i
                              className="fa-brands fa-pinterest-p"></i></Link>
                  </div>
            </div>
      );
};

export default BlogSocailIcon;