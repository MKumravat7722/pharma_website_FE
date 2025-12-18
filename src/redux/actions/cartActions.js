import axios from "axios";
import {
  fetchCartBegin,
  fetchCartSuccess,
  fetchCartFailure,
  addToCartBegin,
  addToCartSuccess,
  addToCartFailure,
} from "../slices/cartSlice";

const BASE_API_URL = "http://localhost:3000/api/v1";

export const fetchCart = () => {
  return async (dispatch) => {
    dispatch(fetchCartBegin());
    try {
      const response = await axios.get(`${BASE_API_URL}/cart`);
      dispatch(fetchCartSuccess(response.data));
    } catch (error) {
      dispatch(
        fetchCartFailure(
          error.response?.data?.message || "Failed to fetch cart"
        )
      );
    }
  };
};

export const addToCart = (productId) => {
  return async (dispatch) => {
    dispatch(addToCartBegin());
    try {
      const response = await axios.post(
        `${BASE_API_URL}/cart/add_item`,
        { product_id: productId }
      );
      dispatch(addToCartSuccess(response.data));
    } catch (error) {
      dispatch(
        addToCartFailure(
          error.response?.data?.message || "Failed to add to cart"
        )
      );
    }
  };
};
