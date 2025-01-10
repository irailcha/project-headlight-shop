import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import './Layout.scss';
import logo from '../../assets/images/logo.png';
import { TiMessages } from "react-icons/ti";


const Layout = () => {
  return (
    <div>
    <header className='header'>
      <a className='logo'>
        <img src={logo} alt='Logo' width={100}/>
      </a>
      <ul className='header__menu'>
      <li>
        <NavLink to="/" end>Головна</NavLink>
      </li>
      <li>
        <NavLink to="/store">Магазин</NavLink>
      </li>
      <li>
        <NavLink to="/messages"><TiMessages /></NavLink>
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
