// ProductList.js
import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <button className="red-button" onClick={() => addToCart(product)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;




// ProductList.js
/*import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <p>${product.price}</p>
          <button className="red-button" onClick={() => addToCart(product)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;*/

