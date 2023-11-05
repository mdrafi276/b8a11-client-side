import './Banner.css'

const Banner = () => {
    return (
      <div>
        <div className=" relative mt-[-4.4rem]">
          <div className="  hero w-full md:min-h-screen">
            <div className=" section hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" w-full md:max-w-[42rem] lg:max-w-[42rem]  bg-transparent">
                <h1 className="mb-5 md:text-5xl h-one lg:text-6xl  text-2xl   font-bold  text-white ">
                  Unlock Unforgettable Stays at HotelHub
                </h1>
                <p className="mb-5">
                  Offering the latest innovations in electronics and technology
                  gadgets. Your ultimate destination for all things high-tech.
                </p>
                <button className="btn btn-one border-white text-white hover:bg-white backdrop-blur bg-transparent">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;