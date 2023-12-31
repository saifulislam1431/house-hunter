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
const SignIn = () => {
    const [type, setType] = useState("password");
    const [IsShow, setIsShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleShow = () => {
        setType("text")
    }

    const handleHide = () => {
        setType("password")
    }
    const onSubmit = async(data) => {
        try {
            const response = await axios.post('https://house-hunter-server-seven.vercel.app/user/login', {
              email: data.email,
              password: data.password
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
             
              if(response.data.role === "House Owner"){
    navigate("/dashboard/allHouses")
              }
              if(response.data.role === "House Renter"){
                navigate("/dashboard/currentBookings")
              }
              }
          } catch (error) {
            Swal.fire({
                title: 'Error!',
                text:error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
          }
    };
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
                        <h1 className='text-center mb-10 brand-title text-primary text-3xl'>Sign In</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>
                            <input type='email' placeholder='Enter Your Email'
                                {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"}
                                className='inputField w-full lg:w-96' />
                            {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}

                            <div className='inline-flex items-center'>
                                <input type={type} placeholder='Enter Your Password'
                                    {...register("password", { required: "Password is required" })}
                                    aria-invalid={errors.password ? "true" : "false"}
                                    className='inputField w-full lg:w-96' />
                                <div className='relative right-8 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                                    {
                                        IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
                                    }
                                </div>
                            </div>
                            {errors.password && <p role="alert" className='text-error font-medium'>{errors.password?.message}</p>}

                            <input type="submit" value="Sign In" className='my-btn' />
                        </form>

                        <div className='mt-5'>
                            <h1 className='font-medium'>New To String? <Link className='font-semibold text-secondary underline' to="/signUp">Sign Up</Link></h1>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;