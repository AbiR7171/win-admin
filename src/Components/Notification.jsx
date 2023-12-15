import axios from 'axios';
import moment from 'moment/moment';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const Notification = () => { 
     const notificationRef = useRef();
     const titleRef = useRef();

      const handleSentNotification = () =>{

              axios.post("https://win-bdt-server-new.vercel.app/notification", {
                 message: notificationRef.current.value,
                 date: moment().format("DD-MM-YYYY"),
                 time: moment().format("hh:mm A"),
                  title: titleRef.current.value
              })
              .then(res =>{
                  console.log(res.data);
                  if(res.data.insertedId){
                     
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        }
                      });
                      Toast.fire({
                        icon: "success",
                        title: "Notification sent  successfully"
                      });
                  }
              })
      }

    return (
        <div>
             <div className="container mx-auto mt-8">
      <form className="max-w-md  lg:max-w-2xl mx-auto bg-green-500 p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2 "  htmlFor="message">
            Send Notification to user
          </label> 
           <input ref={titleRef} type="text" className='w-full mb-2 rounded h-10 text-white px-5' placeholder=' Write title here' />
          <textarea
          ref={notificationRef}
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-white"
            id="message"
            placeholder="Type your message here..."
            rows="4"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
          onClick={handleSentNotification}
            className="bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Notification;