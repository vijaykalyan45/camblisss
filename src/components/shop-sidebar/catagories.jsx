import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = ({ selectCategory }) => {
  const [movieCategoryTwo, setMovieCategoryTwo] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}category/all-category`)
      .then((res) => {
        setMovieCategoryTwo(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="widget fm-widget widget-category mb-40">
      <h4 className="fm-widget-heading-1-6 mb-20">Categories</h4>
      <div className="fm-widget-categories-list-1-6 category-btn">
        <button className="mb-4">View all</button>
        <ul>
          {movieCategoryTwo?.slice(0, 4).map((item) => (
            <li key={item._id}>
              <button onClick={() => selectCategory(item.category)}>
                {item.category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
