import React from "react";

const Product = ({ title, price, rating }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{rating}</p>
      <span>{price}</span>
    </div>
  );
};

export default Product;
