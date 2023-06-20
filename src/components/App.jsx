import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchTrending } from '../utils/fetch';

// PAGES
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Film from '../pages/Film';

// COMPONENTS
import FilmList from './FilmList';
import SharedLayout from './SharedLayout';

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await searchTrending();
        setData(responseData);
      } catch (error) {
        console.error('Error occurred during API request:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="filmList" element={<FilmList films={data} />} />
          <Route path="filmList/:filmId" element={<Film />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:filmId" element={<Film />} />
        </Route>
      </Routes>
    </>
  );
};
