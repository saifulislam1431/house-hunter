import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useOwnerHouse from '../../../hooks/useOwnerHouse';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateHouses = () => {
    const [ownerHouses,refetch] = useOwnerHouse();

    const paramsId = useParams();
    const id = paramsId.id;
    const data = ownerHouses.find(item=>item._id === id);

    const [error , setError] = useState("");

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = async(data) => {
        const phone_number = data.phone_number;
        const cleanedPhoneNumber = phone_number.replace(/\s/g, '').replace(/-/g, '');
        const regex = /^(\+?88)?01[3-9]\d{8}$/;
        if (!regex.test(cleanedPhoneNumber)) {
            return setError('Please enter a valid Bangladeshi phone number.');
          } 
          
          else {
            try{
                const response = await axios.put(`https://house-hunter-server-seven.vercel.app/update-houses/${id}`, data);
              if(response.data.modifiedCount > 0){
                navigate("/dashboard/manageHouses")
                refetch();
                setError("");
              Swal.fire({
                title: 'Success!',
                text: 'House Updated',
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

    }
    return (
        <section className='flex items-center justify-center my-12'>
            <div>
            <h2 className='text-center mb-10 text-2xl font-bold text-primary underline decoration-wavy'>update House</h2>

            <div className='my-8 w-full'>
<form onSubmit={handleSubmit(onSubmit)} className='w-full'>
    {/* email, number */}
<div className='w-full flex flex-col lg:flex-row items-center justify-center gap-2'>
<div className='w-full'>
<input defaultValue={data.email} type='email' placeholder='Enter Your Email'
        {...register("email", { required: true })} 
        aria-invalid={errors.email ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}
        </div>
</div>

       
<div className='w-full'>
<input defaultValue={parseInt(data.phone_number)} type='number' placeholder='Enter Your Phone Number'
        {...register("phone_number", { required: true })} 
        aria-invalid={errors.phone_number ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.phone_number?.type === 'required' && <p role="alert" className='text-error font-medium'>Phone number is required</p>}
        </div>
</div>
       
</div>

{/* name, address, city */}
<div className='w-full flex flex-col lg:flex-row items-center justify-center gap-2 my-3'>
<div className='w-full'>
<input defaultValue={data.name} type='text' placeholder='Enter Your House Name'
        {...register("name", { required: true })} 
        aria-invalid={errors.name ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}
        </div>
</div>

<div className='w-full'>
<input defaultValue={data.address} type='text' placeholder='Enter Your House address'
        {...register("address", { required: true })} 
        aria-invalid={errors.address ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.address?.type === 'required' && <p role="alert" className='text-error font-medium'>Address is required</p>}
        </div>
</div>

        <div className='w-full'>
        <input defaultValue={data.city} type='text' placeholder='Enter Your House City'
        {...register("city", { required: true })} 
        aria-invalid={errors.city ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.city?.type === 'required' && <p role="alert" className='text-error font-medium'>City is required</p>}
        </div>
        </div>
</div>

{/* bedrooms, bathrooms, size */}
<div className='w-full flex flex-col lg:flex-row items-center justify-center gap-2 my-3'>
<div className='w-full'>
<input defaultValue={data.bedrooms} type='number' placeholder='Enter Number Of Bedrooms'
        {...register("bedrooms", { required: true })} 
        aria-invalid={errors.bedrooms ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.bedrooms?.type === 'required' && <p role="alert" className='text-error font-medium'>Bedrooms is required</p>}
        </div>

</div>

        <div className='w-full'>
        <input defaultValue={data.bathrooms} type='number' placeholder='Enter Number Of Bathrooms'
        {...register("bathrooms", { required: true })} 
        aria-invalid={errors.bathrooms ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.bathrooms?.type === 'required' && <p role="alert" className='text-error font-medium'>Bathrooms is required</p>}
        </div>
        </div>

        <div className='w-full'>
        <input defaultValue={data.room_size} type='text' placeholder='Room Size e.g: 500 sqft'
        {...register("room_size", { required: true })} 
        aria-invalid={errors.room_size ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.room_size?.type === 'required' && <p role="alert" className='text-error font-medium'>Room size is required</p>}
        </div>
        </div>
</div>

    {/* rent, date */}
    <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-2'>
<div className='w-full'>
<input defaultValue={data.rent_per_month} type='number' placeholder='Enter Rent Per Month'
        {...register("rent_per_month", { required: true })} 
        aria-invalid={errors.rent_per_month ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.rent_per_month?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}
        </div>
</div>

        <div className='w-full'>
        <input defaultValue={data.availability_date} type='text' placeholder='Enter Availability date e.g: 2023-09-10'
        {...register("availability_date", { required: true })} 
        aria-invalid={errors.availability_date ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.availability_date?.type === 'required' && <p role="alert" className='text-error font-medium'>Availability date is required</p>}
        </div>
        </div>
</div>

    {/* Picture*/}
    <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-2 my-5'>
<div className='w-full'>
<input defaultValue={data.picture} type='url' placeholder='Enter Photo URL'
        {...register("picture", { required: true })} 
        aria-invalid={errors.picture ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.picture?.type === 'required' && <p role="alert" className='text-error font-medium'>Picture is required</p>}
        </div>
</div>
</div>

    {/* text*/}
    <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-2 my-3'>

<div className='w-full'>
<textarea defaultValue={data.description} placeholder='Enter Description'
        {...register("description", { required: false })} 
        aria-invalid={errors.description ? "true" : "false"} 
        className='inputField w-full' cols="15" rows="5"></textarea>
        <div>
        {errors.description?.type === 'required' && setError("Description is not required")}
        </div>
</div>
</div>

<p role="alert" className='text-error font-medium'>{error}</p>

<div className='text-center'>
<input type="submit" value="update" className='my-btn-sec cursor-pointer w-1/2 mt-4'/>
</div>
    </form>
</div>            
            </div>
        </section>
    );
};

export default UpdateHouses;