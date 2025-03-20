import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const Headlight=React.lazy(()=> import('./components/HelpInfo/Headlight'))
const Backlights=React.lazy(()=> import('./components/HelpInfo/Backlights'))
const Foglights=React.lazy(()=> import('./components/HelpInfo/Foglights'))
const HelperPage=React.lazy(()=> import('./pages/HelperPage/HelperPage'))
const Galogen=React.lazy(()=> import('./components/HelpInfo/Galogen'))
const Xenon=React.lazy(()=> import('./components/HelpInfo/Xenon'))
const Led=React.lazy(()=> import('./components/HelpInfo/Led'))
const Laser=React.lazy(()=> import('./components/HelpInfo/Laser'))
const About=React.lazy(() => import('./pages/About/About'));
const Messages=React.lazy(() => import('./pages/Messages/Messages'));
const Main=React.lazy(() => import('./pages/Main/Main'));
const Store=React.lazy(() => import('./pages/Store/Store'));
const Reviews=React.lazy(() => import('./pages/Reviews/Reviews'));
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
        <Route path="/about" element={<About/>} />
        <Route path="/helper" element={<HelperPage/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path='/galogen' element={<Galogen/>} />
        <Route path='/xenon' element={<Xenon/>} />
        <Route path='/led' element={<Led/>} />
        <Route path='/laser' element={<Laser/>} />
        <Route path='/headlight' element={<Headlight/>} />
        <Route path='/backlight' element={<Backlights/>} />
        <Route path='/foglight' element={<Foglights/>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;