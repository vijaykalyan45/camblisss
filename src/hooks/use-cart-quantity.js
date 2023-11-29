import { useSelector } from "react-redux";

export const useUniqueProductCount = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const uniqueProductIds = new Set();
  cartProducts.forEach((product) => uniqueProductIds.add(product._id));
  return uniqueProductIds.size;
};
