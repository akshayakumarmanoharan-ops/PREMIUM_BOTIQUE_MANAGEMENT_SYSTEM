import MovementForm from "../Components/MovementForm";
import AddProductForm from "../Components/AddProductForm";

export default function StockMovement() {
  return (
    <div className="container">
      <h2>Stock Movement</h2>

      <MovementForm />

      <hr />

      <AddProductForm />
    </div>
  );
}
