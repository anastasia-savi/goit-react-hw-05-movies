import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from '../Layout/Layout.module.css';

const Layout = () => {
  return (
    <div>
      <ul className={css.header}>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? `${css.active}` : 'none')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? `${css.active}` : 'none')}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
