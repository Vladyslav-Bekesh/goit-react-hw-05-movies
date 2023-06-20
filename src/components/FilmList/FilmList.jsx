import React from 'react'
import PropTypes from 'prop-types'



function FilmList({ films }) {
  console.log(films);
  
  if (films) {
    return (
      <ul>
        {films.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <p>1</p>
            </li>
          );
        })}
      </ul>
    );
  } else {return <h2>I don`t know what happened</h2>}
  
  
}

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmList

