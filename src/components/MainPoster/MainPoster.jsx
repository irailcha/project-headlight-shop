import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import "./MainPoster.scss";
import main_2 from "../../assets/images/main_2_300.jpg";
import main_4 from "../../assets/images/main_4_300.jpg";
import main_2_webp from "../../assets/images/main_2_300.webp";
import main_4_webp from "../../assets/images/main_4_300.webp";

const images = [main_2, main_4];
const imagesWebp = [main_2_webp, main_4_webp];

const randomPosition = () => ({ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100, opacity: 0 });

const MainPoster = () => {
  return (
    <div className="main">
        <div className="main__block">
          <h1 className="main__title">
            <span>AvtoGalogen</span> <br /> Фари, що ведуть вас вперед
          </h1>
          <p className="main__description">Якісні б/у фари за доступними цінами</p>
          <Link to="/store" className="main__button">
            Store
          </Link>
        </div>
        <div className="main__images">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={randomPosition()}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: index * 0.3 }}
            >
              <picture>
                <source srcSet={imagesWebp[index]} type="image/webp" />
                <img
                  src={img}
                  width={300}
                  height={400}
                  area="main"
                  className="main__image"
                  alt={`Main poster ${index + 1}`}
                />
              </picture>
            </motion.div>
          ))}
        </div>
    </div>
  );
};

export default MainPoster;
