import useCartInfo from "@hooks/use-cart-info";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cart_product,
  clear_cart,
  decrease_quantity,
  remove_cart_product,
} from "src/redux/features/cart-slice";

const CartArea = () => {
  const { cartProducts } = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  const { total } = useCartInfo();

  return (
    <>
      {cartProducts?.length === 0 && (
        <div className="container">
          <div className="empty-text pt-100 pb-100 text-center">
            <h3>Your cart is empty</h3>
          </div>
        </div>
      )}
      {cartProducts?.length >= 1 && (
        <section className="cart-area section-spacing">
          <div className="container">
            <div className="fade_animation wow fadeInUp">
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartProducts?.map((item, index) => (
                          <tr key={index}>
                            <td className="product-thumbnail fm-cart-img">
                              <Link href={`/shop-details/${item.id}`}>
                                <Image
                                  src={item?.image}
                                  width={500}
                                  height={500}
                                  style={{ width: "auto", height: "auto" }}
                                  alt="image not found"
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link href={`/shop-details/${item.id}`}>
                                {item?.title}
                              </Link>
                            </td>
                            <td className="product-price">
                              <span className="amount">{item?.price}</span>
                            </td>
                            <td className="cart-plus-minus">
                              <div className="product-quantity-form">
                                <form onSubmit={(e) => e.preventDefault()}>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      dispatch(decrease_quantity(item))
                                    }
                                    className="cart-minus"
                                  >
                                    <i className="far fa-minus"></i>
                                  </button>
                                  <p className="cart-input">{item?.quantity}</p>
                                  <button
                                    type="button"
                                    onClick={() => dispatch(cart_product(item))}
                                    className="cart-plus"
                                  >
                                    <i className="far fa-plus"></i>
                                  </button>
                                </form>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">
                                ${(item.price * item.quantity)}
                              </span>
                            </td>
                            <td
                              onClick={() =>
                                dispatch(remove_cart_product(item))
                              }
                              className="product-remove"
                            >
                              <button type="button">
                                <i className="fa fa-times"></i>{" "}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="coupon-all">
                        <div className="coupon">
                          <input
                            id="coupon_code"
                            className="input-text"
                            name="coupon_code"
                            placeholder="Coupon code"
                            type="text"
                          />
                          <button
                            className="btn theme-btn-2"
                            name="apply_coupon"
                            type="submit"
                          >
                            Apply coupon
                          </button>
                        </div>
                        <div className="coupon2">
                          <button
                            className="btn theme-btn"
                            type="submit"
                            onClick={() => dispatch(clear_cart())}
                          >
                            Clear Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-end">
                    <div className="col-md-5">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul className="mb-20">
                          <li>
                            Subtotal <span>${parseFloat(total)}</span>
                          </li>
                          <li>
                            Total <span>${parseFloat(total)}</span>
                          </li>
                        </ul>
                        <div className="text-end">
                          <Link className="fill-btn" href="/checkout">
                            Proceed to checkout{" "}
                            <span>
                              <i className="fa-regular fa-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartArea;
