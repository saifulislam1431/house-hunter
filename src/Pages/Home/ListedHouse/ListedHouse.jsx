import React, { useState } from 'react';
import { HiOutlineCurrencyBangladeshi, HiOutlineMapPin } from 'react-icons/hi2';
import { FaBath, FaBedPulse } from "react-icons/fa6";
import { IoMdResize } from "react-icons/io";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useBookings from '../../../hooks/useBookings';
const ListedHouse = ({house}) => {
  const [,refetch] = useBookings();
  const [userNumber , setUserNumber] = useState("")
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("user-name");
  const userEmail = localStorage.getItem("email");
  const navigate = useNavigate();

    const {address,availability_date,bathrooms,bedrooms,city,name,picture,rent_per_month,room_size,_id} = house

    const handleBooking =async(data)=>{
      if(!token){
        Swal.fire({
          title: 'Error!',
          text: "Sorry Unauthorized Access Sign In Again",
          icon: 'error',
          confirmButtonText: 'Ok'
      })
      return navigate("/signIn")
      }else if(!role === "House Renter"){
        Swal.fire({
          title: 'Error!',
          text: "You Can't Booking Because You Are House Owner.",
          icon: 'error',
          confirmButtonText: 'Ok'
      })
      } else if(!userEmail || !userName){
        Swal.fire({
          title: 'Error!',
          text: "Your Email and Name Not Valid Please Sign In Again.",
          icon: 'error',
          confirmButtonText: 'Ok'})
      }else{
        const bookingsData={
          userEmail,
          userName,
          userNumber,
          status:"Booked",
          address:data.address,
          availability_date:data.availability_date,
          bathrooms:data.bathrooms,
          bedrooms:data.bedrooms,
          city:data.city,
          name:data.name,
          picture:data.picture,
          rent_per_month:data.rent_per_month,
          houseId:data._id
        }
        try {
          const response = await axios.post('https://house-hunter-server-seven.vercel.app/bookings', bookingsData);
          
          if(response.data.insertedId){
            refetch()
            Swal.fire({
              title: 'Success!',
              text: 'Booking Successful',
              icon: 'success',
              confirmButtonText: 'Ok'
          })
          }else{
            Swal.fire({
              title: 'Error!',
              text: response.data,
              icon: 'error',
              confirmButtonText: 'Ok'
          })
          }
          
        } catch (error) {
          console.error(error.response.data);
          Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
        }
      }
    }



    return (
        <div className="card lg:card-side bg-base-100 shadow-md ">
  <figure><img src={picture} alt="House" className='h-60 lg:h-full w-full lg:w-[250px]'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className='flex gap-10 items-center justify-between mt-3 mb-8'>
        <div className='flex flex-col items-start gap-3'>
            <p className='inline-flex items-center gap-2 text-base justify-center'><HiOutlineMapPin className='h-6 w-5 text-primary'/> {city}</p>
            <p className='inline-flex items-center gap-2 text-base justify-center'>{address}</p>
            <p className='inline-flex items-center gap-2 text-base justify-center'><HiOutlineCurrencyBangladeshi className='h-6 w-5 text-primary'/> {rent_per_month}/month</p>
        </div>
        <div className='flex flex-col items-start gap-3'>
            <p className='inline-flex items-center gap-2 text-base justify-center'><FaBedPulse className='h-6 w-5 text-primary'/> {bedrooms}</p>
            <p className='inline-flex items-center gap-2 text-base justify-center'><FaBath className='h-6 w-5 text-primary'/> {bathrooms}</p>
            <p className='inline-flex items-center gap-2 text-base justify-center'><IoMdResize className='h-6 w-5 text-primary'/> {room_size}</p>
        </div>
    </div>
    <div className="card-actions justify-between">
      <button className="my-btn">View Details</button>

      <label htmlFor={`my_modal_${_id}`} className="my-btn-sec">Book</label>
                    <input type="checkbox" id={`my_modal_${_id}`} className="modal-toggle" />

                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg text-secondary">Please Provide Your Information</h3>

                        {
                          !token && !userEmail && <div className='text-red-600 font-medium mt-2'>You Can't Booking Any House Please Sing In First</div> 
                        }

<div className='my-3'>
<label htmlFor="Name" className='font-medium'>Name:</label>
<input type="text" defaultValue={userName} className='inputField' disabled={true}/>
</div>

<div className='my-4'>
<label htmlFor="Email" className='font-medium'>Email:</label>
<input type="text" defaultValue={userEmail} className='inputField' disabled={true}/>
</div>

<div>
<label htmlFor="Number" className='font-medium'>Number:</label>
<input type="text" placeholder='Please Enter Your Number' className='inputField' onChange={e=>setUserNumber(e.target.value)}/>
</div>


                        <div className="modal-action">
                          <label htmlFor={`my_modal_${_id}`} className="my-btn"  onClick={()=>handleBooking(house)}>Confirm</label>
                        </div>
                      </div>
                    </div>    

      {/* <button className="my-btn-sec" onClick={()=>handleBooking(house)}>Book</button> */}
    </div>
  </div>
</div>
    );
};

export default ListedHouse;