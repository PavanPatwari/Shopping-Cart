// import { setProducts } from "../actions/productActions";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  categories: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.GET_PRODUCTS_BY_CATEGORIES:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const getCategoriesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GET_CATEGORIES:
      return { ...state, categories: payload };

    default:
      return state;
  }
};
