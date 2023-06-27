import React from 'react';
import PropTypes from 'prop-types';

function ReviewsList({ reviews }) {
  if (reviews.results.length === 0) {
    return <h2>No reviews</h2>;
  } else {
    return (
      <ul>
        {reviews.results.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <span>{content}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.object.isRequired,
};

export default ReviewsList;
