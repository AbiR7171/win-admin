import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useAllPayment = () => {
     const {data:allPayment=[], refetch}=useQuery({
        queryKey:["trx"],
        queryFn:async()=>{
             const res = await axios.get('https://win-bdt-server-new.vercel.app/trxs');
             return res.data
        }
     })
     return[allPayment, refetch]
};

export default useAllPayment;