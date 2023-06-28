import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import GoBackButton from '../../components/GoBackButton';
function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <GoBackButton />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default SharedLayout;
