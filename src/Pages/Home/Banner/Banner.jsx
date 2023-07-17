import React from 'react';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
        <section>
            <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/GczcHwq/house31.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="text-white">
    <div className="lg:px-32 -mt-28">
    <TypeAnimation
          sequence={[
            "Discover Your Dream Home with House Hunter"
            ,
            800,
            '',
          ]}
          speed={30}
          style={{ fontSize: '2.5rem', color: "#00DF75", fontWeight: 700, fontFamily: ['Fira Sans', 'sans-serif'] }}
          repeat={Infinity}
        />
    </div>
    
  </div>
<div className='mt-44 lg:mt-9 w-full mx-auto text-center'>
<p className="mb-5 text-white font-semibold">Connecting House Owners and Renters for Effortless Rentals</p>

<div className='inline-flex items-center relative'>
<input type="text" placeholder='Search your dream home' className='search-field'/>
<HiOutlineMagnifyingGlass className=' text-white w-5 h-5 absolute left-3'/>
</div>
</div>
</div>
        </section>
    );
};

export default Banner;