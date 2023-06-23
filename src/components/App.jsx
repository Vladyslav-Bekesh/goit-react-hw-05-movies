import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchTrending } from '../utils/fetch';

// PAGES
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Film from '../pages/Film';

// COMPONENTS
import SharedLayout from './SharedLayout';

export const App = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();
  
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

  const onFilmClick = id => {
    console.log(id);
    navigate(`/movies/${id}`);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home data={data} status={status} onFilmClick={onFilmClick} />
            }
          />

          <Route path="/movies" element={<Movies />}>
            <Route path=":movieId" element={<Film />}>
              <Route path="cast" element={<Film />} />
              <Route path="reviews" element={<Film />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
