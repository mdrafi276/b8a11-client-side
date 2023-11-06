import { Link } from "react-router-dom";

 
const RoomMap = ({dataRoom}) => {
  
  
    const {roomImage, roomId, price} =dataRoom;
    return (
      <div>
        <div className="card  w-full lg:w-[350px] lg:h-[500px] bg-[#03191E]  hover:bg-gradient-to-b hover:from-[#287a85]  hover:to-[#03131F]  bg-gradient-to-b from-[#21646d]  to-[#010611] hover:shadow-sky-400 shadow-[0_0_30px_#00000028] duration-300      text-white cursor-pointer ">
          <figure className="h-300px">
            <img className="cover w-full" src={roomImage} alt="Shoes" />
          </figure>
          <div className="card-body text-2xl font-bold h-one text-center">
            <p>Price: {price}</p>
          </div>
          <div className=" mb-10  text-center  px-2 md:px-5  ">
            <Link to={`/roomSit/${roomId}`}>
              <button className="btn w-full   text-xl text-center btn-three bg-transparent border-white">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default RoomMap;