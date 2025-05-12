import React, { useState, useEffect } from "react";
import './RegisterForm.css';
import logo from '../Assets/logo.png';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import TermsModal from "../PrivacyPolicy/TermsModal";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    studentId: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();  // Hook for navigation
  const [errorMessage, setErrorMessage] = useState('');
  const [showTermsModal, setShowTermsModal] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, studentId, email, password, confirmPassword, acceptTerms } = formData;

    if (!username.trim() || !studentId.trim() || !email.trim() || !password || !confirmPassword) {
      setErrorMessage("All fields must be completed before submitting the form.");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
    } else if (!acceptTerms) {
      setErrorMessage("You must accept the terms and conditions to continue.");
    } else {
      // Clear error and proceed with form submission
      setErrorMessage('');
      localStorage.setItem('userData', JSON.stringify(formData));
      navigate("/login");
    }
  };

  useEffect(() => {
    const handleClick = () => {
      if (errorMessage) {
        setErrorMessage('');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [errorMessage]);

  return (
    <main className="div">
      <section className="div2">
        <p className="div3">Hello, Welcome!</p>
        <p className="div4">Already have an account?</p>
        <Link to="/login">
          <button className="div5">Login</button>
        </Link>
      </section>

      <section className="div6">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <p className="div7">Register</p>

        <form onSubmit={handleSubmit}>
          <div className="formFields">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="div8"
              aria-label="Username"
            />
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              placeholder="Student ID Number"
              className="div9"
              aria-label="Student ID Number"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="div10"
              aria-label="Email"
            />

            <div className="div11">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="passwordInput"
                aria-label="Password"
              />
              <button type="button" onClick={togglePasswordVisibility}
                className="eyeButton" aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? (<EyeSlashIcon className="eyeIcon" />) :
                (<EyeIcon className="eyeIcon" />)}
              </button>
            </div>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="div12"
              aria-label="Confirm Password"
            />
          </div>

          <label className="div13">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={(e) => {
                if (!e.target.checked) {
                  setFormData({ ...formData, acceptTerms: false });
                } else {
                  e.preventDefault(); // Prevent auto-check
                  setShowTermsModal(true);
                }
              }}
              className="div14"
              aria-label="Accept terms and conditions"
            />
            <span className="div15">
              I agree to the Terms and Conditions
            </span>
          </label>

          <p className="error" style={{ minHeight: '1.5em' }}>
            {errorMessage}
          </p>

          <button type="submit" className="div16">
            Register
          </button>

        </form>

        <div className="adminButtonContainer">
          <Link to="/admin">
            <button className="adminButton" aria-label="Admin access">
              {/* SVG Admin Button */}
              <svg width="128" height="44" viewBox="0 0 128 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="127" height="43" rx="21.5" fill="white" stroke="#E5E7EB" />
                <path fillRule="evenodd" clipRule="evenodd" d="M32 19.6C33.364 19.6 34.6721 19.0943 35.6365 18.1941C36.601 17.2939 37.1429 16.073 37.1429 14.8C37.1429 13.527 36.601 12.3061 35.6365 11.4059C34.6721 10.5057 33.364 10 32 10C30.636 10 29.3279 10.5057 28.3635 11.4059C27.399 12.3061 26.8571 13.527 26.8571 14.8C26.8571 16.073 27.399 17.2939 28.3635 18.1941C29.3279 19.0943 30.636 19.6 32 19.6ZM20 34C20 32.5292 20.3104 31.0728 20.9134 29.7139C21.5165 28.3551 22.4004 27.1204 23.5147 26.0804C24.629 25.0404 25.9519 24.2154 27.4078 23.6525C28.8637 23.0897 30.4241 22.8 32 22.8C33.5759 22.8 35.1363 23.0897 36.5922 23.6525C38.0481 24.2154 39.371 25.0404 40.4853 26.0804C41.5996 27.1204 42.4835 28.3551 43.0866 29.7139C43.6896 31.0728 44 32.5292 44 34H20Z" fill="black" />
                <text fill="black" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="16" fontWeight="500" letterSpacing="0em">
                  <tspan x="54" y="27.6">Admin</tspan>
                </text>
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {showTermsModal && (
        <TermsModal
          onAccept={() => {
            setFormData({ ...formData, acceptTerms: true });
            setShowTermsModal(false);
          }}
          onClose={() => {
            setShowTermsModal(false);
          }}
        />
      )}
    </main>
  );
};

export default RegisterForm;
