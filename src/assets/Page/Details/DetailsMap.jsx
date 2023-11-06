import { Link } from 'react-router-dom';

const DetailsMap = ({dataDitails}) => {
    console.log(dataDitails);
    const {prices, Image} =dataDitails;
    return (
      <div>
        <div className="card  w-full lg:w-[350px]    hover:bg-gradient-to-t hover:from-[#10807a]  hover:to-[#03131F]  duration-300      text-white cursor-pointer bg-gradient-to-b from-[#156f83] to-[#030816] ">
          <figure className="h-300px">
            <img
              className="cover w-full"
              src={Image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body  font-bold h-one ">
            <p>Room A5</p>
            <p>Price par Night</p>
            <p>Room Size</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Availability</p>
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
            <Link to="/myBooking">
              <button className="btn w-full   text-xl text-center btn-three bg-transparent border-white">
                Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default DetailsMap;