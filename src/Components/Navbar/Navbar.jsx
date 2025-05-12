import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const location = useLocation();


  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent closing immediately
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickAnywhere = () => {
      setMenuOpen(false);
    };

    document.addEventListener('click', handleClickAnywhere);
    return () => {
      document.removeEventListener('click', handleClickAnywhere);
    };
  }, []);

  return (
    <section className="navbar">
      <div className="menu" ref={buttonRef}>
        <Bars3Icon className="menu-btn" onClick={toggleMenu} />
      </div>
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="img" />
      </div>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
      <li>
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        to="/">Rent Now</Link>
      </li>
  <li>
    <Link
      className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
      to="/about-us"
    >
      About Us
    </Link>
  </li>
  <li>
    <Link
      className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
      to="/contact"
    >
      Contact
    </Link>
  </li>
</ul>

      <div className="nav-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
