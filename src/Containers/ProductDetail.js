import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeEelectedProduct,
} from "../Redux/actions/productActions";
import "./ProductDetail.css";
import Rating from "@material-ui/lab/Rating";
import CircularProgress from "@material-ui/core/CircularProgress";

function ProductDetail() {
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  // to dispatch
  const dispatch = useDispatch();

  //to get access to state
  const product = useSelector((state) => state.product);
  const { id, title, price, image, category, rating } = product;
  // const { rate, count } = rating;
  // console.log(rate);

  const fetchProductDetail = async () => {
    setLoading(true);
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        alert(err);
      });
    dispatch(selectedProduct(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetail();
    return () => {
      dispatch(removeEelectedProduct());
    };
  }, [productId]);

  return loading ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <div className="productDetail">
      <img src={image} alt="Image Not Found" className="productDetail__Image" />
      <div className="productDetail__border"></div>
      <div className="productDetail__title">{title}</div>
      {/* <div className="productDetail__rating">
        <Rating name="read-only" value={Math.round(rate)} readOnly />
        <span>({count})</span>
      </div> */}
      <div className="productDetail_bottom">
        <div className="productDetail__price">₹{price}/-</div>
        <div className="productDetail__category">{category}</div>
      </div>
      <div className="productDetail_Button">
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetail;
