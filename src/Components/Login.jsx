import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";
import logo from "../assets/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleForm = (e) => {
    // console.log("clicket");

    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

        if (email === "admin200203@gmail.com" && password === "P200203#byui9") {
          navigate("/main");
        }else{
          Swal.fire({
           
            text: "Wrong User",
            icon: "error"
          });
        }
      
  };
  return (
  <div className="loginBg flex  justify-center items-center ">
 <div className='flex  justify-center items-center '>
            

            <div  className="container mx-auto p-8  bg-white shadow-md  rounded-lg w-96">
            <div className='flex justify-center items-center '>
            <div className='w-10/12'> <a href="https://www.winbdt.com/"> <img src={logo} alt="" className="w-9/12 lg:w-2/6"/></a></div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-black">Login</h2>
            <form onSubmit={handleForm}  className="space-y-4">
            <div className="w-full">
                <label  className="block text-sm font-medium text-gray-700">User Name</label>
                <input type="email" id="login-username" name="email" className="mt-1 p-2 w-full border rounded-md inputss"/>
            </div>
            <div className="w-full">
                <label  className="block text-sm font-medium text-gray-700">Pin Number</label>
                <input type="password" id="login-pin" name="password" className="mt-1 p-2 w-full border rounded-md"/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
            </form>
            
            </div>
            
            
            </div>


  </div>
  );
};

export default Login;

{
  /* <div className='flex gap-2 justify-center items-center mt-4'>
            

<div  className="container mx-auto p-8  bg-white shadow-md  rounded-lg w-96">
<div className='flex justify-center items-center '>
<div className='w-10/12'> <a href="https://www.winbdt.com/"> <img src={logo} alt="" className="w-9/12 lg:w-2/6"/></a></div>
</div>
<h2 className="text-2xl font-semibold mb-4 text-black">Login</h2>
<form onSubmit={handleForm}  className="space-y-4">
<div className="w-full">
    <label  className="block text-sm font-medium text-gray-700">User Name</label>
    <input type="email" id="login-username" name="email" className="mt-1 p-2 w-full border rounded-md inputss"/>
</div>
<div className="w-full">
    <label  className="block text-sm font-medium text-gray-700">Pin Number</label>
    <input type="password" id="login-pin" name="password" className="mt-1 p-2 w-full border rounded-md"/>
</div>
<button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
</form>

</div>


</div> */
}
