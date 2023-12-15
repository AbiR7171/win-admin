import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Betbazar (1).png"

const NavBar = () => {
    return (
        <div>
<div className="navbar bg-green-500 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-500 rounded-box text-white w-52">
      <li><Link to="/main">Home</Link></li>
     
      <li><Link to="/main/Table">Table</Link></li>
     
     <li><Link to="/main/userManagment">User Management</Link></li>
     <li><Link to="/main/addNumber">Add Number</Link></li>
     {/* <li><Link to="/main/verify" >verify</Link></li> */}
     <li><Link to="/main/allUser">All User</Link></li>
     <li><Link to="/main/sendNotification" >Notification</Link></li>
     <li><Link to="/main/handleNotification" >Handle Notification</Link></li>
   
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src={logo} className='w-52' alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-[20px] ">
      <li><Link to="/main">Home</Link></li>
      <li><Link to="/main/Table">Table</Link></li>
      <li><Link to="/main/allUser">All User</Link></li>
     
      <li><Link to="/main/userManagment">User Management</Link></li>
      <li><Link to="/main/addNumber">Add Number</Link></li>
      {/* <li><Link to="/main/verify" >verify</Link></li> */}
      <li><Link to="/main/sendNotification" >Notification</Link></li>
      <li><Link to="/main/handleNotification" >Handle Notification</Link></li>
    </ul>
  </div>
</div> 
        </div>
    );
};

export default NavBar;



{/* <Link to="/Table">Table</Link>
<Link to="/userManagment">User Management</Link>
<Link to="/addNumber">Add Number</Link>
<Link to="/verify" >verify</Link> */}