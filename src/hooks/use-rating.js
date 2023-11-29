
import React from 'react';

const GetRating = ({ averageRating }) => {
  const getRating = (ratingsNum) => {
    const roundedRatings = Math.floor(ratingsNum);
    const isHalfStar = ratingsNum % 1 !== 0;
    
    const emptyRatingCount = 5 - roundedRatings - (isHalfStar ? 1 : 0);
    const ratings = [];

    for (let i = 0; i < roundedRatings; i++) {
      ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>);
    }

    if (isHalfStar) {
      ratings.push(<i className="fas fa-star-half-alt" key="half-star"></i>);
    }

    for (let i = 0; i < emptyRatingCount; i++) {
      ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>);
    }

    return ratings;
  };

  return (
    <div>
      {getRating(averageRating)}
    </div>
  );
};

export default GetRating;