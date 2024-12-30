import React, { useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './SimpleLightBox.scss';

const SimpleLightBox = ({ photo }) => {
  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'title',
      captionDelay: 250,
    });

    const observer = new MutationObserver(() => {
      const overlay = document.querySelector('.sl-overlay');
      if (overlay) {
        overlay.style.setProperty('background-color', 'rgba(0, 0, 0, 0.7)', 'important');
      }

      const wrapper = document.querySelector('.sl-wrapper');
      if (wrapper) {
        wrapper.style.setProperty('background-color', 'rgba(0, 0, 0, 0.9)', 'important');
      }

      const closeButton = document.querySelector('.sl-close');
      if (closeButton) {
        closeButton.style.setProperty('color', '#fff', 'important');
      }

      const prevButton = document.querySelector('.sl-prev');
      if (prevButton) {
        prevButton.style.setProperty('color', '#fff', 'important');
      }

      const nextButton = document.querySelector('.sl-next');
      if (nextButton) {
        nextButton.style.setProperty('color', '#fff', 'important');
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      lightbox.destroy();
    };
  }, []);

  const getImageUrl = (baseUrl, width) => {
    return baseUrl.replace('/upload/', `/upload/w_${width}/`);
  };

  const isMobile = window.innerWidth <= 768;

  // Перевірка та фільтрація фото
  const validPhotos = Array.isArray(photo) ? photo.filter(item => typeof item === 'string' && item.trim() !== '') : [];

  if (validPhotos.length === 0) {
    return <p>Фото відсутні</p>;
  }

  return (
        <ul className="gallery">
          {validPhotos.map((item, index) => (
            <li className="gallery__item" key={index}>
              <a href={getImageUrl(item, isMobile ? 300 : 1200)}>
                <img
                className="gallery__img"
                  src={getImageUrl(item, isMobile ? 100 : 165)}
                  alt={`Фото ${index + 1}`}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>


  );
};

export default SimpleLightBox;
