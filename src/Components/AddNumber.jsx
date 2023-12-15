import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import useBank from '../hooks/useBank';
import bkash from "../assets/Bkash.png"
import nogod from "../assets/Nagad-Logo.png"
import rocket from "../assets/Rocket.png"
import upay from "../assets/Upay.png"


const AddNumber = () => {
           const[bank, refetch]=useBank();
           const[id, setId]=useState(null);

           const numberRef = useRef()
            
            const handleActive = card =>{
                
                            axios.patch(`https://win-bdt-server-new.vercel.app/bankStatusActive/${card._id}`)
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
                                        title: `${card.method} is activate`
                                      })
                                   }
                            })
            }
            const handleDeactivate = card =>{
                
                            axios.patch(`https://win-bdt-server-new.vercel.app/bankStatusDeactivate/${card._id}`)
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
                                        title: `${card.method} is deactivate`
                                      })
                                   }
                            })
            }


            const handleChangeNumber = e =>{

                    e.preventDefault()
           

                         console.log(e.target.number.value);
                
                            axios.put(`https://win-bdt-server-new.vercel.app/changeNumber/${id}`, {
                                       number: e.target.number.value
                            })
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
                                        title: `Number is change`
                                      })
                                   }
                            })
            }


    return (
        <div className='flex flex-col justify-center items-center lg:p-3 rounded bg-[#5a5656] px-10 py-2 h-[100vh] '> 

        {
           bank?.map(n => {
                    return  <div key={n._id} className='flex items-center gap-2 mt-10 lg:w-1/2  justify-between'>
                       <img src={n?.method === "bkash" && bkash ||
                    n?.method === "nogod" && nogod ||
                    n?.method === "rocket" && rocket ||
                    n?.method === "upay" && upay} className='lg:w-20 w-16 ' alt="" />
                       <form onSubmit={handleChangeNumber} className='lg:flex  items-center gap-2'>
            
                    <input  ref={numberRef}  defaultValue={n.number} type="text"  name='number' className="input input-bordered input-secondary lg:w-[500px] w-[300px]  max-w-xs bg-gray-300" />
                        
                    
                           <div className='flex gap-2 mt-2 items-center justify-between me-20 '>
                           <button onClick={()=>handleActive(n)} className={`btn font-semibold ${n.status=== "active" ? "bg-green-500": "bg-green-600" } border-0 text-white`}>Active</button> 
                            <button onClick={()=> handleDeactivate(n)} className={`btn text-white font-semibold ${n.status=== "deactivate" ? "bg-red-200": "bg-red-600" } border-0 text-white'`}>Deactivate</button>
                            <button type='submit' onClick={()=> setId(n._id)} className={`btn font-semibold text-white bg-yellow-400  border-0 text-white'`}>Update</button>
                           </div>
                           </form>
                      
                 </div>
           })
        }
        </div>
    );
};

export default AddNumber;