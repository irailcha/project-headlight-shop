import React from "react";
import { Link } from "react-router";
import './MainPoster.scss';

const MainPoster=()=>{


  return (
    <div className="main">
      <section className="section">
        <div className="main__block">
      <h1 className="main__title"><span>AvtoGalogen</span> <br/> Фари, що ведуть вас вперед</h1>
      <p className="main__description">Якісні б/у фари за доступними цінами</p>
  <Link to="/store" className="main__button">Перейти до магазину</Link>
  </div>
  </section>
    </div>
  );
}


export default MainPoster;