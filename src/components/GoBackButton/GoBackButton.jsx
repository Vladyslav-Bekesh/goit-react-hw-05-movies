import React from 'react';
import { NavLink} from 'react-router-dom';

function BackButton({ to }) {
  return <NavLink to={to}>Back</NavLink>;
}

export default BackButton;
