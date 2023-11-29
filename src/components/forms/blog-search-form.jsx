import React from "react";

const BlogSearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="sidebar__search-input">
        <input type="text" placeholder="Enter your keywords..." />
        <button type="submit">
          <i className="flaticon-search"></i>
        </button>
      </div>
    </form>
  );
};

export default BlogSearchForm;
