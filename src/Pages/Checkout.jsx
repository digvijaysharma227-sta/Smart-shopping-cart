import "../styles/checkout.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="checkout-container">

      <div className="checkout-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed Successfully</h1>

        <p>
          Thank you for your purchase.
          Your order has been confirmed and is being processed.
        </p>

        <button
          className="continue-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
};

export default Checkout;