import { useContext } from "react";
import { InventoryContext } from "../Context/InventoryContext";

export default function InventoryDashboard() {
  const { inventory } = useContext(InventoryContext);

  const totalProducts = inventory.length;
  const totalStock = inventory.reduce((sum, i) => sum + i.stock, 0);

  return (
    <div className="dashboard">
      <div className="summary">
        <p>Total Products: <b>{totalProducts}</b></p>
        <p>Total Stock: <b>{totalStock}</b></p>
      </div>

      {inventory.map((item) => (
        <div key={item.id} className="alert-card">
          <h4>{item.name}</h4>

          {item.stock < 3 ? (
            <span className="critical">Critical</span>
          ) : item.stock < 5 ? (
            <span className="low">Low Stock</span>
          ) : (
            <span className="ok">In Stock</span>
          )}
        </div>
      ))}
    </div>
  );
}
