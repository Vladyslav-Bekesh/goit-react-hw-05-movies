import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { searchById } from '../../utils/fetch';
import GoBackButton from '../../components/GoBackButton';
import Loader from '../../components/Loader';
import FilmCard from '../../components/FilmCard';

function Film() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      setStatus('pending');
      try {
        const responseData = await searchById(id);

        setData(responseData);
        setStatus('done');
      } catch (error) {
        setStatus('rejected');
        console.error('Error occurred during API request:', error);
      }
    };

    fetchData(movieId);
  }, [movieId]);

  return (
    <>
      <GoBackButton />
      {status === 'pending' && <Loader/>}
      {status === 'rejected' && <h2>error</h2>}
      {status === 'done' && (
        <>
          <FilmCard data={data} />
          <NavLink></NavLink>
        </>
      )}
    </>
  );
}

export default Film;
