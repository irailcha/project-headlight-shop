import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Headlights from "../../components/Headlights/Headlights";
import SearchForm from "../../components/SearchForm/SearchForm";
import { IoChevronBackSharp } from "react-icons/io5";
import './Store.scss';

const Store = () => {
  const navigate = useNavigate();
const [query, setQuery]=useState('');
  return (
    <>
      <button className="btn-back" onClick={()=> navigate('/')}><IoChevronBackSharp /> Hа головну</button>
    <section className="store">

  <div className="store__block">
<SearchForm onSearch={setQuery}/>

          <Headlights query={query} />

          </div>
      </section>
      </>
  );
};

export default Store;
