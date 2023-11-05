import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import profile from '../../icon/user.png'
import './Navber.css'
import Headroom from "react-headroom";
const Navber = () => {

    const [mode, setMode] = useState("light");
    const handleTheme = () => {
      console.log("things");
      const html = document.documentElement;
      if (mode == "light") {
        html.classList.remove("light");
        html.classList.add("dark");
        setMode("dark");
        localStorage.setItem("mode", "dark");
      } else {
        html.classList.remove("dark");
        html.classList.add("light");
        setMode("light");
        localStorage.setItem("mode", "light");
      }
    };

    useEffect(() => {
      const currentMode = localStorage.getItem("mode") || "light";
      setMode(currentMode);
      const html = document.documentElement;
      html.classList.add(currentMode);
    }, []);

    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () => {
      logOut()
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: "Successfully SignOut From Your Account",
            icon: "success",
            confirmButtonText: "Cool",
          });
        })
        .catch();
    };

    const navLink = (
      <>
        <li>
          <NavLink
            className={({ isActive, isLoading }) =>
              isLoading
                ? "loading"
                : isActive
                ? "text-black bg-white dark:bg-black dark:text-white hover:text-white "
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isLoading }) =>
              isLoading
                ? "loading"
                : isActive
                ? "text-black bg-white dark:bg-black dark:text-white hover:text-white "
                : ""
            }
            to="/rooms"
          >
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isLoading }) =>
              isLoading
                ? "loading"
                : isActive
                ? "text-black bg-white dark:bg-black hover:text-yellow-300 dark:text-white"
                : ""
            }
            to="/myBooking"
          >
            My Booking
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isLoading }) =>
              isLoading
                ? "loading"
                : isActive
                ? "text-black bg-white dark:bg-black hover:text-yellow-300 dark:text-white"
                : ""
            }
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </>
    );
    return (
      <Headroom>
        <div className="backdrop-blur sticky dark:text-black  z-20 top-0 ">
          <div
            id="header-nav"
            className="  text-white dark:bg-white bg-transparent  "
          >
            <div className="  md:-w-full lg:max-w-6xl mx-auto">
              <div className="navbar rounded-lg">
                <div className="navbar-start">
                  <div className="dropdown">
                    <label
                      tabIndex={0}
                      className="btn dark:text-black btn-ghost  lg:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm text-white dark:text-white dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {navLink}
                    </ul>
                  </div>
                  <h1
                    id="title-h1"
                    className="lg:text-2xl gap-2 flex items-center md:text-xl text-[15px] "
                  >
                    <span>
                      <img
                        className="w-10 rounded-full"
                        src="https://source.unsplash.com/300x300/?logo"
                        alt=""
                      />
                    </span>
                    <span className="dark:text-black">HotelHub</span>
                  </h1>
                </div>
                <div className="navbar-center hidden   lg:flex">
                  <ul className="menu menu-horizontal dark:text-black px-1">
                    {navLink}
                  </ul>
                </div>
                <div className="navbar-end ">
                  <p className="dark:text-black md:pr-4 pr-1 ">
                    <label className="swap swap-rotate">
                      <input
                        type="checkbox"
                        onChange={handleTheme}
                        checked={mode === "light" ? false : true}
                      />

                      <svg
                        className="swap-on fill-current  md:w-10 md:h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                      </svg>

                      <svg
                        className="swap-off fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                      </svg>
                    </label>
                  </p>
                  {user && (
                    <p className="md:mr-5 md:block hidden text-[10px] dark:text-black md:text-[12px] lg:text-[15px] font-bold">
                      {user.displayName}
                    </p>
                  )}
                  <label
                    tabIndex={0}
                    className=" md:mr-1 btn btn-ghost btn-circle avatar"
                  >
                    <img
                      className="rounded-full "
                      src={user?.photoURL ? user.photoURL : profile}
                      alt=""
                    />
                  </label>

                  {user ? (
                    <div>
                      <button
                        onClick={handleSignOut}
                        className="btn btn-two backdrop-blur dark:bg-black dark:hover:bg-black dark:text-white dark:hover:text-white  bg-transparent  text-white hover:bg-white hover:text-black "
                      >
                        LogOut
                      </button>
                    </div>
                  ) : (
                    <Link to="/login">
                      <button className="btn  btn-two backdrop-blur dark:bg-black dark:hover:bg-black dark:text-white dark:hover:text-white  bg-transparent  text-white hover:bg-white hover:text-black ">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Headroom>
    );
};

export default Navber;