import api from "../../APIs/api";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await api.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const getCategories = () => async (dispatch) => {
  const response = await api.get("/products/categories");
  dispatch({ type: ActionTypes.GET_CATEGORIES, payload: response.data });
};

export const getProductsByCategory = (category) => async (dispatch) => {
  const response = await api.get(`/products/category/${category}`);
  dispatch({
    type: ActionTypes.GET_PRODUCTS_BY_CATEGORIES,
    payload: response.data,
  });
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeEelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
