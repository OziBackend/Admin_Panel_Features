import React from "react";
import "./Navbar.css";

function Navbar({ setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
}

export default Navbar;
