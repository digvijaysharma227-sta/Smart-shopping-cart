import "../styles/productCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find(
    (item) => item.id === product.id
  );

  const quantity = cartItem?.quantity || 0;

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="product-image">
        <img
          src={
            product.image ||
            "https://via.placeholder.com/300x220"
          }
          alt={product.name}
        />
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>

        <p className="product-price">
          ₹{product.price.toLocaleString()}
        </p>

        {quantity > 0 ? (
          <div
            className="quantity-controls"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="qty-btn"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              className="qty-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="add-cart-btn"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart(product));
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;