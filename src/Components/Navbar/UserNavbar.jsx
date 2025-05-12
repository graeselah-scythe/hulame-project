import React, { useState } from 'react';
import './UserNavbar.css';
import logo from '../Assets/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
  ChatBubbleBottomCenterTextIcon,
  UserCircleIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";




const UserNavbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const getActiveMenu = () => {
    switch (location.pathname) {
      case '/rental-section':
        return 'rent';
      case '/post':
        return 'post';
      case '/about-us':
        return 'about';
      case '/contact':
        return 'contact';
      case '/profile':
        return 'profile';
      default:
        return '';
    }
  };

  const activeMenu = getActiveMenu();

  const confirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };


  return (
    <section className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" className='img' />
      </div>
      <ul className='nav-menu'>
      <li>
        <Link className="nav-link" to="/">Rent Now</Link>
      </li>
      <li>
        <Link className="nav-link" to="/about-us">About Us</Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>


        <div className='iconGroup'>
          <button className='iconButton' aria-label="Notifications">
            <ChatBubbleBottomCenterTextIcon className='heroIcon' />
          </button>
          
          <Link to="/profile">
            <button
              className={`iconButton ${activeMenu === 'profile' ? 'active' : ''}`}
              aria-label="Profile"
            >
              <UserCircleIcon className='heroIcon' />
            </button>
          </Link>

          <button className='iconButton' aria-label="Logout" onClick={() => setShowLogoutModal(true)}>
            <ArrowLeftEndOnRectangleIcon className='heroIcon' />
          </button>
        </div>
      </ul>

      {/* 🔐 Logout Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out?</p>
            <div className="modal-buttons">
              <button onClick={confirmLogout} className="confirm-btn">Logout</button>
              <button onClick={cancelLogout} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default UserNavbar;
