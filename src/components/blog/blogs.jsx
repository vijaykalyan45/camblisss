import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blogs = () => {
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
    <div className="sidebar__widget ">
      <h3 className="sidebar__widget-title mb-30">Top Stories</h3>
      <div className="sidebar__widget-content">
        <div className="sidebar__post">
          {blogs.length &&
            blogs.slice(9, 13).map((item) => (
              <div className="rc__post" key={item._id}>
                <div className="rc__post-thumb">
                  <Link href={`/blog-details/${item._id}`}>
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h5 className="rc__post-title">
                    <Link href={`/blog-details/${item._id}`}>{item.title}</Link>
                  </h5>
                  <div className="postbox__meta">
                    <span>
                      <Link href="">{item.subTitle}</Link>
                    </span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
