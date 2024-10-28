import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <p 
      className="copyright uk-position-bottom-center" 
      style={{
        fontSize: '20px', 
        fontWeight: 'lighter', 
        textAlign: 'center', 
        color: '#C8A2C8',
      }} 
      tabIndex="0"
    >
      Déborah Iara - 2024
    </p>
  );
}

export default Footer;
