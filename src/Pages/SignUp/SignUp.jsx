import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/rent.png"
import Lottie from "lottie-react";
import animation from "../../../public/78126-secure-login.json"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from '../../Components/SocialLogin';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignUp = () => {
    const[type , setType] = useState("password");
    const [IsShow , setIsShow] = useState(false);
    const [error , setError] = useState("");
    const navigate = useNavigate()


    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async(data) => {

        const password = data.password;
        const confirmPassword = data.confirmPassword;
        const role = data.role;
        if(password.length < 6){
            setError("Password must be six characters in length")
        }
        if(password !== confirmPassword){
            return setError("Password doesn't match")
        }
        if(!/(?=.*?[A-Z])/.test(password)){
            return setError("At least one upper case include in your password")
        }
        if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            return setError("At least one special character include in your password")
        }
        if(role === "null" || role === "Select Your Role"){
            return setError("Please select your role")
        }

        try{
            const response = await axios.post('http://localhost:5000/user/sigUp', {
            name:data.name,
            role:data.role,
            phone:data.phone,
            email:data.email,
            password:data.password,
            photo:data.photo
          });
          if(response.data){
            const { token } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('role',response.data.role);
              localStorage.setItem('email',response.data.email);
              localStorage.setItem('user-name', response.data.name)
          Swal.fire({
            title: 'Success!',
            text: 'Sign Up Successful',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
          setError("")
          if(response.data.role === "House Owner"){
navigate("/dashboard/allHouses")
          }
          if(response.data.role === "House Renter"){
            navigate("/dashboard/currentBookings")
          }
          }
        }catch (error) {
            console.log(error.response.data);
            Swal.fire({
                title: 'Error!',
                text:error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
          
          }

    }


    const handleShow =()=>{
        setType("text")
    }

    const handleHide =()=>{
        setType("password")
    }
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'>
            <Helmet>
                <title>House Hunter  | Sign In</title>
            </Helmet>
            <div>




                <div className='flex gap-14 flex-col lg:flex-row items-center justify-center'>
                    <div className='lg:w-2/4'>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                    <div>
                    <div className='my-5 w-full'>

<Link to="/" className='relative w-96 text-center'>
            <img src={logo} alt="Logo" />
            <span className='absolute -bottom-1 brand-title  text-secondary'>House Hunter</span>
        </Link>
</div>
                        <h1 className='text-center mb-10 brand-title text-primary text-3xl'>Sign Up</h1>
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
        <input type={type} placeholder='Enter Your Password'
        {...register("password", { required: "Password is required" })} 
        aria-invalid={errors.password ? "true" : "false"} 
        className='inputField w-full lg:w-96'/>
        <div className='relative right-8 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                                    {
                                        IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
                                    }
                                </div>
        </div>
        {errors.password && <p role="alert" className='text-error font-medium'>{errors.password?.message}</p>}

        <div className='inline-flex items-center'>
        <input type="password" placeholder='Confirm Password'
        {...register("confirmPassword", { required: "Confirm Password is required" })} 
        aria-invalid={errors.confirmPassword ? "true" : "false"} 
        className='inputField w-full lg:w-96'/>
        </div>
        {errors.confirmPassword && <p role="alert" className='text-error font-medium'>{errors.confirmPassword?.message}</p>}



        <input type='url' placeholder='Enter Your Photo Url'
        {...register("photo", { required: false })} 
        className='inputField w-full lg:w-96'/>


<input type='tel' placeholder='Enter Your Number'
        {...register("phone", { required: true })} 
        aria-invalid={errors.phone ? "true" : "false"} 
        className='inputField w-full lg:w-96'/>
        {errors.phone?.type === 'required' && <p role="alert" className='text-error font-medium'>Phone is required</p>}
        

        <select {...register("role")} className='inputField font-semibold w-full lg:w-96'>
        <option defaultValue="null">Select Your Role</option>
        <option value="House Owner">House Owner</option>
        <option value="House Renter">House Renter</option>
      </select>

      <p className='my-3 font-semibold text-red-600'>{error}</p>




        <input type="submit" value="Sign Up" className='my-btn'/>
        </form>
        
        <div className='mt-5'>
            <h1 className='font-medium'>Already have an account?? <Link className='font-semibold text-secondary underline' to="/signIn">Sign In</Link></h1>
        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;