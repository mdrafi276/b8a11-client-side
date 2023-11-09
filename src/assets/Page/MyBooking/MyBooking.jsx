import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Navber from "../../Components/Header/Navber";
import BookMap from "./BookMap";
import Swal from "sweetalert2";

const MyBooking = () => {
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hotel-server-theta.vercel.app/myBooking/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const filteredData = bookData.filter((item) => item._id !== _id);
              setBookData(filteredData);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    fetch(`https://hotel-server-theta.vercel.app/myBooking/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setBookData(data));
  }, [userEmail]);
  return (
    <div className="bg-[#010313] dark:bg-white min-h-[100vh]">
      <Navber></Navber>
      <div className=" mt-3 md:mt-20 grid  grid-cols-1 gap-2 md:gap-10">
        {bookData?.map((item) => (
          <BookMap
            key={item.id}
            handleDelete={handleDelete}
            item={item}
          ></BookMap>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
