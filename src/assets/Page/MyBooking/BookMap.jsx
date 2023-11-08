import { Link } from "react-router-dom";

const BookMap = ({item, handleDelete}) => {
    
        const {
            _id,
          prices,
          Image,
          sitId,
          roomSize,
          Description,
          commonId,
          availables,
        } = item;
    return (
      <div>
        <div className="card card-side md:h-[230px] gap-5 md:gap-14 lg:gap-28 container mx-auto bg-white dark:bg-black dark:text-white text-black shadow-xl">
          <figure className=" md:max-w-[450px]">
            <img
              className="md:w-full w-[137px] md:h-full h-[164px]"
              src={Image}
              alt=""
            />
          </figure>
          <div className="md:card-body">
            <h2 className="md:card-title">{roomSize}</h2>
            <p className=" md:text-xl pb-0 mb-0 text-sm">
              Price per night:-{prices}$
            </p>
            <div className="flex text-center flex-col lg:flex-row gap-1 md:gap-5  mt-0 pt-0 ">
              <h1 className="">new booking date</h1>
              <input
                className=" bg-gray-400 lg:h-7 md:h-5 h-4 rounded-sm text-white dark:text-white dark:bg-black text-center"
                type="date"
                name=""
                id=""
              />
            </div>
            <p className="  pt-0 mt-0  md:text-xl text-[14px] ">{sitId}</p>
          </div>
          <div className="flex flex-col md:mr-10 gap-3 md:gap-5 justify-center items-center">
            <button
              onClick={() => handleDelete(_id)}
              className=" btn-two btn-sm md:btn btn-primary"
            >
              {" "}
              Detelte
            </button>
            <Link to={`/updateBooking/${_id}`}>
              <button className=" btn-sm md:btn btn-primary"> Update</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BookMap;