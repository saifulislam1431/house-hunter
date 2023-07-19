import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddHouse = () => {
    const [error , setError] = useState("");
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        const phone_number = data.phone_number;
        const cleanedPhoneNumber = phone_number.replace(/\s/g, '').replace(/-/g, '');
        const regex = /^(\+?88)?01[3-9]\d{8}$/;
        if (!regex.test(cleanedPhoneNumber)) {
            return setError('Please enter a valid Bangladeshi phone number.');
          } else {
            console.log(data);
            setError("")
          }

    }
    return (
        <section className='flex items-center justify-center my-12'>
<div>
<h2 className='text-center mb-10 text-2xl font-bold text-primary underline decoration-wavy'>Add New House</h2>
<div className='my-8 w-full'>
<form onSubmit={handleSubmit(onSubmit)} className='w-full'>
    {/* email, number */}
<div className='w-full flex flex-col lg:flex-row items-center justify-center gap-2'>
<div className='w-full'>
<input type='email' placeholder='Enter Your Email'
        {...register("email", { required: true })} 
        aria-invalid={errors.email ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}
        </div>
</div>

       
<div className='w-full'>
<input type='number' placeholder='Enter Your Phone Number'
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
<input type='text' placeholder='Enter Your House Name'
        {...register("name", { required: true })} 
        aria-invalid={errors.name ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}
        </div>
</div>

<div className='w-full'>
<input type='text' placeholder='Enter Your House address'
        {...register("address", { required: true })} 
        aria-invalid={errors.address ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.address?.type === 'required' && <p role="alert" className='text-error font-medium'>Address is required</p>}
        </div>
</div>

        <div className='w-full'>
        <input type='text' placeholder='Enter Your House City'
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
<input type='number' placeholder='Enter Number Of Bedrooms'
        {...register("bedrooms", { required: true })} 
        aria-invalid={errors.bedrooms ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.bedrooms?.type === 'required' && <p role="alert" className='text-error font-medium'>Bedrooms is required</p>}
        </div>

</div>

        <div className='w-full'>
        <input type='number' placeholder='Enter Number Of Bathrooms'
        {...register("bathrooms", { required: true })} 
        aria-invalid={errors.bathrooms ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.bathrooms?.type === 'required' && <p role="alert" className='text-error font-medium'>Bathrooms is required</p>}
        </div>
        </div>

        <div className='w-full'>
        <input type='text' placeholder='Room Size e.g: 500 sqft'
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
<input type='number' placeholder='Enter Rent Per Month'
        {...register("rent_per_month", { required: true })} 
        aria-invalid={errors.rent_per_month ? "true" : "false"} 
        className='inputField w-full'/>
        <div>
        {errors.rent_per_month?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}
        </div>
</div>

        <div className='w-full'>
        <input type='text' placeholder='Enter Availability date e.g: 2023-09-10'
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
<input type='url' placeholder='Enter Photo URL'
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
<textarea placeholder='Enter Description'
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
<input type="submit" value="Add" className='my-btn-sec cursor-pointer w-1/2 mt-4'/>
</div>
    </form>
</div>
</div>
        </section>
    );
};

export default AddHouse;