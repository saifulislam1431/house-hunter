import React from 'react';
import { HiOutlineCurrencyBangladeshi, HiOutlineMapPin } from 'react-icons/hi2';
import { FaBath, FaBedPulse } from "react-icons/fa6";
import { IoMdResize } from "react-icons/io";
const ListedHouse = ({house}) => {
    const {address,availability_date,bathrooms,bedrooms,city,name,picture,rent_per_month,room_size,_id} = house
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
      <button className="my-btn-sec">Book</button>
    </div>
  </div>
</div>
    );
};

export default ListedHouse;