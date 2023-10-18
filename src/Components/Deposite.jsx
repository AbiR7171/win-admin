import React from 'react';
import useAllPayment from '../hooks/useAllPayment';
import axios from 'axios';
import Swal from 'sweetalert2';

const Deposite = () => { 
    const[allPayment, refetch]=useAllPayment();
    console.log(allPayment);

    const depositeData = allPayment?.filter(i => i.method === "deposit");
    console.log(depositeData);

    const pendigData = depositeData?.filter(i => i.status === "pending");
    console.log(pendigData);


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
        <div className='grid grid-cols-2 gap-4'>
            {
                pendigData?.map(data =>{
                     return <div className='grid grid-cols-3 gap-2 bg-gray-100 text-black rounded p-3 h-44 justify-center items-center'>

                            <div className='space-y-3'>
                                  <p>Acc: {data?.id}</p>
                                  <p>Time: {data?.date}</p>
                                  <button onClick={()=>handleConfirmPaid(data)} className=' p-3 rounded bg-orange-500 text-white'>Confirm Paid</button>
                            </div>

                            <div className='space-y-3'>
                                   <p>{data?.paymentMethod}</p>
                                   <p>Trx: {data?.trx}</p>
                                   <button onClick={()=>handleVerify(data)} className=' p-3 rounded bg-orange-500 text-white'>Verify</button>
                            </div>

                            <div className='space-y-3'>
                                    <p>Amount: {data?.amount}</p>
                                    <p>Order NO: {data?._id}</p>
                                    <button onClick={()=> handleFailed(data)} className=' p-3 rounded bg-orange-500 text-white'>Failed Unpaid</button>
                            </div>
                     </div>
                })
            }
        </div>
    );
};

export default Deposite;