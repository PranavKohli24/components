import React from "react";

const ProductCard = ({ image, name, price, stock }) => {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "10px",
      width: "250px",
      overflow: "hidden",
      fontFamily: "sans-serif",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100%", height: "160px", objectFit: "cover" }}
      />
      <div style={{ padding: "12px" }}>
        <h4 style={{ margin: "0 0 6px 0", fontSize: "16px" }}>Name: {name}</h4>
        <p style={{ margin: "0 0 8px 0", color: "#555", fontSize: "14px" }}>
          ${price}
        </p>
        <p style={{ margin: "0", color: stock > 0 ? "green" : "red", fontSize: "14px" }}>
          {stock > 0 ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
