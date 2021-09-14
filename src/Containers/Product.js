import React from "react";
import { useSelector } from "react-redux";
import "./Product.css";

function Product() {
  const products = useSelector((state) => state.allProducts.products);
  //   const { id, title } = products[0];

  return (
    <div>
      <h1>Product component</h1>
      <div className="card">
        {/* <div className="card__title">{title}</div> */}
        <img src="" alt="Img" />
      </div>
    </div>
  );
}

export default Product;
