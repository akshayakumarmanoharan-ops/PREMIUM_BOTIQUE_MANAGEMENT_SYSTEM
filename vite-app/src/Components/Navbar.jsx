import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const isAdmin = sessionStorage.getItem("admin");
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);     // 🔥 trigger re-render immediately
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Premium Boutique Inventory System</h2>

      <div className="nav-links">
        {/* Dashboard visible only after login */}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}

        <Link to="/products">Products</Link>

        <Link to="/movement-login">Stock Movement</Link>

        <Link to="/reports">Reports</Link>

        {/* Logout */}
        {(isAdmin || isLoggedIn) && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
