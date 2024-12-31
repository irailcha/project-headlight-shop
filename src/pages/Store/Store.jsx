import React, { useState } from "react";
import Headlights from "../../components/Headlights/HeadLights";
import SearchForm from "../../components/SearchForm/SearchForm";
import './Store.scss';

const Store = () => {
const [query, setQuery]=useState('');
  return (
    <section>
  <div className="store__block">
<SearchForm onSearch={setQuery}/>
</div>
   <Headlights query={query}/>
    </section>
  );
};

export default Store;
