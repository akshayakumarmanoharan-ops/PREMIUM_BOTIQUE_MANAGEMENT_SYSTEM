import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>Product List</h1>
      <h2>List of Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>{" "}
            - Stock: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
