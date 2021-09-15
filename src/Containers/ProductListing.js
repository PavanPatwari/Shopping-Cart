import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../Redux/actions/productActions";
import "./ProductListing.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products ", products);

  return (
    <div className="productListing">
      {loading ? (
        <div>
          <CircularProgress className="loading" /> loading...please wait
        </div>
      ) : (
        <Product />
      )}
    </div>
  );
}

export default ProductListing;
