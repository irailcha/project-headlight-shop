import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import './Layout.scss';

const Layout = () => {
  return (
    <div>
    <header className='header'>
      <ul className='header__menu'>
      <li>
        <NavLink to="/" end>Головна</NavLink>
      </li>
      <li>
        <NavLink to="/store">Магазин</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Профіль</NavLink>
      </li>
      </ul>
    </header>
      <main>
      <Suspense fallback={<p>Loading....</p>}>
        <Outlet />
        </Suspense>
      </main>
      <footer>
        {/* Футер */}
      </footer>
    </div>
  );
};

export default Layout;
