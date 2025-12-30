import { useParams } from "react-router-dom";
import { useContext } from "react";
import { InventoryContext } from "../Context/InventoryContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { inventory } = useContext(InventoryContext);

  const product = inventory.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Supplier: {product.supplier}</p>
      <p>Price: ₹{product.price}</p>
<p>
  Stock:
  <span className={product.stock < 5 ? "low" : "ok"}>
    {" "}{product.stock}
  </span>
</p>
    </div>
  );
}
