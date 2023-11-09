import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import CorosolMap from "./CorosolMap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Riview = () => {
  const [corosoulData, setCorousolData] = useState();
  useEffect(() => {
    fetch("https://hotel-server-theta.vercel.app/riview")
      .then((res) => res.json())
      .then((data) => setCorousolData(data));
  }, []);
  return (
    <div>
      <div className="text-center md:mt-20 mt-10">
        <h1 className="text-white text-5xl font-bold h-one">
          USER TESTIMONIALS
        </h1>
      </div>
      <Carousel>
        {corosoulData?.map((corosul) => (
          <CorosolMap key={corosul.id} corosul={corosul}></CorosolMap>
        ))}
      </Carousel>
    </div>
  );
};

export default Riview;
