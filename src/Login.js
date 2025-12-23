import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';
import backgroundImage from './assets/pics/dumbell-lifiting-bg.jpg';
import googleLogo from './assets/pics/Google__G__logo.svg.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const emailRegex = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^[A-Za-z0-9@#$]{6,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }
    
    if (!passwordRegex.test(password)) {
      setError('Enter a valid password');
      return;
    }

    try {
      const response = await fetch('https://fitness-tracking-website-backend-json.onrender.com/users');
      const users = await response.json();
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className='backdrop'>
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      
      <div className="logintile">
        <div className="top">
          <p className="Heading">Login</p>
        </div>
        <div className="bottom">
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              required
            />
            <p>Password</p>
            <input
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              required
            />
            <button type="submit" className="continue">
              LOGIN
            </button>
          </form>

          <p className="accounthere">
            Don't have an account? <Link to="/register" className="Here">Sign up</Link>
          </p>
          
          <p className="Other">Other Login options</p>
          <button className="google-button">
            Google
            <img src={googleLogo} alt="Google Logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;