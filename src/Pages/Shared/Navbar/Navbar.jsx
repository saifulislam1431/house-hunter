import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiArrowLeftOnRectangle, HiOutlineBars3BottomLeft } from "react-icons/hi2";
import logo from "../../../assets/logo/rent.png"
import "./Nav.css"

const Navbar = () => {
    const navItems = <>
    <li><NavLink to="/" className={({isActive})=>(isActive ? "activeNav" : "defaultNav")}>Home</NavLink></li>

    <li><NavLink to="/propertyListings" className={({isActive})=>(isActive ? "active" : "defaultNav")}>Property Listings</NavLink></li>

    <li><NavLink to="/dashboard" className={({isActive})=>(isActive ? "active" : "defaultNav")}>Dashboard</NavLink></li>

    <li><NavLink to="/about" className={({isActive})=>(isActive ? "active" : "defaultNav")}>About Us</NavLink></li>
    </>
    return (
        <div className="navbar nav-bg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <HiOutlineBars3BottomLeft className='h-8 w-8 text-secondary'/>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>

        <Link to="/" className='relative w-96'>
<img src={logo} alt="Logo" />
<span className='absolute -bottom-1 brand-title  text-secondary'>House Hunter</span>
        </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
 <Link to="signIn">
    <button className='my-btn inline-flex items-center gap-1'>Sign In <HiArrowLeftOnRectangle className='w-5 h-5'/></button>
 </Link>
  </div>
</div>
    );
};

export default Navbar;