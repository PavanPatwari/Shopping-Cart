import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Product.css";
// import Button from "@material-ui/core/Button";

function Product() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link
        to={`/Shopping-Cart/product/${id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="product" key={id}>
          <div className="card">
            <img src={image} alt="Img Not found" className="product__Image" />
            <div className="product__imgBottom"></div>
            <div className="card__title">{title}</div>
            <div className="card_bottom">
              <div className="card__price">₹{price}/-</div>
              <div className="card__category">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return <div className="product__list">{renderList}</div>;
}

export default Product;
