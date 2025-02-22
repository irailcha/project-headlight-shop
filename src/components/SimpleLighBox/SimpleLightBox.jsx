import React, { useEffect, useRef } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './SimpleLightBox.scss';

const SimpleLightBox = ({ photo }) => {
  const galleryRef = useRef(null);

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

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const validPhotos = Array.isArray(photo) ? photo.filter(item => typeof item === 'string' && item.trim() !== '') : [];

  if (validPhotos.length === 0) {
    return <p>Фото відсутні</p>;
  }

  return (
  <div className='gallery-container'>
     <button className="gallery-button left" onClick={() => scrollGallery('left')}>&lt;</button>
     <ul className="gallery" ref={galleryRef}>
          {validPhotos.map((item, index) => (
            <li className="gallery__item" key={index}>
              <a href={getImageUrl(item, isMobile ? 1000 : 1200)}>
                <img
                className="gallery__img"
                  src={getImageUrl(item, isMobile ? 100 : 160)}
                  alt={`Фото ${index + 1}`}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
        <button className="gallery-button right" onClick={() => scrollGallery('right')}>&gt;</button>
  </div>

  );
};

export default SimpleLightBox;
