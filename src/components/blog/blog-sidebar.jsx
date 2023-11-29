import React from "react";
import BlogSearch from "./blog-search";
import Blogs from "./blogs";
import PostCategory from "./post-category";
import BlogTags from "./blog-tags";
import Image from "next/image";
import blogImg from "@assets/img/blog/img-5.jpg";

const BlogSidebar = () => {
  return (
    <div className="col-xxl-4 col-xl-5 col-lg-5">
      <div className="sidebar__wrapper wow fadeInUp">
        <BlogSearch />
        <Blogs />
        <PostCategory />
        <BlogTags />
        <div className="sidebar__widget ">
          <div className="sidber__adv-thumb">
            <Image
              src={blogImg}
              style={{ width: "100%", height: "auto" }}
              data-speed="auto"
              alt="img not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
