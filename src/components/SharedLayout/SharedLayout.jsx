import { Outlet, NavLink } from 'react-router-dom';

 function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default SharedLayout;