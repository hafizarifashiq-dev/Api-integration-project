
import {useState, useEffect} from "react";
import {Routes, Route, NavLink } from "react-router";
import "./App.css"
import Userlist from "./UserList";
import UserAdd from "./UserAdd";
function App() {
  
  return (
   <div>
{/* <h2>Make Routes and pages for Add user and user list UI</h2> */}

<ul>
 <li> <NavLink to="/" >List</NavLink></li>
  <li> <NavLink to="/add" >Add User</NavLink></li>

</ul>

<Routes>
  <Route path="/" element={<Userlist />} />
    <Route path="/add" element={<UserAdd />} />
</Routes>
</div>
)
}
export default App;