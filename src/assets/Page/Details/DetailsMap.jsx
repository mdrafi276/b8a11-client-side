import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const DetailsMap = ({ dataDitails }) => {
  const { user } = useContext(AuthContext);
  const { prices, Image, sitId, roomSize, Description, commonId, availables } =
    dataDitails;
  const userEmail = user.email;
  const bookData = {
    Description,
    commonId,
    roomSize,
    Image,
    availables,
    sitId,
    prices,
    userEmail,
  };
  const handleDetails = () => {
    fetch("http://localhost:5000/myBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Add Booking!",
            footer: '<a href="">Why do I have this issue?</a>',
          })(data);
        }
      });
  };
  return (
    <div>
      <div className="card  w-full lg:w-[350px]    hover:bg-gradient-to-t hover:from-[#10807a]  hover:to-[#03131F]  duration-300      text-white cursor-pointer bg-gradient-to-b from-[#156f83] to-[#030816] ">
        <figure className="h-300px">
          <img className="cover w-full" src={Image} alt="Shoes" />
        </figure>
        <div className="card-body  font-bold  ">
          <p className="h-one">{sitId}</p>
          <p className="h-one">Price par Night:-{prices}</p>
          <p className="h-one">Room Size:-{roomSize}</p>
          <p className="h-one">{Description}</p>
          <button className="btn-sm btn bg-gray-500 border-none  hover:bg-gray-400 text-white w-[50%] ">
            <span className="text-white">availables</span>
          </button>
        </div>
        <div className="flex text-center font-extrabold mt-0 pt-0 text-[14px] justify-around">
          <h1 className="h-one ">new booking date</h1>
          <input
            className=" bg-transparent text-center h-one"
            type="date"
            name=""
            id=""
          />
        </div>
        <div className=" mb-10  mt-1 text-center  px-2 md:px-5  ">
          <button
            onClick={handleDetails}
            className="btn w-full   text-xl text-center btn-three bg-transparent border-white"
          >
            Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsMap;
