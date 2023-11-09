import { useLoaderData } from "react-router-dom";
import Navber from "../../Components/Header/Navber";
import "./Rooms.css";
import RoomMap from "./RoomMap";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
const Rooms = () => {
  const [sortvalue, setsortValue] = useState("asc");
  const handleSort = (e) => {
    const sorting = e.target.value;
    if (sorting === "High to Low") {
      setsortValue("desc");
    } else if (sorting === "Low to High") {
      setsortValue("asc");
    }
  };
  const [roomData, setRooms] = useState();
  useEffect(() => {
    axios
      .get(`https://hotel-server-theta.vercel.app/rooms?sortvalue=${sortvalue}`)
      .then((res) => {
        setRooms(res.data);
      });
  }, [sortvalue]);
  console.log(sortvalue);

  return (
    <div className="bg-[#010313] min-h-[100vh] dark:bg-[white]">
      <Navber></Navber>

      <div className=" mt-10 flex">
        <select
          onChange={handleSort}
          className="select btn-two bg-[#03131F]  select-success  w-full mx-auto lg:max-w-[80%]"
        >
          <option disabled selected>
            Pick your favorite anime
          </option>
          <option>High to Low</option>
          <option>Low to High </option>
        </select>
      </div>
      <div className="grid w-full md:mb-32 mb-14 mt-10  lg:mt-20 lg:grid-cols-3    grid-cols-1    lg:w-[80%]  justify-center gap-8 mx-auto  ">
        {roomData?.map((dataRoom) => (
          <RoomMap key={dataRoom.id} dataRoom={dataRoom}></RoomMap>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Rooms;
