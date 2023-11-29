import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogSectionThere = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}blog/all-blog`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="blog-area section-spacing fix">
      <div className="container">
        <div className="row g-5 align-items-end section-title-spacing">
          <div
            className="col-lg-8 col-md-8 wow fmSlideInLeft"
            data-wow-delay="0.3s"
          >
            <div className="blog-sec-wrapper">
              <div className="section-title">
                <span className="section-subtitle title-anim">LATEST NEWS</span>
                <h2 className="section-main-title blog-sec-title title-anim">
                  Faime Latest Blog
                </h2>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 wow fmSlideInRight"
            data-wow-delay="0.3s"
          >
            <div className=" blog-btn fade_bottom_3 d-flex justify-content-md-end">
              <Link className="fill-btn" href="/blog-details">
                View All{" "}
                <span>
                  <i className=" fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="fm-blog-wrapper">
            {blogs.length &&
              blogs.slice(0, 3).map((item) => (
                <div
                  className="fm-blog-inner blog__animation-wrapper wow fadeInUp"
                  data-wow-delay={item.delay}
                  key={item._id}
                >
                  <div className="fm-blog-thumb">
                    <Link href={`/blog-details/${item._id}`}>
                      <Image
                        src={item.image}
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                        alt="image not found"
                      />
                    </Link>
                  </div>
                  <div className="fm-blog-content blog__content ">
                    <div className="fm-blog-content-text">
                      <div className="fm-blog-meta">
                        <span>{item.date}</span>
                      </div>
                      <h4 className="fm-blog-title">
                        <Link href={`/blog-details/${item._id}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <div className="fm-blog-text">
                        <p className="">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="fm-featured-btn btn_wrapper">
                    <Link
                      href={`/blog-details/${item._id}`}
                      className="blog-rotate-btn btn__item-move"
                    >
                      <span>
                        <i className="flaticon-right-arrow-1"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSectionThere;
