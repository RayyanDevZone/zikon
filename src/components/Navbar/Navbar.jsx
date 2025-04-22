import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/zikon.png';
import { Menu, X } from 'lucide-react'; // Optional: install `lucide-react` for icons

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <nav className="w-full bg-black top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="h-16 w-24">
          <img src={logo} alt="Zikon Logo" className="h-full w-full object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-4  w-[400px]">
          <button
            onClick={() => handleNavigation('/electrical')}
            className="bg-lime-400 text-black font-semibold px-2 py-2 rounded-md hover:scale-105 transition-transform"
          >
            Electricals
          </button>
          <button
            onClick={() => handleNavigation('/security')}
            className="bg-lime-400 text-black font-semibold px-2 py-2 rounded-md hover:scale-105 transition-transform"
          >
            Security
          </button>
          {/* <button
            onClick={() => handleNavigation('/technology')}
            className="bg-lime-400 text-black font-semibold px-2 py-2 rounded-md hover:scale-105 transition-transform"
          >
            Technology
          </button> */}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden flex items-end justify-end flex-row">
          <button onClick={toggleMenu} className="text-white w-auto">
            {isMenuOpen ? <X size={28} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black px-4 pb-4 flex flex-col gap-3 animate-slideDown">
          <button
            onClick={() => handleNavigation('/electrical')}
            className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-md"
          >
            Electricals
          </button>
          <button
            onClick={() => handleNavigation('/security')}
            className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-md"
          >
            Security
          </button>
          {/* <button
            onClick={() => handleNavigation('/technology')}
            className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-md"
          >
            Technology
          </button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
