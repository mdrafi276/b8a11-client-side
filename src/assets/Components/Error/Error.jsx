
const ErrorPage = () => {
    return (
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="flex-col space-y-4 text-left px-6">
            <div className="text-7xl font-bold text-violet-700">404</div>
            <div className="text-stone-500 font-medium">
              Oops, you still haven't found what you lookng for?
            </div>
            <div className="flex space-x-4 items-center justify-start">
              <a href="#">
                <div className="bg-violet-700 px-4 py-1 text-white font-medium border-2 border-gray-400  hover:scale-105 cursor-pointer">
                  <ion-icon name="arrow-back-sharp"></ion-icon>
                </div>
              </a>
              <div className="text-sm font-medium text-stone-500">
                Back to Home Page
              </div>
            </div>
          </div>
        </div>

        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </div>
    );
};

export default ErrorPage;