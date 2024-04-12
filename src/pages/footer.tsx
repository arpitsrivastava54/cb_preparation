import React from 'react';
import logo1 from '../assets/logo1.jpeg';
import facebook from '../assets/facebook.jpeg';
import telegram from '../assets/telegram.jpg';
import youtube from '../assets/youtube.jpg';
import getiton from '../assets/getiton.jpg';

const Footer = () => {
  return (
    <>
      <hr className="border-t border-gray-300 mb-10" /> {/* Gray line */}
      <footer className="bg-white text-white py-4 absolute bottom-0 w-full">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center">
            <img src={logo1} alt="Logo" className="h-6 mr-4" />
            <h2 className="text-lg text-black">About Us</h2>
          </div>
          {/* Middle side */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <img src={facebook} alt="Facebook" className="h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <img src={telegram} alt="Twitter" className="h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <img src={youtube} alt="YouTube" className="h-8" />
            </a>
          </div>
          {/* Right side */}
          <div>
            <a href="#" className="text-white hover:text-gray-400">
              <img src={getiton} alt="Get it on Play Store" className="h-10" />
            </a>
          </div>
        </div>
        <div className="container mx-auto mt-4 text-gray-500">
          <p className="text-sm">
            <a href="#" className="hover:text-gray-400 mr-4">Terms and Conditions</a>
            <a href="#" className="hover:text-gray-400 mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 mr-4">Non Disclosure Agreement</a>
            <a href="#" className="hover:text-gray-400 mr-4">Refund Policy</a>
            <a href="#" className="hover:text-gray-400">Copyright 2024 CareerBanao</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
