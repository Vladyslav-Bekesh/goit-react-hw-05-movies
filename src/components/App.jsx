import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { searchTrending } from '../utils/fetch';

import SharedLayout from './SharedLayout';
// PAGES;

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Film = lazy(() => import('../pages/Film'));
const Actors = lazy(() => import('./Actors'));
const Reviews = lazy(() => import('./Reviews'));

// COMPONENTS

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
