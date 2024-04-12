import React from 'react';
import logo1 from '../assets/logo1.jpeg';

const Tnc = () => {
  return (
    <>
      <header className="bg-white-800 py-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mr-4 mb-4 md:mb-0">
            <img src={logo1} alt="Logo" className="h-8" />
          </div>
          {/* Search Bar */}
          <div className="mr-4 mb-4 md:mb-0 flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-white-700 text-black focus:bg-gray-200 border border-gray-500 rounded-md"
            />
          </div>
          {/* Headings */}
          <div className="flex items-center ml-auto"> {/* Adjusted margin to move headings right */}
            <h2 className="text-m mr-6 hidden md:block">Communities</h2> {/* Adjusted margin */}
            <h2 className="text-m hidden md:block mr-4">Newsfeed</h2> {/* Added margin */}
          </div>
          {/* Sign In / Sign Out Buttons */}
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
              Sign In
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
              Sign Out
            </button>
          </div>
        </div>
      </header>
      <hr className="border-gray-400 my-0" /> {/* Grey line */}
    
    </>
  );
};



export default Tnc;
