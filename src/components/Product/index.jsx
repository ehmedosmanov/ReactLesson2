import React from "react";

const Product = ({image, title, price, rating }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{rating.count}</p>
      <span>{price}</span>
    </div>
  );
};

export default Product;
