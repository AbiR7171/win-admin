import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const HandleNotification = () => {

    const[allNotification, setAllNotification]=useState([])


     useEffect(()=>{
                     axios.get('https://win-bdt-server-new.vercel.app/allNotification')
                     .then(res =>{
                              console.log(res.data);
                              setAllNotification(res.data)
                     })
     },[allNotification])


     const handleDelete = (item ) =>{
         
                  axios.delete(`https://win-bdt-server-new.vercel.app/deleteNotification/${item._id}`)
                  .then(res =>{
                             console.log(res.data);
                             if(res.data.deletedCount){
                                Swal.fire({
                                    title: "Good job!",
                                    text: "Notification Deleted!",
                                    icon: "error"
                                  });
                             }
                  })
     }

    return (
        <div className="bg-[#5a5656]"> 
             
        <div className="overflow-x-auto">
        <section id="historyTab" className="py-3" >
  <div className="container Tab-Contain lg:px-4 mx-auto md:px-4 lg:w-full lg:mx-auto ">
  <table className="table-auto w-full">
      <thead className="border-b-2 border-t-2 border-t-gray-500 border-b-gray-500 ">
        
          <tr className="pt-4 border-b-2 border-gray-500 bg-gray-600">
              {/* <th className=" px-2  text-white border-r-2 border-gray-400 w-1/6">#</th> */}
             
              <th className=" px-2  text-white border-r-2 border-gray-400 ">Title</th>
              <th className={` px-2  text-white border-r-2 border-gray-400 `}>Message</th>
    
              <th className=" px-2  text-white  ">Delete</th> 
          </tr>
  
    
    
      </thead>
  
      
      <tbody >
     {
        allNotification.map((data, index) =>
             
             <tr key={data._id} class="border-b border-dashed  border-gray-500 text-white">
             {/* <td className="px-2 py-2 text-center">{index}</td> */}
          
           <td className={`px-2 py-2 ${data.method === "withdraw" && "text-red-600"} `}>{data?.title}</td>
           <td className={`px-2 py-2 ${data.method === "withdraw" && "text-red-600"} text-center`}>{data?.message}</td>
             <td className="py-2"><button onClick={()=>handleDelete(data)} className='bg-red-500 px-3 py-2 lg:px-10 lg:py-3 rounded shadow-2xl'>Delete</button></td>
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

export default HandleNotification;