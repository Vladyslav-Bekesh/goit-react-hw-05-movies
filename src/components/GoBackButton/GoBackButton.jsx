import React from 'react';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link to="#" onClick={() => window.history.back()}>
      <button>Back</button>
    </Link>
  );
}

export default BackButton;
