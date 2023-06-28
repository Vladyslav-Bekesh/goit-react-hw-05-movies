import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (
      location.pathname.includes('cast') ||
      location.pathname.includes('reviews')
    ) {
      console.log(location.pathname);
      navigate('goit-react-hw-05-movies/movies/');
      console.log(location.pathname);
    } else {
      window.history.back();
    }
  };

  return (
    <Link to="#" onClick={handleClick}>
      <button>Back</button>
    </Link>
  );
}

export default BackButton;
