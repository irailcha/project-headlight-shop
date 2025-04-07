import React from "react";
import { NavLink } from "react-router-dom";
import './Content.scss';
import design_1_jpg_small from '../../assets/images/design_1_150.jpg';
import design_1_jpg_large from '../../assets/images/design_1_300.jpg';
import design_1_webp_small from '../../assets/images/design_1_150.webp';
import design_1_webp_large from '../../assets/images/design_1_300.webp';

import design_2_jpg_small from '../../assets/images/design_2_150.jpg';
import design_2_jpg_large from '../../assets/images/design_2_300.jpg';
import design_2_webp_small from '../../assets/images/design_2_150.webp';
import design_2_webp_large from '../../assets/images/design_2_300.webp';

import design_3_jpg_small from '../../assets/images/design_3_150.jpg';
import design_3_jpg_large from '../../assets/images/design_3_300.jpg';
import design_3_webp_small from '../../assets/images/design_3_150.webp';
import design_3_webp_large from '../../assets/images/design_3_300.webp';

import design_4_jpg_small from '../../assets/images/design_4_150.jpg';
import design_4_jpg_large from '../../assets/images/design_4_300.jpg';
import design_4_webp_small from '../../assets/images/design_4_150.webp';
import design_4_webp_large from '../../assets/images/design_4_300.webp';

const Content = () => {
  const links = [
    {
      to: "/about",
      
      label: "Про нас",
      jpgSmall: design_1_jpg_small,
      jpgLarge: design_1_jpg_large,
      webpSmall: design_1_webp_small,
      webpLarge: design_1_webp_large,
    },
    {
      to: "/store",
      label: "Магазин",
      jpgSmall: design_2_jpg_small,
      jpgLarge: design_2_jpg_large,
      webpSmall: design_2_webp_small,
      webpLarge: design_2_webp_large,
    },
    {
      to: "/helper",
      label: "Довідник",
      jpgSmall: design_3_jpg_small,
      jpgLarge: design_3_jpg_large,
      webpSmall: design_3_webp_small,
      webpLarge: design_3_webp_large,
    },
    {
      to: "/reviews",
      label: "Відгуки",
      jpgSmall: design_4_jpg_small,
      jpgLarge: design_4_jpg_large,
      webpSmall: design_4_webp_small,
      webpLarge: design_4_webp_large,
    },
  ];

  return (
    <section>
      <ul className="content">
        {links.map((link, index) => (
          <li key={index} className="content__thumb">
                        <NavLink to={link.to}>
            <picture>
              <source
                type="image/webp"
                media="(max-width: 768px)"
                srcSet={link.webpSmall}
                
              />
              <source
                type="image/webp"
                media="(min-width: 769px)"
                srcSet={link.webpLarge}
              />
              <source
                type="image/jpeg"
                media="(max-width: 768px)"
                srcSet={link.jpgSmall}
              />
              <source
                type="image/jpeg"
                media="(min-width: 769px)"
                srcSet={link.jpgLarge}
              />
              <img
                className="content__img"
                src={link.jpgSmall} 
                alt={link.label}
                 width={300}  
                  height={300}
                  area={link.label} 
              />
            </picture>
              <h3 className="content__label" >
                {link.label}
                </h3>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Content;
