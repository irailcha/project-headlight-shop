import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const Main=React.lazy(() => import('./pages/Main/Main'));
const Store=React.lazy(() => import('./pages/Store/Store'));
const Profile=React.lazy(() => import('./pages/Profile/Profile'));
const App=()=>{

  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/store" element={<Store />} />
        <Route path='/profile' element={<Profile/>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;