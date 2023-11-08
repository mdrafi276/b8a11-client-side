import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../../Components/Header/Navber";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsMap from "./DetailsMap";
import DetailsRiview from "./DetailsRiview";
const Details = () => {
  const { price, roomImage, roomSize, imageDescription } = useLoaderData();

  const [detailsData, setDetailsData] = useState(null);

  const { id } = useParams();
  const url = `https://hotel-server-theta.vercel.app/roomSit/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setDetailsData(res.data);
    });
  }, []);

  return (
    <div className="bg-[#010313] scroll-smooth dark:bg-white">
      <Navber></Navber>
      <div>
        <div className="container my-5 md:my-24 mx-auto md:px-6">
          <div className="  bg-gradient-to-r from-[#083E40]  lg:h-[650px] lg:rounded-b-[350px] dark:bg-gray-900 md:rounded-r-3xl to-[#03111E] mb-5 md:mb-32">
            <div className="px-6 py-12  pt-[143px] text-center md:px-12  lg:text-left">
              <div className="container mx-auto xl:px-32">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl xl:text-4xl text-[hsl(218,81%,95%)]">
                      {roomSize} <br />
                      <span className="text-[hsl(218,81%,75%)]">
                        Price per night: <span className="h-one">{price}</span>
                      </span>
                    </h1>

                    <p className="lead  opacity-70 text-white">
                      {imageDescription}
                    </p>
                  </div>
                  <div className="">
                    <img className="rounded-xl" src={roomImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  scroll-smooth w-full md:mb-32 mb-14 mt-0  lg:mt-20 lg:grid-cols-3    grid-cols-1    lg:w-[80%]  justify-center gap-10 mx-auto  ">
        {detailsData?.map((dataDitails) => (
          <DetailsMap
            key={dataDitails.id}
            dataDitails={dataDitails}
          ></DetailsMap>
        ))}
      </div>

      <div>
        <DetailsRiview></DetailsRiview>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;
