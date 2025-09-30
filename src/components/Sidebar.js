import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>Dashboard</li>
        <li>Users ▼
          <ul className="dropdown">
            <li>All Users</li>
            <li>Active Users</li>
          </ul>
        </li>
        <li>Reports ▼
          <ul className="dropdown">
            <li>Sales</li>
            <li>Traffic</li>
          </ul>
        </li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
