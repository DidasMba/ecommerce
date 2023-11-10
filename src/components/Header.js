// Header.js
//import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;