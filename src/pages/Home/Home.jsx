import React from 'react'

import FilmList from '../../components/FilmList';
import Loader from '../../components/Loader';
import GoBackButton from '../../components/GoBackButton';


function Home({ data, status, onFilmClick }) {
  return (
    <>
      <GoBackButton />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>error</h2>}
      {status === 'done' && (
        <>
          <h1>Trendigs today</h1>
          <FilmList films={data} onFilmClick={onFilmClick} />
        </>
      )}
    </>
  );
}

export default Home;


