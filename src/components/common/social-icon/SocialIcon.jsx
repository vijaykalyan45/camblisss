import Link from 'next/link';
import React from 'react';

const SocialIcon = ({socialWrapperClass}) => {
    return (
        <div className={socialWrapperClass}>
        <Link href="https://www.facebook.com/profile.php?id=61553561020127" target="_blank">
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link href="https://www.linkedin.com/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link href="https://www.pinterest.com/" target="_blank">
          <i className="fa-brands fa-pinterest-p"></i>
        </Link>
      </div>
    );
};

export default SocialIcon;