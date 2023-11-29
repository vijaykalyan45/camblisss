import Image from "next/image";
import React from "react";
import blogImgOne from "@assets/img/blog/blog-details-1.jpg";
import blogImgTwo from "@assets/img/blog/blog-details-2.jpg";

const BlogContent = () => {
  return (
    <div className="postbox__item is-box mb-60">
      <h3 className="mb-20">Earn Leads Through Search Results</h3>
      <p className="mb-40 ">
        There are lots of ways to generate leads. You can earn leads through
        search results, paid ads, social media, and email campaigns. Each of
        those methods is a great choice for lead generation, Proin faucibus nec
        mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas
        nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin,
        ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus.
      </p>
      <div className="postbox__box-thumb mb-30">
        <Image
          src={blogImgOne}
          style={{ width: "100%", height: "auto" }}
          alt="img not found"
        />

        <Image
          src={blogImgTwo}
          style={{ width: "100%", height: "auto" }}
          alt="img not found"
        />
      </div>
      <div className="">
        <p>
          There are lots of ways to generate leads. You can earn leads through
          search results, paid ads, social media, and email campaigns. Each of
          tho se methods is a great choice for lead generation, Proin faucibus
          nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra
          egestas nisi in consequat. Fusce sodales augue a accumsan. Cras
          sollicitudin, ipsum eget blandit pulvinar. Integer tincidunt. Cras
          dapibus.
        </p>
        <p className="mb-0">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo.
        </p>
      </div>
    </div>
  );
};

export default BlogContent;
