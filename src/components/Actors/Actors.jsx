import React, { useEffect, useState } from 'react';
import { searchCredits } from '../../utils/fetch';
import { useParams } from 'react-router-dom';

import ActorsList from '../ActorsList';

function Actors() {
  const [data, setData] = useState();
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');

    const fetchData = async () => {
      try {
        const responseData = await searchCredits(movieId);

        setData(responseData);

        setStatus('done');
      } catch (error) {
        setStatus('rejected');
        console.error('Error occurred during API request:', error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <h2>loading</h2>}
      {status === 'rejected' && <h2>error</h2>}
      {status === 'done' && <ActorsList actors={data} />}
    </>
  );
}

export default Actors;
