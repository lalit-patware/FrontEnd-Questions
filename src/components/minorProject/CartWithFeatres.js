import React, { useState, useEffect } from "react";

const API_URL = "https://dummyjson.com/products"; // New Dummy API

export default function EcomCart() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setItems(data.products));
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === id);
      if (existingItem.quantity > 1) {
        return prev.map((cartItem) =>
          cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
      } else {
        return prev.filter((cartItem) => cartItem.id !== id);
      }
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ display: "flex", height: "100vh", gap: "10px", padding: "10px" }}>
      {/* Listing Section */}
      <div style={{ flex: 7, overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
        <h2>Items</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px" }}>
          {items.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
              <img src={item.thumbnail} alt={item.title} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
              <p>{item.title}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart ({cart.find(cartItem => cartItem.id === item.id)?.quantity || 0})</button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Cart Section */}
      <div style={{ flex: 3, border: "1px solid #ccc", padding: "10px", overflowY: "auto" }}>
        <h2>Cart</h2>
        {cart.length === 0 ? <p>No items in cart</p> :
          <>
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <img src={item.thumbnail} alt={item.title} style={{ width: "40px", height: "40px" }} />
                <span>{item.title}</span>
                <span>${(item.price * item.quantity).toFixed(2)} ({item.quantity})</span>
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            ))}
            <h3>Total: ${getTotalPrice()}</h3>
          </>
        }
      </div>
    </div>
  );
}
