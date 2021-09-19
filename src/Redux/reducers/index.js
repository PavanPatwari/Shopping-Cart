import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  getCategoriesReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  categories: getCategoriesReducer,
});

export default reducers;
