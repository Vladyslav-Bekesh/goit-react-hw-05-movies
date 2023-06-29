import React from 'react';
import PropTypes from 'prop-types';
import { ImgAdress } from '../../utils/fetch';

function ActorsList({ actors }) {
  const makeImgSrc = img => {
    if (img) {
      return `${ImgAdress}${img}`;
    } else {
      return 'https://via.placeholder.com/300x450';
    }
  };

  return (
    <>
      <h2>Actors</h2>
      <ul>
        {actors.cast.map(({ character, original_name, profile_path, id }) => {
          return (
            <li key={id}>
              <img
                src={makeImgSrc(profile_path)}
                alt="here can be actor, but somethig go wrong)"
              />
              <p>Character: {character}</p>
              <p>Real name: {original_name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ActorsList.propTypes = {
  actors: PropTypes.object.isRequired,
};

export default ActorsList;
