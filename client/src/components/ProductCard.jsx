import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/productcard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      <h3 className="product-title">{product.title}</h3>
      <p className="price">${product.price}</p>
      <span className="stock-tag">In Stock</span>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
