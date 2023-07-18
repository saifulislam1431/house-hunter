import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';

const HotDeals = () => {

    const [countDays , setCountDays] = useState(0);
    const [countHours  , setCountHours] = useState(0);
    const [countMinutes , setCountMinutes] = useState(0);
    const [countSeconds  , setCountSeconds] = useState(0);


    useEffect(()=>{
        const endDate = new Date("2023-07-26").getTime();

    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = endDate - now;
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        // Update the countdown state
        setCountSeconds(seconds);
        setCountMinutes(minutes);
        setCountHours(hours);
        setCountDays(days)
  
        if (distance < 0) {
          clearInterval(countdownTimer);
        }
      }, 1000);
  
      return () => clearInterval(countdownTimer);

    },[])

    return (
        <section className='flex items-center justify-center'>
<div>
<h2 className='text-center mb-10 text-2xl font-bold text-primary'>Exclusive Rental Offers: Unbeatable Deals for Your New Home</h2>

<div className='mb-14 mt-4 lg:w-5/6 lg:h-5/6 mx-auto'>
<div className='relative'>
<img src="https://i.ibb.co/YDWn38x/black-friday-alarm-clock-space.jpg" alt="Deals Image" className='rounded-lg'/>
<div className='absolute top-0 right-0 h-full lg:pr-3 flex lg:items-center pt-5 justify-center ml-36 flex-col gap-5'>

    <h1 className='lg:text-2xl text-white discount'>Limited Offer: <span className='discount text-secondary underline decoration-wavy'>40%</span> Discount on Your Dream Home!</h1>


    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white lg:w-[66px]">
    <span className="font-mono lg:text-5xl">
      <span>{countDays}</span>
    </span>
    days
  </div> 
  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white lg:w-[66px]">
    <span className="font-mono lg:text-5xl">
    <span>{countHours}</span>    </span>
    hours
  </div> 

  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white lg:w-[66px]">
    <span className="font-mono lg:text-5xl">
    <span>{countMinutes}</span></span>
    min
  </div> 

  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white lg:w-[66px]">
    <span className="font-mono lg:text-5xl">
    <span>{countSeconds}</span></span>
    sec
  </div> 
</div>
</div>
</div>
</div>
</div>
        </section>
    );
};

export default HotDeals;