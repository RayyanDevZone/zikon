import React, { useState } from 'react';
import electrician from '../../images/electrician.jpg';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div
      className='flex flex-col justify-between items-center h-screen w-full bg-cover bg-center bg-no-repeat relative'
      style={{ backgroundImage: `url(${electrician})` }}
    >
      {/* NAVBAR */}
      <nav className=' top-0 left-0 w-full px-4 md:px-16 lg:px-32 py-4 z-50 backdrop-blur-md bg-black/40 text-white flex items-center justify-between'>
        <div className="text-xl md:text-2xl font-bold tracking-widest">
          Zikon
        </div>
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          <button
            onClick={() => handleNavClick('/')}
            className='hover:text-red-500 transition'
          >
            Infra
          </button>
          <button
            onClick={() => handleNavClick('/security')}
            className='hover:text-red-500 transition'
          >
            Security
          </button>
          {/* <button
            onClick={() => handleNavClick('/tech')}
            className='hover:text-red-500 transition'
          >
            Tech
          </button> */}
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-row items-end justify-end px-3">
          <button className='w-auto' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[60px] w-[200px] right-4 bg-black/90 text-white rounded-lg px-4 py-3 z-40 shadow-lg space-y-2">
          <button
            onClick={() => handleNavClick('/')}
            className='block w-full text-left hover:text-red-400'
          >
            Infra
          </button>
          <button
            onClick={() => handleNavClick('/security')}
            className='block w-full text-left hover:text-red-400'
          >
            Security
          </button>
          {/* <button
            onClick={() => handleNavClick('/tech')}
            className='block w-full text-left hover:text-red-400'
          >
            Tech
          </button> */}
        </div>
      )}

      {/* HERO CONTENT */}
      <div className='h-screen w-full px-4 md:px-16 lg:px-32 flex flex-col items-start justify-center'>
        <div className="bg-white/30 flex flex-col items-center justify-center px-4 backdrop-blur-sm border border-white/30 rounded-xl h-auto w-full md:h-[250px] md:w-[600px] shadow-lg mt-16 md:mt-0">
          <p className='text-[#780000] text-sm md:text-xl textshadow font-bold'>
            //WE ARE BEST ELECTICAL SERVICE COMPANY
          </p>
          <p className='text-[#003049] text-2xl md:text-4xl lg:text-6xl font-bold capitalize text-center'>
            electrical is all <br />about electricians
          </p>
          <p className='text-center text-sm md:text-base'>
            Registered Vendor of Larsen & Toubro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
