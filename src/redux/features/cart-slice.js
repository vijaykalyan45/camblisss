import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cart_product: (state, { payload }) => {
      const productIndex = state.cartProducts.findIndex(
        (item) => item._id === payload._id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].quantity += 1;
        toast.info("Increase Product Quantity", {
          position: "top-left",
        });
      } else {
        const tempProduct = { ...payload, quantity: 1 };
        state.cartProducts.push(tempProduct);
        toast.success(`${payload.title} added to cart`, {
          position: "top-left",
        });
      }
    },
    remove_cart_product: (state, { payload }) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item._id !== payload._id
      );
      toast.error(`Remove from your cart`, {
        position: "top-left",
      });
    },

    clear_cart: (state) => {
      const confirmMsg = window.confirm(
        "Are you sure deleted your all cart items ?"
      );
      if (confirmMsg) {
        state.cartProducts = [];
      }
    },

    decrease_quantity: (state, { payload }) => {
      const cartIndex = state.cartProducts.findIndex(
        (item) => item._id === payload._id
      );
      if (cartIndex >= 0 && state.cartProducts[cartIndex].quantity) {
        state.cartProducts[cartIndex].quantity -= 1;
        toast.error(`Decrease cart quantity`, {
          position: "top-left",
        });
      }
    },
  },
});

export const {
  cart_product,
  remove_cart_product,
  clear_cart,
  decrease_quantity,
} = cartSlice.actions;

export default cartSlice.reducer;
