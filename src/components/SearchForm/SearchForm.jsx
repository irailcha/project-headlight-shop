import React from "react";
import { useSearchParams } from "react-router-dom";
import './SearchForm.scss';


const SearchForm=({onSearch})=>{
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue=searchParams.get('search') || "";

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchParams({ ...Object.fromEntries(searchParams.entries()), search: value });
    onSearch(e.target.value);
  };

  return(
    <div className="search">

      <input 
      className="search__form"
      onChange={handleChange}
      value={searchValue} 
      type="text" 
      placeholder="Що шукаєте?"/>
    </div>
  )
}

export default SearchForm;