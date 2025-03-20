import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import './Layout.scss';
import logo from '../../assets/images/logo.png';
import {FaPhoneAlt } from 'react-icons/fa';
import Footer from '../Footer/Footer';


const Layout = () => {
  return (
    <div>
    <header className='header'>
<Link to="/" className="logo">
  <img src={logo} alt="Logo" width={100} />
</Link>
         <ul className='header__contacts'>
              <li><a href="tel:+380632327368" aria-label="Подзвонити по номеру +380632327368"
              className='header__contacts-item'><FaPhoneAlt /> +380632327368</a></li>
              <li><a href="tel:+380970019526" aria-label="Подзвонити по номеру +380970019526"
              className='header__contacts-item'><FaPhoneAlt /> +380970019526</a></li>
            </ul>
      
    </header>
      <main>
      <Suspense fallback={<p>Loading....</p>}>
        <Outlet />
        </Suspense>
      </main>
      <footer>
       <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
