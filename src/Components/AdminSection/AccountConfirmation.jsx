import React, { useState } from 'react';
import './AccountConfirmation.css';

const AccountConfirmation = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);

  const users = [
    {
      id: '2025001',
      name: 'Bench Pisot',
      email: 'bench.pisot@example.com',
      date: '2025-05-10',
      profilePic: 'https://via.placeholder.com/50',
      proof: 'https://via.placeholder.com/150?text=School+ID',
    },
    {
      id: '2025002',
      name: 'Karla Geng-geng',
      email: 'karla.geng@example.com',
      date: '2025-05-08',
      profilePic: 'https://via.placeholder.com/50',
      proof: 'https://via.placeholder.com/150?text=Certificate+of+Registration',
    }
  ];

  const handleActionClick = (user, action) => {
    setSelectedUser(user);
    setSelectedAction(action);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    // Implement action logic here
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="account-confirmation-admin">
      <div className="container">
        <h1 className="page-title">Account Verification</h1>

        <div className="table-header">
          <div className="column-header name">Username</div>
          <div className="column-header id">ID</div>
          <div className="column-header email">Email</div>
          <div className="column-header date">Date</div>
          <div className="column-header proof">Proof</div>
          <div className="column-header actions">Actions</div>
        </div>

        {users.map((user) => (
          <div className="account-row" key={user.id}>
            <div className="account-name">
              <img src={user.profilePic} alt="Profile" className="profile-pic" />
              <span>{user.name}</span>
            </div>
            <div className="account-id">{user.id}</div>
            <div className="account-email">{user.email}</div>
            <div className="account-date">{user.date}</div>
            <div className="account-proof">
              <a href={user.proof} target="_blank" rel="noopener noreferrer">
                View Document
              </a>
            </div>
            <div className="approval-buttons">
              <button
                className="approve-button"
                onClick={() => handleActionClick(user, 'approve')}
              >
                ✅
              </button>
              <button
                className="reject-button"
                onClick={() => handleActionClick(user, 'reject')}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

     {showModal && (
  <div className="modal-overlay">
    <div className="modal">
      <button className="modal-close" onClick={handleCancel}>×</button>
      <p>
        Are you sure you want to {selectedAction === 'approve' ? 'approve' : 'reject'}{' '}
        <strong>{selectedUser.name}</strong>'s account?
      </p>
      <div className="modal-actions">
        <button
          className={selectedAction === 'approve' ? 'confirm-button' : 'deny-button'}
          onClick={handleConfirm}
        >
          {selectedAction === 'approve' ? 'Accept' : 'Deny'}
        </button>
      </div>
    </div>
  </div>


      )}
    </div>
  );
};

export default AccountConfirmation;
