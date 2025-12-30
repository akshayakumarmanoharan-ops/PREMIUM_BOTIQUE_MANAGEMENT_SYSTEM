import { useContext } from "react";
import { InventoryContext } from "../Context/InventoryContext";

export default function Reports() {
  const { inventory } = useContext(InventoryContext);

  return (
    <div className="reports-container">
      <h2 className="reports-title">Stock Report</h2>

      <table className="reports-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Price (₹)</th>
            <th>Stock</th>
            <th>Total Value (₹)</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.supplier}</td>
              <td>₹{item.price}</td>
              <td>{item.stock}</td>
              <td>₹{item.price * item.stock}</td>
              <td>
                <span
                  className={
                    item.stock === 0
                      ? "stock-out"
                      : item.stock < 5
                      ? "stock-low"
                      : "stock-ok"
                  }
                >
                  {item.stock === 0
                    ? "Out of Stock"
                    : item.stock < 5
                    ? "Low Stock"
                    : "In Stock"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
