import { useContext, useState } from "react";
import { InventoryContext } from "../Context/InventoryContext";

export default function MovementForm() {
  const { dispatch } = useContext(InventoryContext);
  const [id, setId] = useState("");
  const [qty, setQty] = useState("");
  const [message, setMessage] = useState("");

  const isAdmin = sessionStorage.getItem("admin");

  const submit = (e) => {
    e.preventDefault();

    if (!id || !qty) {
      setMessage("Please enter Product ID and Quantity");
      return;
    }

    dispatch({
      type: "MOVE_STOCK",
      payload: { id: Number(id), qty: Number(qty) }
    });

    setMessage("Stock updated successfully ✅");
    setId("");
    setQty("");
  };

  if (!isAdmin) {
    return <p style={{ color: "red" }}>Admin login required to update stock</p>;
  }

  return (
    <form className="form" onSubmit={submit}>
      <input
        value={id}
        placeholder="Product ID"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="number"
        value={qty}
        placeholder="Quantity (+ / -)"
        onChange={(e) => setQty(e.target.value)}
      />
      <button>Update Stock</button>
      {message && <p>{message}</p>}
    </form>
  );
}
