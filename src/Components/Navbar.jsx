import "../styles/navbar.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { user } = useContext(UserContext);

  const itemCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">NovaStore</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-link">
          Cart
          {itemCount > 0 && (
            <span className="cart-badge">{itemCount}</span>
          )}
        </Link>

        <Link to="/profile" className="profile-link">
          👤 {user?.username || "Profile"}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;