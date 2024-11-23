import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.min(Math.max(rating, 0), 5); // Ensure rating is between 0 and 5
  const emptyStars = 5 - fullStars;

  return (
    <div className="star-rating">
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} className="star full">★</span>
        ))}
      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} className="star empty">★</span>
        ))}
        <span className="rating-number">({rating.toFixed(1)})</span> {/* Display numeric rating */}

    </div>
  );
};

export default StarRating;
