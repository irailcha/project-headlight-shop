import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import './Loader.scss';

const Loader=()=>{


  return(
    <div className="loader">
    <InfinitySpin
    visible={true}
    width="200"
    color="#dee2e6"
    ariaLabel="infinity-spin-loading"
    />
    </div>)
}

export default Loader;