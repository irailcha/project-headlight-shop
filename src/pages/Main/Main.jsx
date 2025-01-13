import React from "react";
import './Main.scss';
import MainPoster from "../../components/MainPoster/MainPoster";
import Content from "../../components/Content/Content";

const Main=()=>{


  return(
  <div className="main-page">
    <MainPoster/>
    <Content/>
  </div>
  )
}

export default Main;