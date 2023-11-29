import ReviewForm from "@components/forms/review-form";
import React from "react";
import ShopDescription from "./shop-description";
import ShopAditionalInfo from "./shop-aditional-info";
import LatestComments from "./latest-comments";
import PostComments from "./post-comments";

const ProductContent = () => {
  return (
    <div className="lv-shop-details-product-content-tab-wrapper-1-7 section-spacing wow fadeInUp" data-wow-delay="0.3s">
      <div className="lv-shop-details-product-tab-buttons-1-7">
        <nav>
          <div className="nav" id="nav-tab2" role="tablist">
            <button
              className="active"
              id="nav-description-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-description"
              type="button"
              role="tab"
              aria-controls="nav-description"
              aria-selected="true"
            >
              Description
            </button>
            <button
              id="nav-additional-info-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-additional-info"
              type="button"
              role="tab"
              aria-controls="nav-additional-info"
              aria-selected="false"
              className=""
            >
              Additional info
            </button>
            <button
              id="nav-review-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-review"
              type="button"
              role="tab"
              aria-controls="nav-review"
              aria-selected="false"
              className=""
            >
              Reviews (03)
            </button>
          </div>
        </nav>
      </div>
      <div className="lv-shop-details-product-tab-content-1-7">
        <div className="tab-content" id="nav-tabContent">
          <ShopDescription />
          <ShopAditionalInfo />
          <div
            className="tab-pane fade"
            id="nav-review"
            role="tabpanel"
            aria-labelledby="nav-review-tab"
          >
            <div className="product__details-review">
              <div className="row g-5 gy-50">
                <div className="col-xxl-6">
                  <div className="postbox__comments">
                    <div className="postbox__comment-title mb-30">
                      <h3>Reviews (03)</h3>
                    </div>
                    <LatestComments />
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="post-comments-form">
                    <PostComments />
                    <ReviewForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
