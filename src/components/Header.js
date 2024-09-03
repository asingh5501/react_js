// src/Header.js
import React from 'react';
import './ProfileCard.css'

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className={"sticky-header"}>
      <div className={activeTab === 'home' ? "selected" : "tab"} onClick={() => setActiveTab('home')}>
        Home
      </div>
      <div className={activeTab === 'about' ? "selected" : "tab"} onClick={() => setActiveTab('about')}>
        About Us
      </div>
      <div className={activeTab === 'contact' ? "selected" : "tab"} onClick={() => setActiveTab('contact')}>
        Contact Us
      </div>
    </header>
  );
};

export default Header;
