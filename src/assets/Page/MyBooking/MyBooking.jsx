import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Navber from "../../Components/Header/Navber";
import BookMap from "./BookMap";

const MyBooking = () => {
   const { user } = useContext(AuthContext);
   const userEmail = user.email;
   const [bookData, setBookData] = useState(null);
   useEffect(() => {
     fetch(`http://localhost:5000/myBooking/${userEmail}`)
       .then((res) => res.json())
       .then((data) => setBookData(data));
   }, [userEmail]);
    return (
      <div className="bg-[#010313] dark:bg-white min-h-[100vh]">
        <Navber></Navber>
        <div className=" mt-3 md:mt-20 grid  grid-cols-1 gap-2 md:gap-10">
         {
          bookData?.map((item)=>(<BookMap key={item.id} item={item}></BookMap>))
         }
       

        </div>
      </div>
    );
};

export default MyBooking;