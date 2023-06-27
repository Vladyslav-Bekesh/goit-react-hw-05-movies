import React from 'react';
import PropTypes from 'prop-types';
import { ImgAdress } from '../../utils/fetch';

function ActorsList({ actors }) {
  return (
    <>
      <h2>Actors</h2>
      <ul>
        {actors.cast.map(({ character, original_name, profile_path, id }) => {
          const img = `${ImgAdress}${profile_path}`;

          return (
            <li key={id}>
              <img src={img} alt="here can be actor, but he won`t take a pic)" />
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
