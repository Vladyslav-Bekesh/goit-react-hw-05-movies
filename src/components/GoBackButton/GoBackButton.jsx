import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function BackButton({ to }) {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return <NavLink to={backLinkHref.current}>Back</NavLink>;
}

export default BackButton;
