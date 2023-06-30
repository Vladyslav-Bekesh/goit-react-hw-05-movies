import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { searchById } from '../../utils/fetch';
import Loader from '../../components/Loader';
import FilmCard from '../../components/FilmCard';
import GoBackButton from '../../components/GoBackButton';

function Film() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  console.log('backLinkHref:', backLinkHref);
  console.log(location);

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
      <GoBackButton to={backLinkHref.current} />

      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>error</h2>}
      {status === 'done' && (
        <>
          <FilmCard data={data} />
        </>
      )}
    </>
  );
}

export default Film;
