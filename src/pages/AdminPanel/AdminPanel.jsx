import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import './AdminPanel.scss';



const AdminPanel=()=>{


  return(
    <section>
      <div className="admin">
     <h1>Welcome to the Admin Panel</h1>
     <ul className="admin_list">
<NavLink to='addAdvert'>Додати оголошення</NavLink>
     </ul>
     <ul>
<NavLink to="headlightslist">Управління оголошеннями</NavLink>
     </ul>


    <Suspense fallback={<p>Loading ...</p>}>
        <Outlet/>
        </Suspense>
        </div>
    </section>
  )
}

export default AdminPanel;