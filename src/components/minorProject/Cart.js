import React, { useState, useEffect } from "react";

export default function EcomCart() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => setItems(data.products));
    }, []);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter(item => item.id !== id));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", padding: "10px", borderColor: getTotalPrice ? 'red' : '' }}>
            <div style={{ flex: 7, padding: "10px", overflowY: "auto" }}>
                <h2>Items</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", width: "100%" }}>
                    {items?.map((item) => (
                        <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
                            <img src={item.thumbnail} alt={item.title} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
                            <p>{item.title}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ flex: 3, padding: "10px", overflowY: "auto" }}>
                <h2>Cart</h2>
                {cart.length === 0 ? <p>No items in cart</p> :
                    <>
                        {cart.map((item, index) => (
                            <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                                <img src={item.thumbnail} alt={item.title} style={{ width: "40px", height: "40px" }} />
                                <span>{item.title}</span>
                                <span>${item.price}</span>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                        <h3>Total: ${getTotalPrice()}</h3>
                    </>
                }
            </div>
        </div>
    );
}
