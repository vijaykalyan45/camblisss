import React from "react";
import Products from "./products";
import Link from "next/link";
import SidebarArea from "./sidebar-area";
import { useState } from "react";

const ShopArea = () => {
  const [keyword, setKeyword] = useState(" ");
  const [categorys, setCategorys] = useState(" ");
  const selectCategory = (category) => {
    setCategorys(category);
  };

  return (
    <>
      <div className="fm-shop-wide-area section-spacing shop-bg">
        <div className="container">
          <div className="fade_animation">
            <div className="row g-5 gy-50">
              <div className="col-xl-9 col-lg-8">
                <Products keyword={keyword} categorys={categorys} />
                <div className="fm-shop-content-more-btn text-center mt-50 bdFadeBottom">
                  <Link href="/movie" className="border-btn">
                    Load More
                  </Link>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-8">
                <div
                  className="fm-widget-right wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="row">
                    <SidebarArea
                      keyword={keyword}
                      selectCategory={selectCategory}
                      setKeyword={setKeyword}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopArea;
