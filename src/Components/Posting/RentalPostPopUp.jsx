
import owl from '../Assets/owl.png';
import { ArrowLeftIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import './RentalPostPopUp.css'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const RentalPostPopUp = () => {
  const [formData, setFormData] = useState({
    materialName: "",
    price: "",
    rentalDuration: "",
    contactInfo: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageUpload = (e) => {
    // Handle image upload logic
    console.log("Image selected:", e.target.files[0]);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous route
  };

  return (
    <section className="rentalPostUp">
      <div className="post-header">
        <div className="post-logo">
        <img src= {owl} alt="Create post icon" className="post-img"/>
        <h1 className="createaPost">Create a Post</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='post-form'>
      <ArrowLeftIcon
        className="post-back-btn"
        aria-label="Post Back"
        onClick={handleBack}
        style={{ cursor: 'pointer' }} // optional for better UX
      />

      <div className="post-div3">
        <div className="post-div4">
          <div className="post-column">
            <div className="post-image">
              <div className="post-div5">
              <label htmlFor="imageUpload" className="frame-post">
                <CloudArrowUpIcon className="upload-icon" aria-label="Upload icon" />
              </label>
              <p className="upload1Photoonly">Upload 1 photo only</p>
              <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                    aria-label="Upload image"
                  />
              </div>
            </div>
          </div>
          <div className="post-column2">
            <div className="post-div6">
              
              <div className="floating-input">
              <input
                  type="text"
                  id="materialName"
                  name="materialName"
                  value={formData.materialName}
                  onChange={handleInputChange}
                  required
                  className="post-formInput"
                  placeholder=" "  // Important for floating effect
                  />
                  <label htmlFor="materialName">
                    Name of the Material <span className="requiredField">*</span>
                  </label>
              </div>

              <div className="floating-input">
                    <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    className="formInput"
                    placeholder=" "
                    />
                    <label htmlFor="price">
                    Price <span className="requiredField">*</span>
                    </label>
                </div>

                <div className="floating-input">
                    <input
                    type="text"
                    id="rentalDuration"
                    name="rentalDuration"
                    value={formData.rentalDuration}
                    onChange={handleInputChange}
                    required
                    className="formInput"
                    placeholder=" "
                    />
                    <label htmlFor="rentalDuration">
                    Rental Duration <span className="requiredField">*</span>
                    </label>
                </div>

                <div className="floating-input">
                    <input
                    type="text"
                    id="contactInfo"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleInputChange}
                    required
                    className="formInput"
                    placeholder=" "
                    />
                    <label htmlFor="contactInfo">
                    Contact Information <span className="requiredField">*</span>
                    </label>
                </div>

                <div className="floating-input">
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="formInput"
                    placeholder=" "
                    
                    />
                    <label htmlFor="message">
                    Message (optional)
                    </label>
                </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="post-btn" aria-label="Post rental item">Post</button>
      </form>
    </section>
  )
}

export default RentalPostPopUp