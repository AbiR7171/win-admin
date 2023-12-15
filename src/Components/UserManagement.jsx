import axios from 'axios';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const UserManagement = () => {

    const searchRef = useRef();
    const userNameRef = useRef();
    const pinNumberRef = useRef();
    const accountNumberRef = useRef();
    const[searchUser, setSearchUser]=useState({})
    const [edit, setEdit]=useState(false)


    const handleUserSearch = ()=>{ 

              axios.get(`https://win-bdt-server-new.vercel.app/searchUer?id=${searchRef.current.value}`)
              .then(res =>{
                         console.log(res.data);
                         setSearchUser(res.data)
                         if(res.data.modifiedCount >0){
                            
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'user data change',
                                showConfirmButton: false,
                                timer: 1500
                              })
                         }

              })
        

    }


    const handleChangeData = () =>{
        
                 axios.put(`https://win-bdt-server-new.vercel.app/editUserInfo/${searchUser?._id}`, {
                     name: userNameRef.current.value || searchUser?.name,
                     number:accountNumberRef.current.value || searchUser?.number,
                     password: pinNumberRef.current.value || searchUser?.password,
                 })
                 .then(res =>{
                             console.log(res.data);
                             if(res.data.modifiedCount > 0){
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
                                title: 'User Info change'
                              })
                             }

                 })
    }


    const handleDeleteUser = (user) => {
               
                 axios.delete(`https://win-bdt-server-new.vercel.app/userDelete/${user._id}`)
                 .then(res =>{
                           console.log(res.data);
                           if(res.data.deletedCount > 0){
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
                              title: 'User deleted'
                            })
                           }
                 })
    }
    return (
        <div className='mt-10'>
            <div className="container mx-auto p-6 bg-gray-200 shadow-md rounded-lg">
  <h2 className="text-2xl font-semibold mb-4 text-black">User Management Dashboard</h2>
  <div className="">
    <div className="flex justify-between border border-green-500 rounded ">
      <input
       
        ref={searchRef}
        type="text"
        placeholder="Enter User ID ..."
        className="py-2 px-3 rounded-l w-full border border-gray-300 focus:outline-none bg-white"
      />
      <button onClick={handleUserSearch} className="py-2 px-4 bg-green-500 text-white rounded-r hover:bg-green-600">
        Search
      </button>
    </div>
    <div className="flex justify-between space-x-2 w-full mt-4 ">
      <div className="w-1/3 bg-white rounded shadow">
        <h2 className="text-base font-semibold rounded-t text-center text-white bg-green-500">
          User Old Data
        </h2>
        <div className="p-2 text-gray-600">
          <p>{searchUser?.name}</p>
          <p>{searchUser?.number}</p>
          <p>{searchUser?.password}</p>
        </div>
      </div>
      <div className="w-2/3 bg-white rounded shadow">
        <h2 className="text-base font-semibold rounded-t text-center text-white bg-green-500">
          User New Data
        </h2>
        <div className="p-2">
          <div>
            <label
              htmlFor="user-name"
              className="block text-sm font-medium text-gray-700 py-2"
            >
              User Name
            </label>
            <input
            ref={userNameRef}
              defaultValue={edit ? searchUser?.name : ""}
              type="text"
              id="user-name"
              className="mt-1 p-2 block w-full rounded border-gray-400 bg-gray-100 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="pin-number"
              className="block text-sm font-medium text-gray-700 py-2"
            >
              Pin Number
            </label>
            <input
            ref={pinNumberRef}
            defaultValue={edit ? searchUser?.password : ""}
              type="password"
              id="pin-number"
              className="mt-1 p-2 block w-full rounded border-gray-400 bg-gray-100 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="account-number"
              className="block text-sm font-medium text-gray-700 py-2"
            >
              Account Number
            </label>
            <input
            ref={accountNumberRef}
            defaultValue={edit ? searchUser?.number : ""}
              type="text"
              id="account-number"
              className="mt-1 p-2 block w-full rounded border-gray-400 bg-gray-100 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="button-box flex space-x-2 justify-end py-4">
      <button
        onClick={()=>setEdit(true)}
        className="py-2 px-3 text-center  rounded text-white font-medium drop-shadow bg-yellow-700	"
      >
        Edit Data
      </button>
      <button
      onClick={handleChangeData}
      
        className="py-2 px-3 text-center  rounded text-white font-medium drop-shadow bg-green-700	"
      >
        Save Change
      </button>
      <button
          onClick={()=>handleDeleteUser(searchUser)}
        className="py-2 px-3 text-center  rounded text-white font-medium drop-shadow bg-red-600	"
      >
        Delete
      </button>
    </div>
  </div>
</div>

        </div>
    );
};

export default UserManagement;