import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../Redux/actions/productActions";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products ", products);

  return (
    <div>
      <Product />
    </div>
  );
}

export default ProductListing;
