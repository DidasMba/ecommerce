// Header.js
//import React from 'react';
/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;*/

// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; // Importez l'icône de valise de la bibliothèque Material-UI

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="cart-icon" onClick={toggleCart}>
        <ShoppingCartIcon />
      </div>
      {isCartOpen && (
        <div className="cart-sidebar">
          {/* Contenu du panier, y compris les informations du vêtement, le prix total, etc. */}
          {/* ... */}
        </div>
      )}
    </header>
  );
};

export default Header;



