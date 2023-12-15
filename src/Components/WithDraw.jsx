import React, { useState } from 'react';
import useAllPayment from '../hooks/useAllPayment';
import axios from 'axios';
import Swal from 'sweetalert2';
import bkash from "../assets/Bkash.png"
import nogod from "../assets/Nagad-Logo.png"
import rocket from "../assets/Rocket.png"
import upay from "../assets/Upay.png"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Icon } from '@iconify/react';



const WithDraw = () => { 
    const[allPayment, refetch]=useAllPayment();
    console.log(allPayment);

    const depositeData = allPayment?.filter(i => i.method === "withdraw");
    console.log(depositeData);

    const pendigData = depositeData?.filter(i => i.status === "pending");
    console.log(pendigData);
    
    const[copied, setCopied]=useState()


    const handleCopy =()=>{
      setCopied(true);
      if(copied){
         const Toast = Swal.mixin({
             toast: true,
             position: 'top-end',
             showConfirmButton: false,
             timer: 3000,
             timerProgressBar: true,
             didOpen: (toast) => {
               toast.addEventListener('mouseenter', Swal.stopTimer)
               toast.addEventListener('mouseleave', Swal.resumeTimer)
             }
           })
           
           Toast.fire({
             icon: 'success',
             title: 'copied'
           })
      }
    }

    const handleConfirmPaid = (item) =>{
                 
                    axios.patch(`https://win-bdt-server-new.vercel.app/confirm/${item._id}`)
                    .then(res =>{
                              console.log(res.data);
                              if(res.data.modifiedCount > 0){ 
                                refetch()
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                      toast.addEventListener('mouseenter', Swal.stopTimer)
                                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    }
                                  })
                                  
                                  Toast.fire({
                                    icon: 'success',
                                    title: `${item.id} is confirm paid`
                                  })
                              }
                    })
    }

    const handleVerify = (item) =>{
                 
        axios.patch(`https://win-bdt-server-new.vercel.app/verify/${item._id}`)
        .then(res =>{
                  console.log(res.data);
                  if(res.data.modifiedCount > 0){ 
                    refetch()
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: `${item.id} is sent to verify`
                      })
                  }
        })
}  


const handleFailed = (item) =>{
                 
    axios.patch(`https://win-bdt-server-new.vercel.app/failed/${item._id}`)
    .then(res =>{
              console.log(res.data);
              if(res.data.modifiedCount > 0){ 
                refetch()
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'error',
                    title: `${item.id} is Failed unpaid `
                  })
              }
    })
}
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4'>
            {
                pendigData?.map(data =>{
                     return       <div className=" bg-white p-4 shadow-md rounded-md">
                       <div className="flex justify-start">
                      <img src={
                                    
                                    data?.paymentMethod === "bkash" && bkash || 
                                     data?.paymentMethod === "nogod" && nogod ||
                                     data?.paymentMethod === "upay" && upay   ||
                                     data?.paymentMethod === "rocket" && rocket
                                    } className='w-20' alt="" />
                         <div className="flex justify-between  w-full py-3">
                         <div className="pl-4 text-black">
                                 <h2 className="font-semibold flex items-center "><span id="Account-Numbar">{data?.id}</span>  <CopyToClipboard text={data?.id}>
                           <Icon onClick={handleCopy} className='text-green-500 ms-2 mt-1 ' icon="akar-icons:copy" />
                           </CopyToClipboard></h2>
                                 <h2 className="font-semibold"><span id="Account-Numbar">{data?.number}</span></h2>
                             </div>
                             <div className="pl-4 text-black">
                                 <h2 className="font-semibold"> <span id="Amount">{data?.amount}</span> TK.</h2>
                                 <h2 className="font-semibold"> <span id="Trx-Id">{data?.trx}</span></h2>
                             </div>
                         </div>
                     
                     </div>
                     
                     <div className="button-box flex space-x-2 justify-between py-4">
                         <button onClick={()=>handleConfirmPaid(data)}  className="py-2 text-center w-2/4 rounded text-white font-medium drop-shadow bg-green-700	">Approve</button>
                         <button onClick={()=> handleVerify(data)}  className="py-2 px-4 text-center w-1/3 rounded text-white font-medium drop-shadow bg-yellow-500	">Verify</button>
                         <button onClick={()=> handleFailed(data)}  className="py-2 text-center w-2/4 rounded text-white font-medium drop-shadow bg-red-600	">Reject</button>
                     </div>
     
                     
                 </div>
                })
            }
        </div>
    );
};

export default WithDraw;