import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

const AllUser = () => {
    const[allUser, setAllUser]=useState([])


    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostPerPage]=useState(50);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost =  allUser?.slice(firstPostIndex, lastPostIndex);

      useEffect(()=>{
                axios.get("https://win-bdt-server-new.vercel.app/allUser")
                .then( res =>{
                     console.log(res.data);
                     setAllUser(res.data);
                     
                })
      })
    return (
      <div className="bg-[#5a5656]"> 
             
      <div className="overflow-x-auto">
      <section id="historyTab" className="py-3" >
<div className="container Tab-Contain lg:px-4 mx-auto md:px-4 lg:w-full lg:mx-auto ">
<table className="table-auto w-full">
    <thead className="border-b-2 border-t-2 border-t-gray-500 border-b-gray-500 ">
      
        <tr className="pt-4 border-b-2 border-gray-500 bg-gray-600">
            <th className=" px-2  text-white border-r-2 border-gray-400 w-1/6">#</th>
           
            <th className=" px-2  text-white border-r-2 border-gray-400 ">Name</th>
            <th className={` px-2  text-white border-r-2 border-gray-400 `}>Number</th>
  
            <th className=" px-2  text-white ">Date</th> 
        </tr>

  
  
    </thead>

    
    <tbody >
   {
      currentPost.map((data, index) =>
           
           <tr key={data._id} class="border-b border-dashed  border-gray-500 text-white">
           <td className="px-2 py-2 text-center">{index}</td>
        
         <td className={`px-2 py-2 ${data.method === "withdraw" && "text-red-600"} `}>{data?.name}</td>
         <td className={`px-2 py-2 ${data.method === "withdraw" && "text-red-600"} text-center`}>{data?.number}</td>
           <td className=" py-2">{data?.date?.split(' ')[0]}</td>
       </tr>
      ) 
   }

    <Pagination  totalPosts={allUser?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} /> 
  
     

    </tbody>

</table> 


{/* <div className="text-center pt-4"><p class="text-gray-200 text-sm">- End Of Page -</p></div> */}
</div>
</section> 

  
      </div>
  
  </div>
    );
};

export default AllUser;