import BlogSearchForm from "@components/forms/blog-search-form";
import React from "react";

const BlogSearch = () => {
  return (
    <div className="sidebar__widget ">
      <div className="sidebar__widget-content">
        <div className="sidebar__search">
          <BlogSearchForm />
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
