import React from 'react';
import useBookings from '../../../hooks/useBookings';
import { HiOutlineTrash } from 'react-icons/hi2';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageBookings = () => {
    const token = localStorage.getItem('token')
    const [bookings, refetch] = useBookings();
    const handleDelete = async(id)=>{
        

          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then( async(result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`https://house-hunter-server-seven.vercel.app/delete-bookings/${id}`, {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                  })
                  if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your booking has been deleted.',
                        'success'
                      )
                  }
            }
          })


    }
    return (
        <section className='flex items-center justify-center'>
<div>
<h2 className='text-center mb-10 text-2xl font-bold text-primary underline decoration-wavy'>Manage Your Bookings</h2>
<div className='mt-12'>
<div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className='text-base'>
        <th>Name</th>
        <th>Location</th>
        <th>Availability Date</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=><tr key={booking._id}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={booking.picture} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-medium">{booking.name}</div>
                </div>
              </div>
            </td>
            <td className='font-medium'>
              {booking.city}
              <br/>
              <span className="badge badge-ghost badge-sm">{booking.address}</span>
            </td>
            <td className='font-medium'>{booking.availability_date}</td>

<td className='font-medium text-secondary'>{booking.status}</td>

            <th className='flex'>
              <button onClick={()=>handleDelete(booking._id)} className='bg-red-500 border px-3 py-1 border-red-500 rounded-md text-white font-medium hover:bg-transparent hover:text-red-500 transition-all duration-200 ml-2'><HiOutlineTrash className='h-8 w-5'/></button>
 
            </th>


          </tr>)
      }
      
    </tbody>

    
  </table>
</div>
</div>
</div>
        </section>
    );
};

export default ManageBookings;