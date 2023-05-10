import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const cartShow = useSelector((state) => state.cart.show);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://react-http-de3a1-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {cartShow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
