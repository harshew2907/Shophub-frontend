import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About ShopHub</h4>
          <p>Your one-stop shop for quality products at great prices.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: support@shophub.com</p>
          <p>Phone: +91 99999 99999</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
