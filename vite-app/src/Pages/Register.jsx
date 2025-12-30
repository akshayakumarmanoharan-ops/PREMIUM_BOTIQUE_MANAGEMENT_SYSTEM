import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ username, password })
    );

    alert("Registration successful");
    navigate("/");
  };

  return (
    <div className="container auth">
      <h2>Register</h2>

      <input
        placeholder="Username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password" required
        onChange={(e) => setConfirm(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
