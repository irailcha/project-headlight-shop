import React from "react";
import Headlights from "../../components/Headlights/HeadLights";
import SearchForm from "../../components/SearchForm/SearchForm";
import SortingForm from "../../components/SortingForm/SortingForm";
import './Store.scss';

const Store = () => {
 
  return (
    <section>
  <div className="store__block">
<SearchForm/>
<SortingForm/>
</div>
   <Headlights/>
    </section>
  );
};

export default Store;
