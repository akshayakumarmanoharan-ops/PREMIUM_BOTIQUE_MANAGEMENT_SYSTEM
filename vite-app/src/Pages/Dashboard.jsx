import { Link } from "react-router-dom";
import productImg from "../assets/product.png";
import movementImg from "../assets/move.png";
import reportImg from "../assets/report.png";
import stockImg from "../assets/stock.png";
import "../Style.css";
export default function Dashboard() {
  return (
    <div className="dashboard-vg">
    <div className="dashboard-grid" >

      <Link to="/products" className="dash-card">
        <img src={productImg} alt="Products" />
        <h3>Products</h3>
      </Link>

      <Link to="/movement-login" className="dash-card">
        <img src={movementImg} alt="Stock Movement" />
        <h3>Stock Movement</h3>
      </Link>

      <Link to="/reports" className="dash-card">
        <img src={reportImg} alt="Reports" />
        <h3>Reports</h3>
      </Link>

      <Link to="/products" className="dash-card">
        <img src={stockImg} alt="Inventory" />
        <h3>Inventory</h3>
      </Link>

    </div>
    </div>
  );
}
