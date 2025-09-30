import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

function Navbar({ setIsLoggedIn }) {
  const { darkMode, toggleTheme} = useTheme();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
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
