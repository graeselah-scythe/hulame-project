import React, { useState, useEffect } from 'react';
import './ProfileSection.css';
import { PencilSquareIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from 'react-router-dom';
import EditProfileModal from './EditProfileModal';

const ProfileSection = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Karla Salem',
    course: '',
    birthday: '',
    gender: '',
    socialLink: '',
    contact: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem('profileData');
    if (stored) setProfileData(JSON.parse(stored));
  }, []);

  const handleSave = (data) => {
    setProfileData(data);
    localStorage.setItem('profileData', JSON.stringify(data));
    setIsModalOpen(false);
  };

  const activeTab = (() => {
    switch (location.pathname) {
      case '/profile': return 'post';
      case '/earnings': return 'earnings';
      default: return '';
    }
  })();

  return (
    <main className='profile'>
      <section className="profileSection">
        <div className="profileBackground">
          <div className="profileHeader" />

          <div className="profileNameContainer">
            <div className="iconAndNameWrapper">
              <UserCircleIcon className='userIcon' />
              <button onClick={() => setIsModalOpen(true)} className="editProfileButton">
                <PencilSquareIcon className='editIcon' />
              </button>
              <h1 className="profileName">{profileData.name}</h1>
            </div>
            <div className="verificationWrapper">
              <p className="verificationStatus">Unverified</p>
            </div>
          </div>
        </div>

        <nav className="profileNavigation">
          <ul className="nav-items">
            <li>
              <Link to="/profile" className={`navItem ${activeTab === 'post' ? 'active' : ''}`} >
                Post
              </Link>
              {activeTab === 'post' && <hr />}
            </li>
            <li>
              <Link to="/earnings" className={`navItem ${activeTab === 'earnings' ? 'active' : ''}`} >
                Earnings
              </Link>
              {activeTab === 'earnings' && <hr />}
            </li>
          </ul>
        </nav>
      </section>

      {isModalOpen && (
        <EditProfileModal
          profileData={profileData}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </main>
  );
};

export default ProfileSection;
