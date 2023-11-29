import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { cart_product, decrease_quantity } from "src/redux/features/cart-slice";
import useGlobalContext from "@hooks/use-context";
import axios from "axios";
import { usePathname } from "next/navigation";

const ShopProduct = () => {
  const pathname = usePathname();
  const [singleMovie, setSingleMovie] = useState({});
  const { movie } = useGlobalContext();
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);
  const findProduct = cartProducts.find(
    (product) => product.title == movie?.title
  );
  const findStaciProduct = cartProducts.find(
    (product) => product.title == singleMovie?.title
  );
  const path = pathname === "/shop-details";
  const handleChange = (e) => { };

  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}movie/single-movie`)
      .then((res) => {
        setSingleMovie(res.data);
      })
      .catch((e) => console.log(e));
  }, [path]);

  return (
    <div
      className="shop-product-details-portion wow fadeInUp"
      data-wow-delay="0.3s"
    >
      <div className="row g-50">
        <div className="col-xl-6 col-lg-6">
          <div className="shop-product-details-portion-wrapper">
            <div className="shop-details-thumb">
              <img
                src={path ? singleMovie.image : movie.image}
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
                data-speed="auto"
                alt="shop-img"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="shop-product-details-portion-content">
            <h4 className="shop-product-details-title">
              {path ? singleMovie?.title : movie?.title}
            </h4>
            <span className="product-details-price d-inline-block">
              ${path ? singleMovie?.price : movie?.price}
            </span>
            <div className="product-details-ratings-wrapper mb-30">
              <span className="product-details-ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="review-count">(2 Reviews)</span>
            </div>
            <div className="">
              <p className="mb-35">
                Bradford and its surrounding areas is Barnard’s artistic
                stomping ground, with three of her four features being
                conceived, workshopped and filmed in the diverse northern
                English city.
              </p>

              <div className="shop-cart-option mb-15">
                <div className="product-quantity mr-20">
                  <div className="p-relative">
                    <div className="product-quantity-form">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <button
                          onClick={() =>
                            dispatch(
                              decrease_quantity(path ? singleMovie : movie)
                            )
                          }
                          className="cart-minus"
                        >
                          <i className="far fa-minus"></i>
                        </button>
                        {pathname === "/shop-details" ? (
                          <>
                            <input
                              className="cart-input"
                              type="text"
                              onChange={handleChange}
                              value={
                                findStaciProduct?.quantity
                                  ? findStaciProduct?.quantity
                                  : 0
                              }
                            />
                          </>
                        ) : (
                          <>
                            <input
                              className="cart-input"
                              type="text"
                              onChange={handleChange}
                              value={
                                findProduct?.quantity
                                  ? findProduct?.quantity
                                  : 0
                              }
                            />
                          </>
                        )}
                        <button
                          className="cart-plus"
                          onClick={() =>
                            dispatch(cart_product(path ? singleMovie : movie))
                          }
                        >
                          <i className="far fa-plus"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <Link href="/cart" className="border-btn">
                  View Cart
                </Link>
              </div>
            </div>

            <div className="shop-product-details-information border-topinfo mt-45 pt-35">
              <p>
                <span className="sku-value">
                  <span>SKU :</span> 254121
                </span>
              </p>
              <p>
                <span className="product-cat">
                  <span>Category :</span> <Link href="/movie">Short film</Link>
                </span>
              </p>
              <p>
                <span className="product-tag">
                  <span>Tags :</span> <Link href="">Awards</Link>,{" "}
                  <Link href="">Festival</Link>,{" "}
                  <Link href="/movie">Movie</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
