import React from 'react';
import {Link} from 'react-router-dom';
const NavBar=()=>(
  
<nav className="menu">
  <ol>
    <li className="menu-item "><a href="#0">Plan</a></li>
    <li className="menu-item active"><a href="#0">Challenges</a></li>
    <li className="menu-item"><Link to='/reports'>Reports</Link></li>
    <li className="menu-item"><a href="#0">Profile</a></li>
		<li className="menu-item"><a href="#0">Rate us</a></li>
  </ol>
</nav>
);
export default NavBar;