import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogSectionFour = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}blog/all-blog`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // return (
  //   <div className="blog-area section-spacing fix blog-bg">
  //     <div className="container">
  //       <div
  //         className="row section-title-spacing wow fadeInUp"
  //         data-wow-delay="0.3s"
  //       >
  //         <div className="col-12">
  //           <div className="sec-sub">
  //             <div className="section-title sec-sub-style  text-center">
  //               <span className="section-subtitle">LATEST BLOGS</span>
  //               <div>
  //                 <h2 className="section-main-title  title-anim blog-title-sec">
  //                   Latest Blog & News
  //                 </h2>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="team__animation">
  //         <div className="row g-5">
  //           {blogs.length &&
  //             blogs.slice(3, 6).map((item) => (
  //               <div
  //                 className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
  //                 data-wow-delay={item.delay}
  //                 key={item._id}
  //               >
  //                 <div className="fm-film-blog-single team__item">
  //                   <div className="fm-blog-img-2">
  //                     <Link
  //                       href={`/blog-details/${item._id}`}
  //                       className="fm-film-blog-cat"
  //                     >
  //                       Movie
  //                     </Link>
  //                     <Link href={`/blog-details/${item._id}`}>
  //                       {" "}
  //                       <Image
  //                         src={item.image}
  //                         width={500}
  //                         height={500}
  //                         style={{ width: "100%", height: "auto" }}
  //                         alt="img not found"
  //                       />
  //                     </Link>
  //                   </div>

  //                   <div className="fm-film-blog-single-content">
  //                     <div className="fm-film-blog-single-meta">
  //                       <span className="fm-film-blog-meta">
  //                         <i className="fas fa-calendar-week"></i> {item.date}
  //                       </span>
  //                       <span className="fm-film-blog-meta">
  //                         <i className="fas fa-comments"></i>{" "}
  //                         {item.comment > 0
  //                           ? `${item.comment} comments`
  //                           : `${item.comment} comment`}{" "}
  //                       </span>
  //                     </div>
  //                     <h4 className="fm-film-blog-title">
  //                       <Link href={`/blog-details/${item._id}`}>
  //                         {item.title}
  //                       </Link>
  //                     </h4>
  //                     <Link
  //                       href={`/blog-details/${item._id}`}
  //                       className="fm-film-blog-btn"
  //                     >
  //                       Read More <i className={item.icon}></i>
  //                     </Link>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default BlogSectionFour;
