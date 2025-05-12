import React, { useState } from 'react';
import './AdminNavbar.css';
import logo from '../Assets/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

const AdminNavbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const getActiveMenu = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'dashboard';
      case '/account-confirmation':
        return 'accountConfirmation';
      case '/verified-accounts':
        return 'verifiedAccounts';
      case '/denied-accounts':
        return 'deniedAccounts';
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
        <img src={logo} alt="Logo" className='img' />
      </div>
     
       <ul className='nav-menu'>
  <li>
    <Link className='nav-link' to="/dashboard">Dashboard</Link>
    {activeMenu === "dashboard" && <hr />}
  </li>
  <li>
    <Link className='nav-link' to="/account-confirmation">Account Confirmation</Link>
    {activeMenu === "accountConfirmation" && <hr />}
  </li>
  <li>
    <Link className='nav-link' to="/user-management">User Management</Link>
    {activeMenu === "user-management" && <hr />}
  </li>


        <div className='iconGroup'>
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

export default AdminNavbar;
