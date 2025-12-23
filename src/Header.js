import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './menu.css';
import unknownpfp from './assets/pics/unknownpfp.jpg';
import menuIcon from './assets/pics/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (scrollDistance) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: scrollDistance,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      <div className="left-section">
        <div className="menu-dropdown">
          <img 
            src={menuIcon} 
            className="menu-button" 
            alt="menu" 
          />
          <div className="menu-content" id="menuContent" >
            <Link to="/workouts"><span className="f">E</span>xercise Routines</Link>
            <Link to="/workouts"><span className="f">C</span>ore Workouts</Link>
            <Link to="/workouts"><span className="f">C</span>hest Workouts</Link>
            <Link to="/workouts"><span className="f">W</span>eight Loss Workouts</Link>
            <Link to="/contact"><span className="f">C</span>ontact Us</Link>
            
          </div>
        </div>
        <p className="fitty-logo"><span className="f">F</span>itty.</p>
      </div>

      {screenWidth > 768 ? (
        <div className="middle-section">
          <button 
            onClick={() => handleScroll(0)}
            className="button home-button"
          >
            Home
          </button>
          <button 
            onClick={() => handleScroll(2000)}
            className="button history"
          >
            Track Now
          </button>
          <button 
            onClick={() => handleScroll(900)}
            className="button pricing"
          >
            Pricing
          </button>
          <Link to="/contact"><button 
            className="button about-us"
          >
            Contact Us
          </button></Link>
        </div>
      ) : (
        isMobileMenuOpen && (
          <div className="mobile-menu">
            <button 
              onClick={() => handleScroll(0)}
              className="button home-button"
            >
              Home
            </button>
            <button 
              onClick={() => handleScroll(2000)}
              className="button history"
            >
              Track Now
            </button>
            <button 
              onClick={() => handleScroll(900)}
              className="button pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleScroll(2400)}
              className="button about-us"
            >
              Contact Us
            </button>
          </div>
        )
      )}

      <div className="right-section">
        {user ? (
          <>
            <img className="unknownpfp-icon" src={unknownpfp} alt="Profile" />
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-signup-button">Login/Signup</Link>
        )}
      </div>
    </div>
  );
};

export default Header;