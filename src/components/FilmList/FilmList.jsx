import React from 'react';
import PropTypes from 'prop-types';

function FilmList({ films, onFilmClick }) {
  return (
    <ul>
      {films.map(({ id, original_title }) => {
        return (
          <li key={id} onClick={()=>{onFilmClick(id);}}>
            <p>{original_title}</p>
          </li>
        );
      })}
    </ul>
  );
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmList;
