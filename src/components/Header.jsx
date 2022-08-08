import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div>
        <span>ContextApi</span>
      </div>
      <div className = "links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}
export default Header;
