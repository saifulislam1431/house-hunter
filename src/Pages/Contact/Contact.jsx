import React from 'react';
import Lottie from "lottie-react";
import animationData from "../../../public/contact.json"
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async(data) => {
        console.log(data);
    }
    return (
        <section className='flex items-center justify-center my-14 min-h-[100px]'>
            <Helmet>
                <title>House Hunter  | Contact</title>
            </Helmet>
<div className='flex gap-20 items-center justify-center flex-col md:flex-row'>
<div className='w-96'>
<Lottie animationData={animationData} loop={true}></Lottie>
</div>
<div>
    <div className='text-center my-4 font-semibold'>
        <h1 className='brand-title text-3xl text-primary'>Stay Connected</h1>
    </div>
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>


<input type='text' placeholder='Enter Your Name'
{...register("name", { required: true })} 
aria-invalid={errors.name ? "true" : "false"} 
className='inputField w-full lg:w-96'/>
{errors.name?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}



<input type='email' placeholder='Enter Your Email'
{...register("email", { required: true })} 
aria-invalid={errors.email ? "true" : "false"} 
className='inputField w-full lg:w-96'/>
{errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}



<div className='inline-flex items-center'>
<input type="text" placeholder='subject'
{...register("subject", { required: "subject Password is required" })} 
aria-invalid={errors.subject ? "true" : "false"} 
className='inputField w-full lg:w-96'/>
</div>
{errors.subject && <p role="alert" className='text-error font-medium'>{errors.subject?.message}</p>}

<textarea placeholder='Message'
{...register("text", { required: "message is required" })} 
aria-invalid={errors.text ? "true" : "false"} 
className='inputField w-full lg:w-96' cols="15" rows="5"></textarea>
{errors.text && <p role="alert" className='text-error font-medium'>{errors.text?.message}</p>}


<input type="submit" value="Send" className='my-btn'/>
</form>
</div>
</div>
        </section>
    );
};

export default Contact;