import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import useGlobalContext from "@hooks/use-context";
import BlogSidebarArea from "./blog-sidebar-area";
import MovieSliderNine from "@components/elements/slider/movie-slider/movie-slider-nine";
import PostboxForm from "@components/forms/postbox-form";
import PostBoxAuthor from "./postbox-author";
import BlogSocailIcon from "./blog-social-icon";
import BlogContent from "./blog-content";
import PostboxQuote from "./postbox-quote";
import PostboxMoreContent from "./postbox-more-content";
import blogDeatilsBg from "@assets/img/blog/blog-details-bg-2.jpg";
import blogDeatilsImg from "@assets/img/blog/blog-details-bg-1.jpg";

const BlogDetailsArea = ({ id }) => {
  const { blog, setBlog } = useGlobalContext();

  // Get data
  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.BASE_URL}blog/all-blog/${id}`)
        .then((res) => {
          setBlog(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id, setBlog]);

  return (
    <section className="postbox__area section-spacing-top pb-60">
      <div className="container">
        <div className="row g-40">
          <div className="col-xxl-8 col-xl-7 col-lg-7">
            <div
              className="postbox__wrapper wow fadeInUp"
              data-wow-delay={blog?.delay}
            >
              <h2 className="postbox__title">{blog?.title}</h2>
              <div className="postbox__item mb-60">
                <div className="postbox__meta mb-20">
                  <span>
                    <Link href="/blog">{blog?.subTitle}</Link>
                  </span>
                  <span> {blog?.date}</span>
                </div>
                <div className="fm__postbox-thumb mb-30">
                  {blog?.image ? (
                    <Image
                      src={blog?.image}
                      width={500}
                      height={500}
                      style={{ width: "100%", height: "auto" }}
                      data-speed="auto"
                      alt="image not found"
                    />
                  ) : (
                    <Image
                      src={blogDeatilsImg}
                      width={500}
                      height={500}
                      style={{ width: "100%", height: "auto" }}
                      data-speed="auto"
                      alt="image not found"
                    />
                  )}
                </div>
                <div className="">
                  <p>
                    There are lots of ways to generate leads. You can earn leads
                    through search results, paid ads, social media, and email
                    campaigns. Each of those methods is a great choice for lead
                    generation, Proin faucibus nec mauris a sodales, sed
                    elementum mi tincidunt. Sed eget viverra egestas nisi in
                    consequat. Fusce sodales augue a accumsan. Cras
                    sollicitudin, ipsum eget blandit pulvinar. Integer
                    tincidunt. Cras dapibus.
                  </p>
                  <p>
                    Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>
                </div>
              </div>
              <BlogContent />
              <PostboxQuote />
              <div className="">
                <p>
                  There are lots of ways to generate leads. You can earn leads
                  through search results, paid ads, social media, and email
                  campaigns. Each of those methods is a great choice for lead
                  generation, Proin faucibus nec mauris a sodales, sed elementum
                  mi tincidunt. Sed eget viverra egestas nisi in consequat.
                  Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget
                  blandit pulvinar. Integer tincidunt. Cras dapibus.
                </p>
                <p className="mb-55">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo.
                </p>
              </div>
              <div className="postbox__thumb-2 mb-30">
                <Image
                  src={blogDeatilsBg}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="">
                <p className="mb-20">
                  Etiam vitae leo et diam pellentesque porta. Sed eleifend
                  ultricies risus, vel rutrum erat commodo ut. Praesent finibus
                  congue euismod. Nullam scelerisque massa vel augue placerat, a
                  tempor sem egestas. Curabitur placerat finibus lacus.
                </p>
                <p>
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </p>
              </div>
              <div className="sidebar__tag mb-35 mt-70 ">
                <Link href="/blog">Action</Link>
                <Link href="/blog">Adventure</Link>
                <Link href="/blog">Comedy</Link>
              </div>
              <BlogSocailIcon />
              <PostboxMoreContent />
              <PostBoxAuthor />
              <PostboxForm />
              <MovieSliderNine />

              {/* Full Stack Developer Section */}
              <div className="postbox__item mb-60">
                <h2 className="postbox__title">Full Stack Developer</h2>
                <p>
                  Join our team as a Full Stack Developer and contribute to the
                  development of cutting-edge web applications. We are looking
                  for someone with expertise in both front-end and back-end
                  technologies.
                </p>
                <Link href="/apply-now-full-stack-developer">
                  <a className="fill-btn">Apply Now</a>
                </Link>
              </div>

              {/* HTML Developer Section */}
              <div className="postbox__item mb-60">
                <h2 className="postbox__title">HTML Developer</h2>
                <p>
                  Are you passionate about creating beautiful and responsive web
                  interfaces? Join us as an HTML Developer and be a part of
                  crafting exceptional user experiences.
                </p>
                <Link href="/apply-now-html-developer">
                  <a className="fill-btn">Apply Now</a>
                </Link>
              </div>
            </div>
          </div>
          <BlogSidebarArea />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
