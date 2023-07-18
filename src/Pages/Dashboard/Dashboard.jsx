import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import animation from "../../../public/404Error.json";
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { HiArrowLeftOnRectangle, HiArrowSmallLeft, HiBars3BottomLeft } from 'react-icons/hi2'

const Dashboard = () => {
    const [user, setUser] = useState(null);
    console.log(user);
    const navigate = useNavigate();

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
        setUser(null);
      };
      
      if (!user) {
        return(
            <section className='flex items-center justify-center min-h-[calc(100vh-150px)]'>
            <div className='mx-auto'>
            <div className='text-center mx-auto'>
            <Lottie animationData={animation} loop={true} className='w-96 mx-auto'/>

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
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="my-btn drawer-button lg:hidden top-3 left-3 absolute"><HiBars3BottomLeft className='h-6 w-6'/></label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
     
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;