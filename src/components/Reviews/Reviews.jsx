import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchReviews } from '../../utils/fetch';

import ReviewsList from '../ReviewsList';


function Reviews({ reviews }) {
  const [data, setData] = useState();
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');

    const fetchData = async () => {
      try {
        const responseData = await searchReviews(movieId);

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
      {status === 'done' && <ReviewsList reviews={data}/>}
    </>
  );
}

// Reviews.propTypes = {

// }

export default Reviews;
