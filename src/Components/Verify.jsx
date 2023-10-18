import React from 'react';
import useAllPayment from '../hooks/useAllPayment';

const Verify = () => {

    const [allPayment]=useAllPayment();
    const verify = allPayment?.filter(i => i.neWStatus);
    console.log(verify);
    return (
        <div className='grid grid-cols-2 gap-2 mt-10'>

            {
                verify?.map(data => {
                    return <div className='grid grid-cols-3 gap-2 bg-gray-100 text-black rounded p-3 justify-center '>

                    <div className='space-y-3 '>
                          <p>Acc: {data?.id}</p>
                          <p>Time: {data?.date}</p>
                          <button onClick={()=>handleConfirmPaid(data)} className='mt-auto p-3 rounded bg-orange-500 text-white'>Confirm Paid</button>
                    </div>

                    <div className='space-y-3'>
                           <p>{data?.paymentMethod}</p>
                          
                           <button onClick={()=>handleVerify(data)} className=' p-3 rounded bg-orange-500 text-white'>Verify</button>
                    </div>

                    <div className='space-y-3'>
                            <p>Amount: {data?.amount}</p> 
                            {/* <p>{data?.method}</p> */}
                            <p>Order NO: {data?._id}</p>
                            <button onClick={()=> handleFailed(data)} className=' p-3 rounded bg-orange-500 text-white'>Failed Unpaid</button>
                    </div>
             </div>
                })
            }
            
        </div>
    );
};

export default Verify;