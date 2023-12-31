// Cart.js
import React from 'react';

const Cart = ({ cart, increaseQuantity, decreaseQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <button className="red-button" onClick={() => increaseQuantity(item)}>+</button>
            <button onClick={() => decreaseQuantity(item)}>-</button>
          </div>
        ))}
      </div>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

export default Cart;




// Cart.js
/*import React from 'react';

const Cart = ({ cart, increaseQuantity, decreaseQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.title}</p>
          <p>${item.price * item.quantity}</p>
          <button className="red-button" onClick={() => increaseQuantity(item)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => decreaseQuantity(item)}>-</button>
        </div>
      ))}
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

export default Cart;*/
