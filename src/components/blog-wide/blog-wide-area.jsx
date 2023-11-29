import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogWideArea = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}blog/all-blog`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="fm-blog-grid-area section-spacing">
      <div className="container-fluid">
        <div className="row g-5">
          {blogs &&
            blogs.slice(15, 27).map((item) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item._id}
              >
                <div className="fm-blog-grid-single bdFadeUp last-one">
                  <div className="fm-blog-grid-single-img w_100">
                    <Link href={`/blog-details/${item._id}`}>
                      {" "}
                      <Image
                        src={item.image}
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                        alt="img not found"
                      />
                    </Link>
                  </div>
                  <div className="fm-blog-grid-single-content">
                    <div className="fm-blog-grid-meta">
                      <span className="fm-blog-grid-meta-date">
                        {item.date}
                      </span>{" "}
                      <span className="seperator">/</span>
                      <span className="fm-blog-grid-meta-poster">
                        {item.subTitle}
                      </span>{" "}
                      <span className="seperator">/</span>
                      <span className="fm-blog-grid-meta-author">
                        {item.author}
                      </span>
                    </div>
                    <h4 className="fm-blog-grid-single-title title-color">
                      <Link href={`/blog-details/${item._id}`}>
                        {item.title}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="fm-films-more-button text-center mt-50 bdFadeBottom">
              <Link href="" className="border-btn">
                Load More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWideArea;
