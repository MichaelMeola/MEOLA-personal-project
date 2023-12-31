import React from "react";
import "bulma/css/bulma.css";
import { useCartProducts } from "../state/CartState.jsx";
import { Link } from  'react-router-dom'

const ShopNavbar = () => {

  const { cart } = useCartProducts()
  
  return (
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../../pictures/MEOLA Sticker.png" />
        </a>
      </div>
      <div class="navbar-item has-dropdow is-hoverable">
        <a class="navbar-link">Shop</a>
        <div class="navbar-dropdown">
          <a class="navbar-item">Clothing</a>
          <a class="navbar-item">Accessories</a>
          <a class="navbar-item">Vinyls</a>
        </div>
      </div>
      <Link class="navbar-item" to="/signup">
        Sign Up
      </Link>
      <Link class="navbar-item" to="/cart">
        Cart - {cart.length}
      </Link>
    </nav>
  );
};

export default ShopNavbar;
