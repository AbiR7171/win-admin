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
// import { getTodos, postTodo } from '../my-api'

// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/verify",
        element:<Verify/>
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
