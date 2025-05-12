import React, { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import logo from '../Assets/logo.png';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css'

const LoginNow = () => {

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Get the saved user data from localStorage
    const savedUserData = JSON.parse(localStorage.getItem('userData'));
  
    if (!savedUserData) {
      setError('No registered user found. Please register first.');
      return;
    }
  
    // Check if the entered username and password match
    if (formData.username === savedUserData.username && formData.password === savedUserData.password) {
      alert('Login Successful!');
      
      // ✅ Save a dummy token (or real token from server in real use)
      localStorage.setItem('token', 'dummy_token_value'); 
      
      navigate('/rental-section');
    } else {
      setError('Invalid username or password');
    }
  };
  

  

  useEffect(() => {
    const handleScreenClick = (event) => {
      // If there's an error showing, clear it
      if (error) {
        setError('');
      }
    };
  
    // Add event listener
    document.addEventListener('click', handleScreenClick);
  
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('click', handleScreenClick);
    };
  }, [error]);

  const handleForgotPassword = () => {
    alert("Forgot Password functionality is not implemented yet.");
    // You can navigate to a password recovery page or show a modal
  };

  return (
    <main className='div'>
      <section className="div2">
        <h1 className='div3'>Welcome Back!</h1>
        <p className="div4">Don't have an account?</p>
        <Link to="/register">
          <button className='div5'>Register</button>
        </Link>
      </section>

      <section className="div6">
      <Link to="/">
        <img src={logo} alt="Logo" className='logo' />
      </Link>
      <p className="div7">Login</p>

      <form onSubmit={handleSubmit}>
        <div className="formFields">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className='div8'
            aria-label="Username"
            />

          <div className='div11'>
            <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className='passwordInput'
            aria-label="Password"
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className='eyeButton'
              aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeSlashIcon className='eyeIcon' />
                ) : (
                  <EyeIcon className='eyeIcon' />
                )}
              </button>
            </div>
            
            {/* Error Message */}
            {error && (
              <p className='errorMessage'>
                {error}
              </p>
            )}

            <div className="forgotPasswordContainer">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="forgotPasswordLink">
                Forgot password?
              </button>
            </div>

            <button type="submit" className="div16">
              Login
            </button>

          </div>
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
    </main>
  )
}

export default LoginNow