import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeadlightPage.scss'; // Файл зі стилями для компонента
import { IoChevronBackSharp } from "react-icons/io5";


const HeadlightPage = ({ title, children }) => {
const navigate = useNavigate();

  return (
    <section className="headlight-section">
      <button className="btn-back" onClick={()=> navigate(-1)}> <IoChevronBackSharp/> Hа попередню</button>
      <h2>{title}</h2>
      <div className="headlight-section__content">
        {children}
      </div>
    </section>
  );
};

export default HeadlightPage;
