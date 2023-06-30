import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../../components/SearchForm';
import Loader from '../../components/Loader';
import FilmList from '../../components/FilmList';
import { searchMovies } from '../../utils/fetch';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const fetchData = async querry => {
      setStatus('pending');

      try {
        const { results } = await searchMovies(querry);
        if (results.length === 0) {
          setStatus('empty');
        } else {
          setData(results);
          setStatus('done');  
        }
      } catch (error) {
        setStatus('rejected');
        console.error('Error occurred during API request:', error);
      }
    };

    if (searchParams.get('query') !== null) {
      fetchData(searchParams.get('query'));
    }
  }, [searchParams]);

  return (
    <>
      <SearchForm
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>error</h2>}
      {status === 'empty' && <h2>¯\_(ツ)_/¯</h2>}
      {status === 'done' && <FilmList films={data}></FilmList>}
    </>
  );
}

export default Movies;
