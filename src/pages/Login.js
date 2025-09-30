import React, { useState } from "react";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "admin") {
      setIsLoggedIn(true);
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials! (use admin/admin)");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
