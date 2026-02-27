import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-layout">
        <div className="cart-list">
          {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
              <div className="qty-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h3>Summary</h3>
          <div className="total-row">
            <span>Total Value:</span>
            <span className="amount">${cartTotal.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="checkout-main-btn">
            Checkout Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
