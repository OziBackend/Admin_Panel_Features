import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(user, " : ", pass);
    if (user === "admin" && pass === "admin@12") {
        console.log(user, " : ", pass);
        
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! (use admin/admin@12)");
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
