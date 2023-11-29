import useCartInfo from "@hooks/use-cart-info";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const OrderSidebar = () => {
  const { total } = useCartInfo();
  const { cartProducts } = useSelector((state) => state.cart);
  const [withShiping, setWithShiping] = useState(0);

  const shippingCost = 7;

  const handleShipping = (shippingCost) => {
    setWithShiping(total + shippingCost);
  };
  const handleFreeShipping = () => {
    setWithShiping(total);
  };

  return (
    <div className="col-lg-6">
      <div className="your-order mb-30 ">
        <h3>Your order</h3>
        <div className="your-order-table table-responsive">
          <table>
            <thead>
              <tr>
                <th className="product-name">Product</th>
                <th className="product-total">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((item, index) => (
                <tr className="cart_item" key={index}>
                  <td className="product-name">{item.title}</td>
                  <td className="product-total">
                    <span className="amount">
                      ${item?.quantity * item.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="cart-subtotal">
                <th>Cart Subtotal</th>
                <td>
                  <span className="amount">${parseFloat(total)}</span>
                </td>
              </tr>
              <tr className="shipping">
                <th>Shipping</th>
                <td>
                  <ul>
                    <li>
                      <input
                        onClick={() => handleShipping(shippingCost)}
                        type="radio"
                        id="flatRate"
                        name="fav_language" defaultChecked
                      />
                      <label className="ml-10" htmlFor="flatRate">
                        Flat Rate:{" "}
                        <span className="amount">${shippingCost}</span>
                      </label>
                    </li>
                    <li>
                      <input
                        onClick={() => handleFreeShipping()}
                        type="radio"
                        id="shipping"
                        name="fav_language"
                      />
                      <label className="ml-10" htmlFor="shipping">
                        {" "}
                        Free Shipping:
                      </label>
                    </li>
                    <li></li>
                  </ul>
                </td>
              </tr>
              <tr className="order-total">
                <th>Order Total</th>
                <td>
                  <strong>
                    <span className="amount">
                      {" "}
                      ${" "}
                      {withShiping > 0
                        ? withShiping
                        : ` ${parseFloat(total)} `}{" "}
                    </span>
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="payment-method">
          <div className="accordion" id="checkoutAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="checkoutOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#payment"
                  aria-expanded="false"
                  aria-controls="payment"
                >
                  Payment Info
                </button>
              </h2>
              <div
                id="payment"
                className="accordion-collapse collapse"
                aria-labelledby="paymentTwo"
                data-bs-parent="#checkoutAccordion"
              >
                <div className="accordion-body shipping">
                  <p className="mb-20">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference.
                  </p>
                  <ul>
                    <li>
                      <input type="radio" id="Cash" name="pay_info" defaultChecked />
                      <label className="ml-10" htmlFor="Cash">
                        Credit Card
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="Bank" name="pay_info" />
                      <label className="ml-10" htmlFor="Bank">
                        Direct Bank
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="Cheque" name="pay_info" />
                      <label className="ml-10" htmlFor="Cheque">
                        Cheque Payment
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="Paypal" name="pay_info" />
                      <label className="ml-10" htmlFor="Paypal">
                        PayPal
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="order-button-payment mt-20">
            <button type="submit" className="fill-btn">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSidebar;
