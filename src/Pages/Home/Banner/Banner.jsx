import React, { useEffect, useState } from 'react';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { TypeAnimation } from 'react-type-animation';
import animation from "../../../../public/animation_lk7b25ru.json";
import Lottie from "lottie-react";
import axios from 'axios';
import ListedHouse from '../ListedHouse/ListedHouse';
import { data } from 'autoprefixer';

const Banner = () => {
    const [searchText , setSearchText] = useState("");
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
      city: '',
      bedrooms: '',
      bathrooms: '',
      roomSize: '',
      availabilityFrom: '',
      minRent: '',
      maxRent: '',
    });
const [totalHouse , setTotalHouse] = useState(0);

useEffect(()=>{
  fetch("https://house-hunter-server-seven.vercel.app/total-houses")
  .then(res=>res.json())
  .then(data=>setTotalHouse(data.totalHouse))
},[])
    // Pagination States
    const [currentPage, setCurrentPage] = useState(0);
    const itemPerPage = 10;
    const totalPage = Math.ceil(totalHouse / itemPerPage);
    const pageNumbers = [...Array(totalPage).keys()]

    useEffect(() => {
        fetchHouses();
      }, [filters,currentPage,itemPerPage]);
    
      const fetchHouses = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`https://house-hunter-server-seven.vercel.app/houses?page=${currentPage}&limit=${itemPerPage}`, { params: filters });
          setHouses(response.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };

      const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleSearch = () =>{
        fetch(`https://house-hunter-server-seven.vercel.app/houses-by-location/${searchText}`)
        .then(res=>res.json())
        .then(data=>setHouses(data))
      }

    return (
        <section>
<div>
<div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/GczcHwq/house31.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
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
<input type="text" placeholder='Search your dream home by location' className='search-field' onChange={e=>setSearchText(e.target.value)} onKeyUp={handleSearch}/>
<HiOutlineMagnifyingGlass className=' text-white w-5 h-5 absolute left-3'/>
</div>
</div>
</div>

<div className='my-20 w-full flex flex-col items-center justify-center mx-auto'>
{/* Filter option */}
<div className='w-full'>
        <h2 className='text-center mb-10 text-2xl font-bold text-primary'>Refine Your Search: Find Your Perfect Rental</h2>

        <div className='w-full flex items-center justify-center'>
        <form className='grid grid-cols-2 lg:grid-cols-7 gap-6 items-center justify-center'>
          <label className='flex flex-col gap-2'>
            City:
            <select name="city" value={filters.city} onChange={handleFilterChange} className='drop-field'>
              <option value="">All</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Bandarban">Bandarban</option>
              <option value="Sajek">Sajek</option>
              <option value="Kuakata">Kuakata</option>
              <option value="Mountainside">Mountainside</option>
              {/* Add more city options */}
            </select>
          </label>
          <label className='flex flex-col gap-2'>
            Bedrooms:
            <select name="bedrooms" value={filters.bedrooms} onChange={handleFilterChange} className='drop-field'>
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              {/* Add more bedroom options */}
            </select>
          </label>
          <label className='flex flex-col gap-2'>
            Bathrooms:
            <select name="bathrooms" value={filters.bathrooms} onChange={handleFilterChange} className='drop-field'>
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              {/* Add more bathroom options */}
            </select>
          </label>
          <label className='flex flex-col gap-2'>
            Room Size:
            <select name="roomSize" value={filters.roomSize} onChange={handleFilterChange} className='drop-field'>
              <option value="">All</option>
              <option value="800 sqft">800 sqft</option>
              <option value="1,500 sqft">1500 sqft</option>
              <option value="2,000 sqft">2000 sqft</option>
              <option value="3,000 sqft">3000 sqft</option>
              {/* Add more room size options */}
            </select>
          </label>
          <label className='flex flex-col gap-2'>
            Availability From:
            <input type="date" name="availabilityFrom" value={filters.availabilityFrom} onChange={handleFilterChange} className='date-field'/>
          </label>
          <label className='flex flex-col gap-2'>
            Minimum Rent:
            <input type="number" name="minRent" placeholder="0" value={filters.minRent} onChange={handleFilterChange} className='drop-field'/>
          </label>
          <label className='flex flex-col gap-2'>
            Maximum Rent:
            <input type="number" name="maxRent" placeholder="No Limit" value={filters.maxRent} onChange={handleFilterChange} className='drop-field'/>
          </label>
        </form>
        </div>

      </div>

{/* Loading State */}
      {loading && <div className='flex items-center justify-center'>
<Lottie animationData={animation} loop={true} />
      </div>}

{/* Show Data on UI */}
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12 my-14'>
      {
        !loading && (
          houses.map((house)=><ListedHouse
          key={house._id}
          house={house}
          ></ListedHouse>)
        )
      }
      </div>

{/* pagination */}
<div className='mt-10 text-center'>
                    {
                        pageNumbers.map(pageNumber => <button key={pageNumber} className={`border py-1 px-3 mr-2 rounded-md hover:bg-primary hover:text-white font-semibold my-5 ${currentPage === pageNumber ? 'selected' : " "}`} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</button>)
                    }
                </div>

</div>
</div>
        </section>
    );
};

export default Banner;