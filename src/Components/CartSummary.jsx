import "../styles/cartSummary.css";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>

      <div className="summary-row">
        <span>Items</span>
        <span>{totalItems}</span>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{totalPrice.toLocaleString()}</span>
      </div>

      <div className="summary-divider"></div>

      <div className="summary-total">
        <span>Total</span>
        <span>₹{totalPrice.toLocaleString()}</span>
      </div>

      <button className="checkout-btn">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;