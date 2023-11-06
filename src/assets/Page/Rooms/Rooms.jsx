import { useLoaderData } from "react-router-dom";
import Navber from "../../Components/Header/Navber";
import './Rooms.css'
import RoomMap from "./RoomMap";
import Footer from "../../Components/Footer/Footer";
const Rooms = () => {
const roomData = useLoaderData();
    return (
      <div className="bg-[#010313] min-h-[100vh] dark:bg-[white]">
        <Navber></Navber>

        <div className=" mt-10 flex">
          <select className="select btn-two bg-[#03131F]  select-success  w-full mx-auto lg:max-w-[80%]">
            <option disabled selected>
              Pick your favorite anime
            </option>
            <option>Short Price</option>
            <option>Long price</option>
          </select>
        </div>
        <div className="grid w-full md:mb-32 mb-14 mt-10  lg:mt-20 lg:grid-cols-3    grid-cols-1    lg:w-[80%]  justify-center gap-8 mx-auto  ">
          {roomData.map((dataRoom) => (
            <RoomMap key={dataRoom.id} dataRoom={dataRoom}></RoomMap>
          ))}
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Rooms;