import React from 'react';
import './ProfileCard.css'

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className={"sticky-header"}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src='https://as2.ftcdn.net/v2/jpg/03/62/59/17/1000_F_362591713_qK04F1uk6oHkcgL7jfXCf8QBTZOKnMgU.jpg' height={100} width={100} style={{ borderRadius: 150}} alt='UE logo' />
          <div style={{ marginLeft: 10 }}>
            <h2>UltraEdit</h2>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className={activeTab === 'home' ? "selected" : "tab"} onClick={() => setActiveTab('home')}>
            Home
          </div>
          <div className={activeTab === 'about' ? "selected" : "tab"} onClick={() => setActiveTab('about')}>
            About Us
          </div>
          <div className={activeTab === 'contact' ? "selected" : "tab"} onClick={() => setActiveTab('contact')}>
            Contact Us
          </div>
        </div>
    </header>
  );
};

export default Header;
