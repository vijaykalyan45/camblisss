import React from "react";
import Postbox from "./postbox";
import BlogSidebar from "./blog-sidebar";

const PostBoxArea = () => {
  return (
    <section className="postbox__area section-spacing-bottom">
      <div className="container">
        <div className="row g-40">
          <Postbox />
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default PostBoxArea;
