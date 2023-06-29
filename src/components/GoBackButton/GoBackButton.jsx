import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    window.history.back();
  };

  return <button onClick={handleClick}>Back</button>;
}

export default BackButton;
