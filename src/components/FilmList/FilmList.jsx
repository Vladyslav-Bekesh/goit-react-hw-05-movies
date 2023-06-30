import React from 'react';
import PropTypes from 'prop-types';
import {  Link, useLocation } from 'react-router-dom';

function FilmList({ films }) {
  const location = useLocation();

  if (films.length !== 0) {
    return (
      <ul>
        {films.map(({ id, original_title }) => {
          return (
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p>{original_title}</p>
            </Link>
          );
        })}
      </ul>
    );
  } else {
    return;
  }
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmList;
