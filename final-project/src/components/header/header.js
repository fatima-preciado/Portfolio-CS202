import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* transform to other spellings */}
        <Link to="/">FATIMA</Link>
      </div>
      
      <nav className="nav">
        <ul>
          <li><Link to="/about">+</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
