import React, { useEffect, useRef, useState } from "react";
import useAllPayment from "../hooks/useAllPayment";
import axios from "axios";

const Filter = () => { 
    
    const[allPayment, setAllPayment]=useState([]);

    const [filter, setFilter]=useState()
 


    const idRef = useRef()
    const dateRef = useRef()
    const methodRef = useRef()
    const statusRef = useRef()
           



        useEffect(()=>{
            
        },[filter])

        const handleSearch = ()=>{ 

           

             setFilter(idRef.current.value)   ;
       

             axios.get(`https://win-bdt-server-new.vercel.app/trx?id=${idRef.current.value}`)
            .then(res =>{
                console.log(res.data);
                setAllPayment(res.data)
            })


     }
    

  return (
    <div className="bg-[#5a5656]">
      <div className="mb-2 bg-gray-200 p-2 flex  justify-end gap-2">

            

             <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
          name="filter"
          ref={idRef}
        />


    

    

         <button onClick={handleSearch}  className="btn btn-error"> Search</button>
             
      </div> 

             
      <div className="overflow-x-auto">
      <section id="historyTab" className="py-3" >
<div className="container Tab-Contain lg:px-4 mx-auto md:px-4 lg:w-full lg:mx-auto ">
<table className="table-auto w-full">
    <thead className="border-b-2 border-t-2 border-t-gray-500 border-b-gray-500 ">
      
        <tr className="pt-4 border-b-2 border-gray-500 bg-gray-600">
            {/* <th className=" px-2  text-white border-r-2 border-gray-400 w-1/6">#</th> */}
           
            <th className=" px-2  text-white border-r-2 border-gray-400 ">User Id</th>
            <th className={` px-2  text-white border-r-2 border-gray-400 `}>Number</th>
            <th className={` px-2  text-white border-r-2 border-gray-400 `}>Amount</th>
            {/* <th className={` px-2  text-white border-r-2 border-gray-400 `}>Method</th> */}
            {/* <th className={` px-2  text-white border-r-2 border-gray-400 `}>Date</th> */}
  
  
            <th className=" px-2  text-white ">Date</th> 
        </tr>

  
  
    </thead>

    
    <tbody >
   {
      allPayment.map((data, index) =>
           
           <tr key={data._id} class="border-b border-dashed  border-gray-500 text-white">
           {/* <td className="px-2 py-2 text-center">{index}</td> */}
        
         <td className={`px-2 py-2 `}>{data?.id}</td>
         <td className={`px-2 py-2  text-center`}>{data?.number}</td>
         <td className={`px-2 py-2 ${data.method === "withdraw" && "text-red-600"}  text-center`}>{data?.amount}</td>
         {/* <td className={`px-2 py-2  text-center`}>{data?.method}</td> */}
           <td className=" py-2">{data?.date?.split(' ')[0]}</td>
       </tr>
      ) 
   }

    {/* <Pagination  totalPosts={allUser?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />  */}
  
     

    </tbody>

</table> 


{/* <div className="text-center pt-4"><p class="text-gray-200 text-sm">- End Of Page -</p></div> */}
</div>
</section> 

  
      </div>
    </div>
  );
};

export default Filter;
