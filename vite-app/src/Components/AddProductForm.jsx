import { useContext, useState } from "react";
import { InventoryContext } from "../Context/InventoryContext";

export default function AddProductForm() {
  const { dispatch } = useContext(InventoryContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !stock) {
      alert("All fields required");
      return;
    }

    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: Date.now(), // simple unique id
        name,
        price: Number(price),
        stock: Number(stock),
        category: "General",
        supplier: "Internal",
        description: "Newly added product"
      }
    });

    setName("");
    setPrice("");
    setStock("");
    alert("Product added successfully ✅");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        placeholder="Initial Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <button>Add Product</button>
    </form>
  );
}
