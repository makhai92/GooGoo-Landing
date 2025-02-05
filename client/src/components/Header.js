// Header.jsx
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="logo">GooGoo</div>
      <nav className={`nav ${isActive ? "active" : ""}`}>
        <a href="#about">서비스 소개</a>
        <a href="#pre-reservation">사전 예약</a>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
