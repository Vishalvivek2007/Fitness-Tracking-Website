import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import googleLogo from './assets/pics/Google__G__logo.svg.png';
import backgroundImage from './assets/pics/dumbell-lifiting-bg.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const nameRegex = /^[A-Za-z ]{2,50}$/;
  const mobileRegex = /^\d{10}$/;
  const emailRegex = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^[A-Za-z0-9@#$]{6,}$/;

  const validate = () => {
    const newErrors = {};
    
    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Inavlid username format';
    }
    
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Must be a 10-digit number';
    }
    
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Enter a valid password';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    try {
      await axios.post('https://fitness-tracking-website-backend-json.onrender.com/users', formData);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors({ server: 'Registration failed. Please try again.' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <div className='backdrop'>
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="logintile">
        <div className="top">
          <p className="Heading">Signup</p>
        </div>
        <div className="bottom">
          {errors.server && <p className="error-message">{errors.server}</p>}
          <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input
              placeholder="Enter Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
            
            <p>Mobile Number</p>
            <input
              placeholder="Enter Number"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <p className="error-text">{errors.mobile}</p>}
            
            <p>Email</p>
            <input
              placeholder="Enter Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            
            <p>Set Password</p>
            <input
              placeholder="Set Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
            
            <button type="submit" className="continue">
              CONTINUE
            </button>
          </form>
          <p className="accounthere">
            Have an account? <a href="/login" className="Here">Login here</a>
          </p>
          <p className="Other">Other Signup options</p>
          <button className="google-button">
            Google
            <img src={googleLogo} alt="Google Logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;