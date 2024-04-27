import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <ul>
          <li><a href='#'>Terms of Service</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;