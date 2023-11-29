import Link from 'next/link';
import React from 'react';
import AuthorImg from '@assets/img/blog/blog-author.jpg';
import Image from 'next/image';
import SocialIcon from '@components/common/social-icon/SocialIcon';

const PostBoxAuthor = () => {
  return (
    <div className="postbox__author mb-60 ">
      <div className="postbox__author-thumb">
        <Image
          src={AuthorImg}
          style={{ width: "100%", height: "auto" }}
          alt="img not found"
        />
      </div>
      <div className="author-content">
        <div className="author-meta-social">
          <div className="author-meta">
            <h4 className="author-name">David Colins</h4>
            <div className="author-designation">Author</div>
          </div>
          <SocialIcon socialWrapperClass="fm-social-2" />
        </div>
        <div className="author-text">
          <p>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostBoxAuthor;