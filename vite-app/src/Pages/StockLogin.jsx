import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StockLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleLogin = () => {
    if (username === "akshay" && password === "akshay") {
      sessionStorage.setItem("admin", "true");
      navigate("/movement-update");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <tr></tr>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <tr></tr
      ><button onClick={HandleLogin}>Login</button>
    </div>
  );
}
