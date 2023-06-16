import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';

export const App = () => {
  return (
    <>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
