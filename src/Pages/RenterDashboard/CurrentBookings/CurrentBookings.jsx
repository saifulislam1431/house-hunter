import React from 'react';
import useBookings from '../../../hooks/useBookings';
import { FaBath, FaBedPulse, FaCalendarDays } from 'react-icons/fa6';
import { IoMdResize } from 'react-icons/io';
import { HiCheckBadge, HiOutlineCurrencyBangladeshi, HiOutlineMapPin } from 'react-icons/hi2';

const CurrentBookings = () => {
    const [bookings] = useBookings();

    return (
        <section className='flex items-center justify-center my-14'>
        <div>
        <h2 className='text-center mb-10 text-2xl font-bold text-primary underline decoration-wavy'>Your Current Bookings</h2>
        <div className='mt-12 grid grid-cols-1 gap-12 items-center justify-center'>
       {
bookings.map(booking=><div key={booking._id} className="card card-side bg-base-100 shadow-md ">
<figure><img src={booking.picture} alt="House" className='h-60 lg:h-full w-full lg:w-[250px]'/></figure>
<div className="card-body">
  <h2 className="card-title">{booking.name}</h2>
  <div className='flex gap-10 items-center justify-between mt-3 mb-8'>
      <div className='flex flex-col items-start gap-3'>
          <p className='inline-flex items-center gap-2 text-base justify-center'><HiOutlineMapPin className='h-6 w-5 text-primary'/> {booking.city}</p>
          <p className='inline-flex items-center gap-2 text-base justify-center'>{booking.address}</p>
          <p className='inline-flex items-center gap-2 text-base justify-center'><HiOutlineCurrencyBangladeshi className='h-6 w-5 text-primary'/> {booking.rent_per_month}/month</p>
      </div>
      <div className='flex flex-col items-start gap-3'>
          <p className='inline-flex items-center gap-2 text-base justify-center'><FaBedPulse className='h-6 w-5 text-primary'/> {booking.bedrooms}</p>
          <p className='inline-flex items-center gap-2 text-base justify-center'><FaBath className='h-6 w-5 text-primary'/> {booking.bathrooms}</p>
          <p className='inline-flex items-center gap-2 text-base justify-center'><FaCalendarDays className='h-6 w-5 text-primary'/> {booking.availability_date}</p>
      </div>
  </div>
  <div className="card-actions justify-start">
  <p className='inline-flex items-center gap-2 text-base justify-center font-semibold'><HiCheckBadge className='h-6 w-5 text-primary'/> {booking.status}</p>
  </div>
</div>
</div>)
       }     
        </div>
        </div>
                </section>
    );
};

export default CurrentBookings;