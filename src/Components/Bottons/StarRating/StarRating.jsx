import React from "react";
import { FaStar } from "react-icons/fa";
import './StarRating.css'

const StarRating = ({ rating }) => {
  const totalStars = 1;

  return (
    <div style={{ display: "flex", alignItems: "center" }} className="star-ratings">
      <div style={{ marginRight: "2px" }}>
        {[...Array(totalStars)].map((star, index) => {
          const filled = index < rating;
          return (
            <FaStar
              key={index}
              color={filled ? "#FFD166" : "black"}
              size={18}
              style={{position:"relative",top:"-2px"}}
            />
          );
        })}
      </div>
      <span style={{ fontSize: "1.1rem", fontWeight: "bold", color: "black" }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
