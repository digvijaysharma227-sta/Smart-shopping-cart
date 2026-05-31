import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartSlice";
import products from "../Data/Porduct";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const product = products.find(x => x.id === Number(id));
  const inCart = cartItems.some(i => i.id === product.id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
      <p>{product.description}</p>

      {inCart ? (
        <div>
          <button onClick={() => dispatch(addToCart(product))}>
            Add More (+)
          </button>

          <button onClick={() => dispatch(removeFromCart(product.id))}>
            Remove from Cart
          </button>
        </div>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      )}

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ProductDetails;
