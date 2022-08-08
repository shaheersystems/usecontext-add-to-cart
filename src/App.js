import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState } from "react";
const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          exact
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
};

export default App;
