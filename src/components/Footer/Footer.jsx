import React from 'react';
import './Footer.scss';
import { FaViber, FaTelegram, FaPhoneAlt } from 'react-icons/fa';

const Footer =()=>{


  return(
    <div className='footer'>
   <ul className='footer__contacts'>
      <li><a href="viber://chat?number=%2B380970019526" 
      aria-label="Зв'язатися через Viber" 
      target="_blank" 
      rel="noopener noreferrer"
      className='footer__contacts-item'
      ><FaViber /> Viber</a></li>
        <li><a href="https://t.me/" 
        aria-label="Зв'язатися через Telegram" 
        target="_blank" 
        rel="noopener noreferrer"
        className='footer__contacts-item'
        ><FaTelegram/> Telegram</a></li>
        <li><a href="tel:+380632327368" aria-label="Подзвонити по номеру +380632327368"
        className='footer__contacts-item'><FaPhoneAlt /> +380632327368</a></li>
        <li><a href="tel:+380970019526" aria-label="Подзвонити по номеру +380970019526"
        className='footer__contacts-item'><FaPhoneAlt /> +380970019526</a></li>
      </ul>

      <p className='footer__copyright'>Copyright © 2025 Headlight Shop. All rights reserved.</p>

    </div>
  )
}

export default Footer;