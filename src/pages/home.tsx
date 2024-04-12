// Frontpage.js
import gate from '../assets/gate.jpg';
import coding from '../assets/coding.jpeg';
import placement from '../assets/placement.jpg';
import { Link } from 'react-router-dom';

const data = [
  {
    img: gate,
    name: "GATE/NET Sanchit Sir",
  },
  {
    img: placement,
    name: "Placement from Yash Sir",
  },
  {
    img: coding,
    name: "Coding from Prashant Sir",
  },
]

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to CareerBanao</h1>
        <p className="text-xl mt-2">What do you want to learn or prepare for? Select from below options:</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {
          data.map((item) => (
            <div key={item.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
              <img className="w-full" src={item.img} alt={item.name} />
              <div className="px-6 py-4">
                <Link to={"/layout"} className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block w-full">{item.name}</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
