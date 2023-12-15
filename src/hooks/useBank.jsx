import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';


const useBank = () => {
    const {data:bank=[], refetch}=useQuery({
        queryKey:["trx"],
        queryFn:async()=>{
             const res = await axios.get('https://win-bdt-server-new.vercel.app/bank');
             return res.data
        }
     })
     return[bank, refetch]
};

export default useBank;