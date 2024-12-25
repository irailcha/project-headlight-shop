import React from "react";
import { NavLink } from "react-router-dom";
import './Content.scss';
import design_1 from '../../assets/images/design_1.jpg';
import design_2 from '../../assets/images/design_2.jpg';
import design_3 from '../../assets/images/design_3.jpg';
import design_4 from '../../assets/images/design_4.jpg';


const Content=()=>{


  const links = [
    { to: "/about", img: design_1, label: "Про нас" },
    { to: "/store", img: design_2, label: "Магазин" },
    { to: "/contacts", img: design_3, label: "Контакти" },
    { to: "/reviews", img: design_4, label: "Відгуки" },
  ];
  
  return (
    <section>
      <ul className="content">
        {links.map((link, index) => (
          <li key={index} className="content__thumb">
            <img className="content__img" src={link.img} alt={link.label} width={250} />
            <NavLink className="content__label" to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
  
}


export default Content;