
const RoomChildDetails = ({item}) => {
    const {prices}=item;
    console.log(item);
    return (
      <div>
        <div className="container my-5 md:my-24 mx-auto md:px-6">
          <div className="  bg-gradient-to-r from-[#083E40]  lg:h-[500px] lg:rounded-b-full dark:bg-gray-900 md:rounded-r-3xl to-[#03111E] mb-5 md:mb-32">
            <div className="px-6 py-12 text-center md:px-12 lg:text-left">
              <div className="container mx-auto xl:px-32">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl xl:text-4xl text-[hsl(218,81%,95%)]">
                      Room 500 sq.ft <br />
                      <span className="text-[hsl(218,81%,75%)]">
                        Price per night:{prices}
                      </span>
                    </h1>
                    <p className="lead mb-4  opacity-70 text-white">
                      Room Size: 5564
                    </p>

                    <p className="lead  opacity-70 text-white">
                      We will write rarely and only high-quality content.
                    </p>
                  </div>
                  <div className="">
                    <img
                      className="rounded-xl"
                      src="https://i.ibb.co/gvNcxCj/luxury-bedroom-design.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RoomChildDetails;