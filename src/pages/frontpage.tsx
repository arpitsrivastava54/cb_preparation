// Frontpage.js
import React from 'react';
import gate from '../assets/gate.jpg';
import coding from '../assets/coding.jpeg';
import placement from '../assets/placement.jpg';

const Frontpage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to CareerBanao</h1>
        <p className="text-xl mt-2">What do you want to learn or prepare for? Select from below options:</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full" src={gate} alt="Teacher1" />
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block w-full">GATE/NET Sanchit Sir</button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full" src={placement} alt="Teacher2" />
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block w-full">Placement from Yash Sir</button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <img className="w-full" src={coding} alt="Teacher3" />
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block w-full">Coding from Prashant Sir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
