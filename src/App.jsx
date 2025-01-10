import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const Messages=React.lazy(() => import('./pages/Messages/Messages'));
const Main=React.lazy(() => import('./pages/Main/Main'));
const Store=React.lazy(() => import('./pages/Store/Store'));
const InfoHeadlight=React.lazy(() => import('./components/InfoHeadlight/InfoHeadlight'));
const App=()=>{

  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:advertId" element={<InfoHeadlight/>}/>
        <Route path="/messages" element={<Messages />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;