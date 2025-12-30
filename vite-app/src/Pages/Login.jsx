import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("User not registered");
      return;
    }

    if (
      username === savedUser.username &&
      password === savedUser.password
    ) {
      sessionStorage.setItem("loggedIn", "true");
      setIsLoggedIn(true);           // 🔥 THIS FIXES REFRESH ISSUE
      navigate("/dashboard");        // instant redirect
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container auth">
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
