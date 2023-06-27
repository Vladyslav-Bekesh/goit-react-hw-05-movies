import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchTrending } from '../utils/fetch';

// PAGES
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Film from '../pages/Film';
import Actors from './Actors';
import Reviews from './Reviews';

// COMPONENTS
import SharedLayout from './SharedLayout';

export const App = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    const fetchData = async () => {
      try {
        const responseData = await searchTrending();

        setData(responseData);
        setStatus('done');
      } catch (error) {
        setStatus('rejected');
        console.error('Error occurred during API request:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home data={data} status={status} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Film />}>
            <Route path="cast" element={<Actors />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
