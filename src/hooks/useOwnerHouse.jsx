import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useOwnerHouse = () => {
    const email = localStorage.getItem("email")
    const token = localStorage.getItem("token")
    const{data: ownerHouses =[], refetch}=useQuery({
        queryKey:["houses-by" , email],
        queryFn: async()=>{
            const res = await axios.get(`https://house-hunter-server-seven.vercel.app/houses-by?email=${email}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          return res.data;
        }
    })
    return[ownerHouses,refetch]
};

export default useOwnerHouse;