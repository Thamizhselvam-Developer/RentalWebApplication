import React from "react";

function Works() {
  return (
    <>
    <div className="m-4 lg:mt-12">
      <div className="flex justify-center font-bold font-main text-3xl md:text-4xl mb-12 md:mb-20">
        <h1>How it Works</h1>
      </div>

      <div className="relative mt-8 mb-20">
        <div className="absolute z-0 sm:top-1/2 sm:left-0 sm:right-0 sm:h-1 sm:w-full w-1 h-full bg-primary sm:translate-y-[-50%] left-1/2 sm:translate-x-0 translate-x-[-50%] shadow-lg opacity-80"></div>
        
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center relative z-10">
          <div className="bg-white text-black rounded-lg shadow-md px-6 py-8 w-full max-w-xs border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-3 rounded-full shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Choose a location
            </h3>
            <p className="text-gray-500 text-sm text-center">
              See the available vehicles nearby you as per your requirements
            </p>
          </div>

          <div className="bg-white text-black rounded-lg shadow-md px-6 py-8 w-full max-w-xs border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-3 rounded-full shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10h5v5H7v-5zm-5 8V6a2 2 0 012-2h2V2h2v2h6V2h2v2h2a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2zm2 0h16V9H4v9z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Pick-up and Return Date
            </h3>
            <p className="text-gray-500 text-sm text-center">
              Select the Pick-up and Return Date as per your convenience
            </p>
          </div>

          <div className="bg-white text-black rounded-lg shadow-md px-6 py-8 w-full max-w-xs border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-3 rounded-full shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.15 5 17.5 5h-11c-.65 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5S19 14.67 19 15.5 18.33 17 17.5 17z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Book a vehicle
            </h3>
            <p className="text-gray-500 text-sm text-center">
              See which vehicles are available and book the vehicle of your choice
            </p>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Works;