import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';

import { ImgAdress } from '../../utils/fetch';


function FilmCard({ data }) {
  const { original_title, vote_average, overview, poster_path, genres } = data;
  
  function makeGenresString(genres) {
    return genres
      .map(({ name }) => {
        return name;
      })
      .join(', ');
  }

  const makeImgSrc = img => {
    if (img) {
      return `${ImgAdress}${img}`;
    } else {
      return 'https://via.placeholder.com/400x550';
    }
  };
  
  return (
    <>
      <div>
        <p>
          <strong>Title:</strong> {original_title}
        </p>
        <p>
          <strong>Rating:</strong> {vote_average.toFixed(1)}
        </p>
        <p>
          <strong>Overview:</strong> {overview}
        </p>
        <p>
          <strong>Genres:</strong> {makeGenresString(genres)}
        </p>
        <img src={makeImgSrc(poster_path)} alt={original_title} />
      </div>
      <ul>
        <li>
          <NavLink to="cast">Actors</NavLink>
        </li>

        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

FilmCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FilmCard;
