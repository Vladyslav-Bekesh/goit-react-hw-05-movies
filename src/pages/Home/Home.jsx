import React from 'react'

import FilmList from '../../components/FilmList';

function Home({ data, status, onFilmClick }) {
  return (
    <>
      {status === 'pending' && <h2>loading</h2>}
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


