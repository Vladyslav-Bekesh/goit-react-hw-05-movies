import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


function FilmList({ films }) {
  const navigate = useNavigate();


  const onFilmClick = id => {
    navigate(`/movies/${id}`);
  };

  if (films.length !==0) { return (
    <ul>
      {films.map(({ id, original_title }) => {
        return (
          <li
            key={id}
            onClick={() => {
              onFilmClick(id);
            }}
          >
            <p>{original_title}</p>
          </li>
        );
      })}
    </ul>
  )} else {return }
  
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmList;
