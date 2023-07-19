import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const useBookings = () => {
    const email = localStorage.getItem("email")
    const token = localStorage.getItem("token")
    const{data: bookings =[], refetch}=useQuery({
        queryKey:["houses-by" , email],
        queryFn: async()=>{
            const res = await axios.get(`https://house-hunter-server-seven.vercel.app/bookings?email=${email}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          return res.data;
        }
    })
    return[bookings,refetch]
};

export default useBookings;