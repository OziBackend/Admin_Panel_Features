import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

function Navbar({ setIsLoggedIn }) {
  const { darkMode, toggleTheme} = useTheme();
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="nav-buttons">
        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
