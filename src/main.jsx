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
import MyBooking from './assets/Page/MyBooking/MyBooking';
import PrivetRoute from './Provider/PrivetRoute';
import Details from './assets/Page/Details/Details';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Leyout></Leyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/rooms",
        element: (
          <PrivetRoute>
            <Rooms></Rooms>
          </PrivetRoute>
        ),
        loader: () => fetch("http://localhost:5000/rooms")
      },
      {
        path: "/myBooking",
        element: (
          <PrivetRoute>
            <MyBooking></MyBooking>
          </PrivetRoute>
        ),
      },
      {
        path:"roomSit/:id",
        element:<Details></Details>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
