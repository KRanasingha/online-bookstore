import React, { useState } from 'react';

const CartPage = () => {
  // Store cart items in a State array
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "The Alchemist (Hardcover)",
      price: 1250,
      quantity: 1,
      img: "https://via.placeholder.com/50x60?text=Book"
    },
    {
      id: 2,
      name: "Madol Doova - Martin Wickramasinghe",
      price: 850,
      quantity: 2,
      img: "https://via.placeholder.com/50x60?text=Book"
    }
  ]);

  // Function to handle quantity updates
  const handleQuantityChange = (id, newQuantity) => {
    // Prevent quantity from being less than 1
    if (newQuantity < 1) return; 
    
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
    );
    setCartItems(updatedCart);
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    const filteredCart = cartItems.filter(item => item.id !== id);
    setCartItems(filteredCart);
  };

  // Calculate the total price of all items
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px 5%', color: '#111' }}>
      
      {/* Breadcrumb Navigation */}
      <nav style={{ fontSize: '14px', color: '#888', marginBottom: '40px' }}>
        Home / <span style={{ color: '#111' }}>Cart</span>
      </nav>

      {/* Cart Table Header */}
      <div style={{ 
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', 
        padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', 
        borderRadius: '4px', fontWeight: '500', marginBottom: '25px' 
      }}>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div style={{ textAlign: 'right' }}>Subtotal</div>
      </div>

      {/* List of Cart Items */}
      {cartItems.map((item) => (
        <div key={item.id} style={{ 
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', 
          padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', 
          borderRadius: '4px', alignItems: 'center', marginBottom: '20px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ position: 'relative' }}>
               {/* Delete/Remove Button */}
               <span 
                onClick={() => handleRemoveItem(item.id)}
                style={{ 
                  position: 'absolute', top: '-10px', left: '-5px', backgroundColor: '#DB4444', 
                  color: 'white', borderRadius: '50%', width: '20px', height: '20px', 
                  display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', fontSize: '12px', zIndex: 2
                }}>×</span>
               <img src={item.img} alt="Book" />
            </div>
            <span>{item.name}</span>
          </div>
          <div>Rs. {item.price.toLocaleString()}</div>
          <div>
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              style={{ width: '60px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
            />
          </div>
          <div style={{ textAlign: 'right', fontWeight: '500' }}>
            Rs. {(item.price * item.quantity).toLocaleString()}
          </div>
        </div>
      ))}

      {/* Empty Cart Message */}
      {cartItems.length === 0 && (
        <p style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
          Your cart is currently empty.
        </p>
      )}

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '60px' }}>
        <button style={{ padding: '12px 30px', background: 'none', border: '1px solid #111', borderRadius: '4px', fontWeight: '500', cursor: 'pointer' }}>Return To Shop</button>
        <button style={{ padding: '12px 30px', background: 'none', border: '1px solid #111', borderRadius: '4px', fontWeight: '500', cursor: 'pointer' }}>Update Cart</button>
      </div>

      {/* Summary Section: Coupon & Total Calculation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', alignItems: 'flex-start' }}>
        
        {/* Coupon Input Area */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Coupon Code" 
            style={{ padding: '12px 20px', border: '1px solid #111', borderRadius: '4px', width: '250px' }} 
          />
          <button style={{ padding: '12px 35px', backgroundColor: '#DB4444', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '500', cursor: 'pointer' }}>Apply Coupon</button>
        </div>

        {/* Final Calculation Box */}
        <div style={{ border: '1.5px solid #111', borderRadius: '4px', padding: '30px', width: '400px' }}>
          <h3 style={{ marginTop: 0, marginBottom: '25px' }}>Cart Total</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '15px', marginBottom: '15px' }}>
            <span>Subtotal:</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '15px', marginBottom: '15px' }}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            <span>Total:</span>
            <span style={{ fontWeight: 'bold' }}>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <button style={{ width: '100%', padding: '15px', backgroundColor: '#DB4444', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '500', cursor: 'pointer' }}>
            Process to checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartPage;