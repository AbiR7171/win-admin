import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from './Layouts/Layouts.jsx';
import Home from './Components/Home.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Verify from './Components/Verify.jsx';
import UserManagement from './Components/UserManagement.jsx';
import AddNumber from './Components/AddNumber.jsx';
import Filter from './Components/Filter.jsx';
import Login from './Components/Login.jsx';
import AllUser from './Components/AllUser.jsx';
import Notification from './Components/Notification.jsx';
import HandleNotification from './Components/HandleNotification.jsx';
// import { getTodos, postTodo } from '../my-api'

// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
        path:"/",
        element: <Login/>
  },
  {
    path: "/main",
    element: <Layouts/>,
    children:[
      {
        path:"/main",
        element:<Home/>
      },
      {
        path:"/main/verify",
        element:<Verify/>
      },
      {
        path:"/main/userManagment",
        element: <UserManagement/>
      },
      {
         path:"/main/addNumber",
         element:<AddNumber/>
      },
      {
        path:"/main/allUser",
        element:<AllUser/>
     },
      {
        path:"/main/sendNotification",
        element:<Notification/>
     },
      {
         path:"/main/table",
         element:<Filter/>
      }, {
        path:'/main/handleNotification',
        element: <HandleNotification/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>,
)
