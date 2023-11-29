import React from "react";

const ShopSearchForm = ({ onSubmit, setKeyword, keyword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(keyword);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="fm-search-widget-form-1-6">
      <input
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Search keyword"
        id="search"
      />
      <button type="submit">
        <i className="fal fa-search"></i>
      </button>
    </form>
  );
};

export default ShopSearchForm;