import React from 'react';
import Review from './Review';

const LogShow = ({ id, averageRating, title, reviews }) => {
  let logReviews = reviews.map(review => {
    return(
      <Review
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
      />
    )
  })

  return(
    <div className="log">
      <h2>{title}</h2>
      Average Rating: {averageRating}
      <div>
        {logReviews}
      </div>
    </div>
  )
}

export default LogShow;
