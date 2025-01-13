import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Headlights from "../../components/Headlights/HeadLights";
import SearchForm from "../../components/SearchForm/SearchForm";
import './Store.scss';

const Store = () => {
  const navigate = useNavigate();
const [query, setQuery]=useState('');
  return (
    <section>

  <div className="store__block">
  <button onClick={()=> navigate('/')}>Назад на головну</button>
<SearchForm onSearch={setQuery}/>
</div>
   <Headlights query={query}/>
    </section>
  );
};

export default Store;
