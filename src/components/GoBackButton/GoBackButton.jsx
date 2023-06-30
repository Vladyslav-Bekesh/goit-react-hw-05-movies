import React from 'react';
import { NavLink} from 'react-router-dom';

function GoBackButton({ to }) {
  return <NavLink to={to}>Back</NavLink>;
}

export default GoBackButton;
