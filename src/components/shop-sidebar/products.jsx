import GetRating from "@hooks/use-rating";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cart_product } from "src/redux/features/cart-slice";

const Products = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  //get data
  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}movie/all-movie`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="fm-shop-content-wrapper">
      {movies?.slice(0, 12).map((item) => (
        <div
          className="fm-shop-product fade__anim-item text-center"
          key={item._id}
        >
          <div className="fm-shop-product-img">
            <Link href={`/shop-details/${item._id}`}>
              <Image
                src={item.image}
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
          <div className="fm-shop-product-content ">
            <div className="fm-shop-product-rating">
              <GetRating averageRating={item.ratings} />
            </div>
            <h4 className="fm-shop-product-title">
              <Link href={`/shop-details/${item._id}`}>{item.title}</Link>
            </h4>
            <span className="fm-shop-price">
              <ins>${item.price}</ins>
              <del>{item.old_price === 0 ? "" : `$${item.old_price}`}</del>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
