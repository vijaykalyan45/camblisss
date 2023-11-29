import Link from "next/link";
import React from "react";

const BlogTags = () => {
  return (
    <div className="sidebar__widget ">
      <h3 className="sidebar__widget-title mb-30">Popular Tags</h3>
      <div className="sidebar__widget-content">
        <div className="sidebar__tag">
          <Link href="/blog">Action</Link>
          <Link href="/blog">Comedy</Link>
          <Link href="/blog">Adventure</Link>
          <Link href="/blog">Drama</Link>
          <Link href="/blog">Romance</Link>
          <Link href="/blog">Thriller</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogTags;