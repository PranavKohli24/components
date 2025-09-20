import React from "react";

const ListingCard = ({ image, title, location, price }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      width: "250px",
      overflow: "hidden",
      fontFamily: "sans-serif",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={image} 
        alt={title} 
        style={{ width: "100%", height: "160px", objectFit: "cover" }} 
      />
      <div style={{ padding: "12px" }}>
        <h3 style={{ margin: "0 0 6px 0", fontSize: "16px" }}>{title}</h3>
        <p style={{ margin: "0 0 8px 0", color: "#555", fontSize: "14px" }}>
          {location}
        </p>
        <p style={{ margin: "0", fontWeight: "bold" }}>Price: ${price} / night</p>
      </div>
    </div>
  );
};


export default ListingCard;
