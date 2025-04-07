import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "./Reviews.scss";
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios.get("https://backend-headlight-shop.vercel.app/api/reviews")
      .then(res => {
        const placedImages = [];
        const imageSize = isMobile ? 100 : 180;
        const padding = 15;
        const maxAttempts = 200;

        const getRandomPosition = () => {
          let attempt = 0;
          let position;
          do {
            position = {
              x: Math.random() * (window.innerWidth - imageSize - padding),
              y: Math.random() * (window.innerHeight - imageSize - padding)
            };
            attempt++;
          } while (
            placedImages.some(img =>
              Math.abs(img.x - position.x) < imageSize + padding &&
              Math.abs(img.y - position.y) < imageSize + padding
            ) && attempt < maxAttempts
          );
          return position;
        };

        setImages(
          res.data.map(img => {
            const position = isMobile ? {} : getRandomPosition();
            if (!isMobile) placedImages.push(position);
            return { url: img, ...position };
          })
        );
      })
      .catch(err => console.error("Помилка отримання зображень", err));
  }, [isMobile]);

  return (
    <>
      <button className="btn-back" onClick={() => navigate('/')}>
        <IoChevronBackSharp /> Hа головну
      </button>

      <div className="reviews">
        <h2 className="reviews__title">Відгуки користувачів</h2>
        <div className={`reviews__list ${isMobile ? "mobile" : ""}`}>
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img.url}
              alt="Review Screenshot"
              className="review-img"
              onClick={() => setSelectedImage(img.url)}
              width={isMobile ? "100%" : 180}
              style={
                isMobile
                  ? {}
                  : { position: "absolute", left: img.x, top: img.y }
              }
              animate={isMobile ? {} : { rotate: [0, 1, -1, 0] }}
              transition={
                isMobile
                  ? {}
                  : {
                      rotate: { repeat: Infinity, duration: 2, repeatType: "mirror" }
                    }
              }
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Selected Review"
                className="modal-img"
                initial={{ scale: 0.5, y: 100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, y: 100 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Reviews;
