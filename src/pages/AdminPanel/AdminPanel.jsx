import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import './AdminPanel.scss';



const AdminPanel=()=>{


  return(
    <section>
      <div className="admin">
     <ul className="admin__list">
      <li>
<NavLink to='addAdvert'>Додати оголошення</NavLink>
</li>
<li>
<NavLink to="headlightslist">Управління оголошеннями</NavLink>
</li>
     </ul>


    <Suspense fallback={<p>Loading ...</p>}>
        <Outlet/>
        </Suspense>
        </div>
    </section>
  )
}

export default AdminPanel;