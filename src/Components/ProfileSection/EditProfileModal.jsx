import React, { useState, useEffect } from 'react';
import './EditProfileModal.css';
import { XMarkIcon } from "@heroicons/react/24/outline";

const EditProfileModal = ({ onClose, profileData, onSave }) => {
  const [formData, setFormData] = useState(profileData);

  useEffect(() => {
    setFormData(profileData);
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <div className="modalHeader">
          <h2>Edit Profile</h2>
          <div className="tooltipWrapper">
            <button className="modalCloseBtn" onClick={onClose}>
              <XMarkIcon className="closeIcon" />
              <span className="tooltipText">Close</span>
            </button>
          </div>
        </div>

        <form className="editForm" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input name="fullName" type="text" value={formData.fullName} onChange={handleChange} />
          </label>
          <label>
            Course & Year Level
            <input name="courseYear" type="text" value={formData.courseYear} onChange={handleChange} />
          </label>
          <label>
            Birthday
            <input name="birthday" type="date" value={formData.birthday} onChange={handleChange} />
          </label>
          <label>
            Gender
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Social Link
            <input name="socialLink" type="url" value={formData.socialLink} onChange={handleChange} />
          </label>
          <label>
            Contact Number
            <input name="contactNumber" type="text" value={formData.contactNumber} onChange={handleChange} />
          </label>

          <label>
            Certificate of Registration (for Account Verification)
            <input type="file" name="certificate" onChange={handleChange} />
          </label>

          <div className="modalButtons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="cancelBtn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
