import React, { useState } from 'react';
import useOwnerHouse from '../../../hooks/useOwnerHouse';
import { HiOutlineTrash, HiPencilSquare } from "react-icons/hi2";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const ManageHouses = () => {
  const token = localStorage.getItem("token")
    const[ownerHouses,refetch]=useOwnerHouse();
    const [error , setError] = useState("");

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async(data) => {
      console.log(data);
    }

    const handleUpdate = async(id) =>{
const selectItems = ownerHouses.find(selectItem=>selectItem._id === id)

    }


const handleDelete = async(id) =>{
  try{
    const response = await axios.delete(`https://house-hunter-server-seven.vercel.app/delete-house/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  if(response.data.deletedCount > 0){
    refetch();
  Swal.fire({
    title: 'Success!',
    text: 'Delete Successful',
    icon: 'success',
    confirmButtonText: 'Ok'
})
  }
}catch (error) {
    Swal.fire({
        title: 'Error!',
        text:error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Ok'
    })
  
  }
}

    return (
        <section className='my-12'>
          <Helmet>
                <title>House Hunter  | Manage Houses</title>
            </Helmet>
<h2 className='text-center mb-10 text-2xl font-bold text-primary underline decoration-wavy'>Manage Your Houses</h2>

<div className='my-8 w-full'>
<div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className='text-base'>
        <th>Name</th>
        <th>Location</th>
        <th>Availability Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        ownerHouses.map(ownerHouse=><tr key={ownerHouse._id}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={ownerHouse.picture} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{ownerHouse.name}</div>
                </div>
              </div>
            </td>
            <td>
              {ownerHouse.city}
              <br/>
              <span className="badge badge-ghost badge-sm">{ownerHouse.address}</span>
            </td>
            <td>{ownerHouse.availability_date}</td>


            <th className='flex'>
            <Link to={`/dashboard/updateHouse/${ownerHouse._id}`} className="my-btn-sec cursor-pointer"><HiPencilSquare className='h-8 w-5'/></Link>

              <button onClick={()=>handleDelete(ownerHouse._id)} className='bg-red-500 border px-3 py-1 border-red-500 rounded-md text-white font-medium hover:bg-transparent hover:text-red-500 transition-all duration-200 ml-2'><HiOutlineTrash className='h-8 w-5'/></button>
 
            </th>


          </tr>)
      }
      
    </tbody>

    
  </table>
</div>
</div>

        </section>
    );
};

export default ManageHouses;