import React from 'react';
import useOwnerHouse from '../../../hooks/useOwnerHouse';
import { HiOutlineCurrencyBangladeshi, HiOutlineMapPin } from 'react-icons/hi2';
import { FaBedPulse } from 'react-icons/fa6';
import { FaBath } from 'react-icons/fa';
import { IoMdResize } from 'react-icons/io';

const AllHouses = () => {
    const [ownerHouses] = useOwnerHouse();
    console.log(ownerHouses);
    return (
        <section className='flex items-center justify-center my-12'>
            <div>
            <h2 className='text-center mb-10 text-2xl font-bold text-primary underline decoration-wavy'>Your All Houses</h2>
<div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
    {
        ownerHouses.map(ownerHouse=>        <div key={ownerHouse._id} className="card bg-base-100 shadow-md w-72">
        <figure><img src={ownerHouse.picture} alt="House" className='h-66 lg:h-full w-full'/></figure>
        <div className="card-body">
          <h2 className="card-title">{ownerHouse.name}</h2>
          <div className='flex flex-col items-start mt-3 mb-8'>
              <div className='flex flex-col items-start gap-3'>
                  <p className='inline-flex items-center gap-2 text-base justify-center'><HiOutlineMapPin className='h-6 w-5 text-primary'/> {ownerHouse.city}</p>
                  <p className='inline-flex items-center gap-2 text-base justify-center'><HiOutlineCurrencyBangladeshi className='h-6 w-5 text-primary'/> {ownerHouse.rent_per_month}/month</p>
              </div>
              <p className='inline-flex items-center gap-2 text-base justify-center mt-2'>{ownerHouse.address}</p>
          </div>
        </div>
      </div>)
    }
    </div>            
            </div>
        </section>
    );
};

export default AllHouses;