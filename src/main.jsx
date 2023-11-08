import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Provider/AuthProvider";
import Login from "./assets/Page/Login/Login";
import Register from "./assets/Page/Register/Register";
import Home from "./assets/Page/Home/Home";
import Leyout from "./Leyout/Leyout";
import Rooms from "./assets/Page/Rooms/Rooms";
import MyBooking from "./assets/Page/MyBooking/MyBooking";
import PrivetRoute from "./Provider/PrivetRoute";
import Details from "./assets/Page/Details/Details";
import UpdateBooking from "./assets/Page/MyBooking/UpdateBooking";
import ErrorPage from "./assets/Components/Error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Leyout></Leyout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () => fetch("https://hotel-server-theta.vercel.app/rooms"),
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
        path: "room/:id",
        element: <Details></Details>,
        // loader: ({params}) => fetch(`https://hotel-server-theta.vercel.app/rooms/${params.id}`),
      },
      {
        path: "/roomSit/:id",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://hotel-server-theta.vercel.app/rooms/${params.id}`),
      },
      {
        path: "/updateBooking/:id",
        element: (
          <PrivetRoute>
            <UpdateBooking></UpdateBooking>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://hotel-server-theta.vercel.app/update/${params.id}`),
      },
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
