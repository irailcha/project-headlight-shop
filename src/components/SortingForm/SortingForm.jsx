import React from "react";
import './SortingForm.scss';

const SortingForm=()=>{

  return(
    <div>
      <form>
        <label htmlFor="sort-by">Сортувати за: </label>
        <select id="sort-by">
          <option value="date">номером деталі</option>
          <option value="price">ціною</option>
          <option value="rating">маркою авто</option>
        </select>
      </form>
    </div>
  )
}

export default SortingForm;