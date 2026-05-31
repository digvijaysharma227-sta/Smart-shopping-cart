import "../styles/home.css";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../Context/UserContext";
import productsData from "../Data/Porduct";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const cartItems = useSelector((state) => state.cart.items);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="home-container">

      <section className="hero-section">
        <h1>
          Welcome back,
          <span> {user?.username}</span>
        </h1>

        <p>
          Discover premium products with a seamless shopping experience.
        </p>
      </section>

      <section className="home-topbar">
        <input
          className="search-input"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="stats-container">

          <div className="stat-card">
            <h4>Items</h4>
            <span>{totalQuantity}</span>
          </div>

          <div className="stat-card">
            <h4>Total</h4>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>

        </div>
      </section>

      <section className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>

    </div>
  );
};

export default Home;