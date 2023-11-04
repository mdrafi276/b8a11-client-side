import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
 
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from './Provider/AuthProvider';
import Login from './assets/Page/Login/Login';
import Register from './assets/Page/Register/Register';
import Home from './assets/Page/Home/Home';
import Leyout from './Leyout/Leyout';
import Rooms from './assets/Page/Rooms/Rooms';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Leyout></Leyout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/rooms',
        element:<Rooms></Rooms>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
