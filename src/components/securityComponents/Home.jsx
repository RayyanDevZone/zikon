import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("https://themes.pixelwars.org/secury/demo-01/wp-content/uploads/sites/2/2023/09/young-adult-businessman-holding-holographic-chart-generated-by-ai.jpg")'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <nav className="relative top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-10">
        <h1 className="text-white text-2xl font-bold tracking-widest">ZIKON</h1>
        <div className="flex gap-4">
          <button onClick={() => navigate('/')} className="text-white hover:text-orange-500 font-medium cursor-pointer">
            Infra
          </button>
          <button onClick={() => navigate('/electrical')} className="text-orange-500 font-bold border-b-2 border-orange-500 cursor-pointer">
            Electrical
          </button>
          {/* <button onClick={() => navigate('/technology')} className="text-white hover:text-orange-500 font-medium cursor-pointer">
            Technology
          </button> */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white  px-4">
        <div className="max-w-3xl bg-black bg-opacity-60 p-8 rounded-xl shadow-lg">
          <p className="text-orange-500 text-sm uppercase font-semibold tracking-widest">
            // Professional Security Solutions
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold my-4 leading-tight">
            Securing What Matters Most
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Surveillance. Access Control. Guard Services.
          </p>
          <p className="text-sm text-gray-200 italic">
            Registered Vendor of L&T
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
