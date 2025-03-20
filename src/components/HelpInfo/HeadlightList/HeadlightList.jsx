import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeadlightList.scss';


const HeadlightList = ({ headlights }) => (
  <ul className="headlight-list">
    {headlights.map(({ title, link }) => (
      <li key={title} className="headlight-list__item">
        <NavLink to={link} className="headlight-list__link">
        <h4 className="headlight-list__title">{title}</h4>
        </NavLink>
      </li>
    ))}
  </ul>
);

export default HeadlightList;
