import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import animation from "../../../public/404Error.json";
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { HiArrowLeftOnRectangle, HiArrowSmallLeft, HiBars3BottomLeft, HiHome, HiOutlineArrowRightOnRectangle } from 'react-icons/hi2'
import logo from "../../assets/logo/rent.png"
import profile from "../../assets/houseImg/user.png"
import animationData from "../../../public/animation_lk7b25ru.json";
const Dashboard = () => {
    const [user, setUser] = useState(null);
    console.log(user);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          getUserDetails(token);
        }
        
      }, []);

      const getUserDetails = async (token) => {
        try {
          const response = await axios.get('http://localhost:5000/user', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(response.data);
        } catch (error) {
          console.error(error.response.data);
        }
      };

      const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        localStorage.removeItem('user-name')
        setUser(null);
      };

      
      if (!user) {
        return(
            <section className='flex items-center justify-center min-h-[calc(100vh-150px)]'>
            <div className='mx-auto'>
            <div className='text-center mx-auto'>
            <Lottie animationData={animationData} loop={true} className='w-96 mx-auto'/>

            <Link to="/signIn" className='my-btn inline-flex items-center gap-1'><HiArrowLeftOnRectangle className='h-6 w-6'/>Please Sign In First</Link>
            </div>

            <div className='my-10'>
<h1 className='font-bold text-2xl text-error text-center'>Sorry for the discounting! If You want to see you dashboard please sign in or sign up first.</h1>
            </div>
            </div>

                   </section>
        )
      }
      
      
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="my-btn drawer-button lg:hidden top-3 left-3 absolute"><HiBars3BottomLeft className='h-6 w-6'/></label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu py-4 pl-4 pr-0 w-64 h-full bg-base-200 text-base-content">
      
    <Link to="/" className='relative w-96 mt-3 mb-10'>
<img src={logo} alt="Logo" />
<span className='absolute -bottom-1 brand-title  text-secondary'>House Hunter</span>
        </Link>

        <div className='mb-10 px-16 space-y-1'>
<img src={user.photo?user.photo:profile} alt="" className='w-16 rounded-full'/>
<h1 className='font-semibold'>{user.name}</h1>
<p className='font-medium text-primary'>{user.role}</p>
<p></p>
        </div>

      {
        user.role === "House Owner" ? <>
        <li><NavLink to="/dashboard/allHouses" className={({isActive}) =>(isActive ? "activeSide" : "defaultSide")}>All Houses</NavLink></li>

        <li><NavLink to="/dashboard/newHouses" className={({isActive}) =>(isActive ? "activeSide" : "defaultSide")}>Add New House</NavLink></li>

        <li><NavLink to="/dashboard/manageHouses" className={({isActive}) =>(isActive ? "activeSide" : "defaultSide")}>Manage Houses</NavLink></li>
        </> 
        
        : 
        
        <>
        <li><NavLink to="/dashboard/currentBookings" className={({isActive}) =>(isActive ? "activeSide" : "defaultSide")}>Current Bookings</NavLink></li>
        <li><NavLink to="/dashboard/manageBookings" className={({isActive}) =>(isActive ? "activeSide" : "defaultSide")}>Manage Bookings</NavLink></li>
        </> 
      }
              <div className="divider"></div>

<div className='my-3 px-3 flex flex-col gap-4'>
<Link to="/" className='inline-flex items-center gap-2 font-medium'><HiHome className='w-6 h-6 text-primary'/>Home</Link>
<button className='inline-flex items-center gap-2 font-medium' onClick={handleLogout}><HiOutlineArrowRightOnRectangle className='w-6 h-6 text-primary'/>Sign Out</button>
</div>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;