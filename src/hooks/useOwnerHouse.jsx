import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useOwnerHouse = () => {
    const email = localStorage.getItem("email")
    const token = localStorage.getItem("token")
    console.log(email);
    const{data: ownerHouses =[], refetch}=useQuery({
        queryKey:["houses-by" , email],
        queryFn: async()=>{
            const res = await axios.get(`http://localhost:5000/houses-by?email=${email}`, {
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