import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href=""><FaInstagram /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaYoutube /></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="contact">About</Link></li>
            <li><Link to="contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;