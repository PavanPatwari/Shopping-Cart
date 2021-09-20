import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { setProducts, fetchProducts } from "../Redux/actions/productActions";
import "./ProductListing.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import CategoriesDropdown from "./CategoriesDropdown";
import AddNewProduct from "./AddNewProduct";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="productListing">
      <CategoriesDropdown />
      <AddNewProduct />
      {loading ? (
        <div className="loadingSpinner">
          <CircularProgress className="loading" /> <p>loading...please wait</p>
        </div>
      ) : (
        <Product />
      )}
    </div>
  );
}

export default ProductListing;
