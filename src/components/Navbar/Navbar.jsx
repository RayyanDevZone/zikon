import React from 'react';
import './Navbar.scss';
import logo from '../../images/zikon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src={logo}></img>
      </div>
 
    </div>
  );
}

export default Navbar;
 