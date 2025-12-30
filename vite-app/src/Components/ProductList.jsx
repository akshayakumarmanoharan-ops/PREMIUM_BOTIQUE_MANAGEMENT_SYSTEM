import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { InventoryContext } from "../Context/InventoryContext";
import SearchBar from "./SearchBar";

export default function ProductList() {
  const { inventory } = useContext(InventoryContext);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const categories = [...new Set(inventory.map(p => p.category))];

  return (
    <>
      <SearchBar setQuery={setQuery} />

      <select onChange={e => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <div className="grid">
        {inventory
          .filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) &&
            (category === "" || p.category === category)
          )
          .map(product => (
            <div className="card" key={product.id}>
              <h3>{product.name}</h3>
              
            </div>
          ))}
      </div>
    </>
  );
}
