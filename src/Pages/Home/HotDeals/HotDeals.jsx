import moment from 'moment/moment';
import React from 'react';

const HotDeals = () => {
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
  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white">
    <span className="countdown font-mono lg:text-5xl">
      <span style={{"--value":5}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white">
    <span className="countdown font-mono lg:text-5xl">
    <span style={{"--value":10}}></span>    </span>
    hours
  </div> 
  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white">
    <span className="countdown font-mono lg:text-5xl">
    <span style={{"--value":50}}></span></span>
    min
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