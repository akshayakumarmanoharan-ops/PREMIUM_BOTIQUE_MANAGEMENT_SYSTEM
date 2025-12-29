import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Product List</Link>
      </li>
      <li>
        <Link to="/add">Add Product</Link>
      </li>
    </ul>
  );
};

export default Navbar;
