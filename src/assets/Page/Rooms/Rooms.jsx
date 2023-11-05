import { useLoaderData } from "react-router-dom";
import Navber from "../../Components/Header/Navber";
import './Rooms.css'
import RoomMap from "./RoomMap";
const Rooms = () => {
  const roomData = useLoaderData();
 
  

 
  
    return (
      <div className="bg-[#010313] min-h-[100vh] dark:bg-[white]">
        <Navber></Navber>
        <div className="grid w-full  lg:mt-20 lg:grid-cols-3    grid-cols-1    lg:w-[80%]  justify-center gap-8 mx-auto  ">
       
         {
          roomData.map((dataRoom) =>(
            <RoomMap key={dataRoom.id} dataRoom={dataRoom} ></RoomMap>
          ))
         }
        </div>
      </div>
    );
};

export default Rooms;