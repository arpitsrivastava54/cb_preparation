import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-800 text-white w-64">
      <div className="py-6 px-4 flex-grow">
        <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>
        <ul>
          <li className="mb-4">
            <a href="#" className="block hover:text-blue-500">Login</a>
            <hr className="border-white my-2" />
          </li>
          <li className="mb-4">
            <a href="#" className="block hover:text-blue-500">Telegram Channel</a>
            <hr className="border-white my-2" />
          </li>
          <li className="mb-4">
            <a href="#" className="block hover:text-blue-500">WhatsApp Channel</a>
            <hr className="border-white my-2" />
          </li>
          <li className="mb-4">
            <a href="#" className="block hover:text-blue-500">Chat with Us</a>
            <hr className="border-white my-2" />
          </li>
        </ul>
      </div>
      <div className="py-6 px-4 border-t border-gray-700">
        <p className="text-sm">Call us on <a href="tel:800000000" className="text-blue-500">800000000</a></p>
      </div>
    </div>
  );
};

export default Sidebar;
