import "../styles/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../Redux/CartSlice";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-card">
          <h2>Your Cart is Empty</h2>
          <p>Add some products to start shopping.</p>

          <button onClick={() => navigate("/")}>
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <div className="cart-left">

        <div className="cart-header">
          <h1>{user.username}'s Cart</h1>
          <span>{totalItems} Items</span>
        </div>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>

            <div className="cart-item-info">

              <div className="cart-image">
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/120"
                  }
                  alt={item.name}
                />
              </div>

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString()}</p>
              </div>

            </div>

            <div className="cart-actions">

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: Number(e.target.value),
                    })
                  )
                }
              />

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="cart-right">

        <div className="summary-card">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;