import React, { useState } from 'react';
import './UserManagement.css';

const users = [
  {
    id: '001',
    name: 'Karla Geng-geng',
    email: 'karla.geng@example.com',
    profilePic: 'https://via.placeholder.com/50',
    status: 'Verified',
    birthday: '2003-06-14',
    gender: 'Female',
    contact: '09123456789',
    course: 'BS Computer Science - 3rd Year',
    socialLink: 'https://facebook.com/karlageng',
    documents: [
      {
        name: 'Certificate of Registration',
        url: 'https://via.placeholder.com/300x200?text=Certificate+of+Registration'
      }
    ]
  },
  {
    id: '002',
    name: 'Bench Pisot',
    email: 'bench.pisot@example.com',
    profilePic: 'https://via.placeholder.com/50',
    status: 'Pending Verification',
    birthday: '2002-09-21',
    gender: 'Male',
    contact: '09987654321',
    course: 'BS Information Technology - 2nd Year',
    socialLink: 'https://facebook.com/benchpisot',
    documents: []
  },
  {
    id: '003',
    name: 'Raniel Absenot',
    email: 'raniel.absenot@example.com',
    profilePic: 'https://via.placeholder.com/50',
    status: 'Rejected',
    birthday: '2004-01-12',
    gender: 'Male',
    contact: '09112223344',
    course: 'BS Information Systems - 1st Year',
    socialLink: 'https://facebook.com/ranielabsenot',
    documents: [
      {
        name: 'Certificate of Registration',
        url: 'https://via.placeholder.com/300x200?text=Certificate+of+Registration'
      }
    ]
  },
];

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [confirmAction, setConfirmAction] = useState(null);
  const [actionUser, setActionUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewDetails = (user) => setSelectedUser(user);
  const closeModal = () => setSelectedUser(null);

  const openConfirmModal = (user, actionType) => {
    setActionUser(user);
    setConfirmAction(actionType);
  };

  const closeConfirmModal = () => {
    setConfirmAction(null);
    setActionUser(null);
  };

  const handleConfirmAction = () => {
    console.log(`${confirmAction} confirmed for user:`, actionUser);
    closeConfirmModal();
  };

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'Verified': return <span className="badge verified">✅ Verified</span>;
      case 'Pending Verification': return <span className="badge pending">⏳ Pending</span>;
      case 'Rejected': return <span className="badge rejected">❌ Rejected</span>;
      default: return <span className="badge not-verified">🔴 Not Verified</span>;
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-management">
      <div className="header-bar">
        <h1 className="page-title">User Management</h1>
        <input
          type="text"
          placeholder="Search by name..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredUsers.map((user) => (
        <div className="user-row" key={user.id}>
          <div className="user-name">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <span>{user.name}</span>
          </div>
          <div className="user-status">{renderStatusBadge(user.status)}</div>
          <div className="user-actions">
            <button className="view-button" onClick={() => handleViewDetails(user)}>🔍 View</button>
            <button className="suspend-button" onClick={() => openConfirmModal(user, 'Suspend')}>⛔ Suspend</button>
            <button className="deactivate-button" onClick={() => openConfirmModal(user, 'Deactivate')}>🔒 Deactivate</button>
            <button className="delete-button" onClick={() => openConfirmModal(user, 'Delete')}>🗑️ Delete</button>
          </div>
        </div>
      ))}

      {selectedUser && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>User Details</h2>

            <div className="user-profile-section">
              <img src={selectedUser.profilePic} alt="Profile" className="modal-profile-pic" />
            </div>

            <div className="user-info-grid">
              <p><strong>Name:</strong></p>
              <p>{selectedUser.name}</p>
              <p><strong>ID:</strong></p>
              <p>{selectedUser.id}</p>
              <p><strong>Email:</strong></p>
              <p>{selectedUser.email}</p>
              <p><strong>Birthday:</strong></p>
              <p>{selectedUser.birthday}</p>
              <p><strong>Gender:</strong></p>
              <p>{selectedUser.gender}</p>
              <p><strong>Contact:</strong></p>
              <p>{selectedUser.contact}</p>
              <p><strong>Course & Year:</strong></p>
              <p>{selectedUser.course}</p>
              <p><strong>Social Media:</strong></p>
              <p><a href={selectedUser.socialLink} target="_blank" rel="noreferrer">{selectedUser.socialLink}</a></p>
            </div>

            {selectedUser.documents.length > 0 ? (
              <div className="documents">
                <h3>Uploaded Documents</h3>
                {selectedUser.documents.map((doc, i) => (
                  <div key={i}>
                    <img src={doc.url} alt={doc.name} className="document-preview" />
                    <a href={doc.url} download target="_blank" rel="noreferrer">Download {doc.name}</a>
                  </div>
                ))}
              </div>
            ) : (
              <p>No uploaded documents.</p>
            )}
          </div>
        </div>
      )}

      {confirmAction && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeConfirmModal}>×</button>
            <h2>Confirm {confirmAction}</h2>
            <p>Are you sure you want to <strong>{confirmAction.toLowerCase()}</strong> the account of <strong>{actionUser.name}</strong>?</p>
            <div className="modal-actions">
              <button className="confirm-button" onClick={handleConfirmAction}>Yes, {confirmAction}</button>
              <button className="cancel-button" onClick={closeConfirmModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
