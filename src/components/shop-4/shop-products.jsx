import GetRating from "@hooks/use-rating";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cart_product } from "src/redux/features/cart-slice";

const ShopProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}movie/all-movie`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="fm-shop-wide-area section-spacing shop-bg">
        <div className="container">
          <div className="fade_animation">
            <div className="row g-5 row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
              {products.length &&
                products.slice(0, 12).map((item) => (
                  <div
                    className="col wow fadeInUp"
                    data-wow-delay={item.delay}
                    key={item._id}
                  >
                    <div className="fm-shop-product text-center fade__anim-item">
                      <div className="fm-shop-product-img">
                        <Link href={`/shop-details/${item._id}`}>
                          <Image
                            src={item?.image}
                            width={500}
                            height={500}
                            style={{ width: "100%", height: "auto" }}
                            alt="image not found"
                          />
                        </Link>
                         
                          <button
                          onClick={() => dispatch(cart_product(item))}
                          className="add_to_cart_button"
                        >
                          <i className={item.icon}></i>
                          <span>Add To Cart</span>
                        </button>
                       
                      </div>
                      <div className="fm-shop-product-content">
                        <div className="fm-shop-product-rating">
                          <GetRating averageRating={item.ratings}/>
                        </div>
                        <h4 className="fm-shop-product-title">
                          <Link href={`/shop-details/${item._id}`}>
                            {item.title}
                          </Link>
                        </h4>
                        <span className="fm-shop-price">
                          <ins>${item.price}</ins>
                          {item?.old_price && <del>${item.old_price}</del>}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="fm-shop-content-more-btn text-center mt-50 bdFadeBottom">
            <Link href="/movie" className="border-btn">
              Load More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
