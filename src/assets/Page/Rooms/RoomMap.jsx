import { NavLink } from "react-router-dom";

 
const RoomMap = ({dataRoom}) => {
  
  
    const {roomImage, roomId, price} =dataRoom;
    return (
      <div>
        <div className="card  w-full lg:w-[350px] lg:h-[500px] bg-[#03191E]  hover:bg-gradient-to-b hover:from-[#287a85]  hover:to-[#03131F]  bg-gradient-to-b from-[#21646d]  to-[#010611] hover:shadow-sky-400 shadow-[0_0_30px_#00000028] duration-300      text-white cursor-pointer ">
          <figure className="h-300px">
            <img className="cover w-full" src={roomImage} alt="Shoes" />
          </figure>
          <div className="card-body text-2xl font-bold  text-center">
            <p className="h-one">Price: {price}</p>
             <button className='btn-sm btn mx-auto  bg-gray-500 border-none  hover:bg-gray-400 text-white w-[50%] '><span className='text-white'>availables</span></button>
         
          </div>
          <div className=" mb-10  text-center  px-2 md:px-5  ">
            <NavLink to={`/roomSit/${roomId}`}>
              <button className="btn w-full   text-xl text-center btn-three bg-transparent border-white">
                Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default RoomMap;