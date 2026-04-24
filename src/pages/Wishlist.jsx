import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  // Initial items in the wishlist
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "The Great Gatsby",
      price: 1500,
      discountPrice: 2000,
      discountBadge: "-25%",
      img: "https://via.placeholder.com/150x200?text=Novel"
    },
    {
      id: 2,
      name: "Organic Chemistry Guide",
      price: 3200,
      img: "https://via.placeholder.com/150x200?text=Academic"
    },
    {
      id: 3,
      name: "History of Sri Lanka",
      price: 1800,
      img: "https://via.placeholder.com/150x200?text=History"
    },
    {
      id: 4,
      name: "Sherlock Holmes Vol 1",
      price: 2500,
      discountPrice: 3000,
      discountBadge: "-15%",
      img: "https://via.placeholder.com/150x200?text=Mystery"
    }
  ]);

  // Remove an item from the wishlist
  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px 5%', color: '#111' }}>
      
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Wishlist ({wishlistItems.length})</h2>
        <button style={{ 
          padding: '12px 30px', border: '1px solid #111', background: 'none', 
          borderRadius: '4px', fontWeight: '500', cursor: 'pointer' 
        }}>
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Items Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '30px' 
      }}>
        {wishlistItems.map((item) => (
          <div key={item.id} style={{ position: 'relative' }}>
            
            {/* Product Image & Icons Overlay */}
            <div style={{ 
              backgroundColor: '#f5f5f5', borderRadius: '4px', height: '280px', 
              display: 'flex', justifyContent: 'center', alignItems: 'center', 
              position: 'relative', overflow: 'hidden' 
            }}>
              {item.discountBadge && (
                <span style={{ 
                  position: 'absolute', top: '12px', left: '12px', 
                  backgroundColor: '#DB4444', color: 'white', 
                  padding: '4px 10px', borderRadius: '4px', fontSize: '12px' 
                }}>
                  {item.discountBadge}
                </span>
              )}

              {/* Delete Icon Button */}
              <div 
                onClick={() => removeItem(item.id)}
                style={{ 
                  position: 'absolute', top: '12px', right: '12px', 
                  backgroundColor: 'white', borderRadius: '50%', width: '30px', height: '30px', 
                  display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' 
                }}>
                <span style={{ fontSize: '18px' }}>🗑️</span>
              </div>

              <img src={item.img} alt={item.name} style={{ maxWidth: '120px' }} />

              {/* Add to Cart Overlay Button */}
              <button style={{ 
                position: 'absolute', bottom: '0', width: '100%', 
                backgroundColor: '#000', color: '#fff', border: 'none', 
                padding: '12px', cursor: 'pointer', display: 'flex', 
                justifyContent: 'center', alignItems: 'center', gap: '8px' 
              }}>
                <span style={{ fontSize: '18px' }}>🛒</span> Add To Cart
              </button>
            </div>

            {/* Product Information */}
            <div style={{ marginTop: '15px' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 8px 0', fontWeight: '500' }}>{item.name}</h3>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: '#DB4444', fontWeight: 'bold' }}>Rs. {item.price.toLocaleString()}</span>
                {item.discountPrice && (
                  <span style={{ color: '#888', textDecoration: 'line-through', fontSize: '14px' }}>
                    Rs. {item.discountPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State Message */}
      {wishlistItems.length === 0 && (
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <p style={{ color: '#888' }}>Your wishlist is empty.</p>
          <Link to="/">
            <button style={{ 
              marginTop: '20px', padding: '12px 30px', backgroundColor: '#DB4444', 
              color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' 
            }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      {/* Just For You - Recommendations Section */}
      <div style={{ marginTop: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <div style={{ width: '15px', height: '30px', backgroundColor: '#DB4444', borderRadius: '4px' }}></div>
          <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Just For You</h2>
        </div>
        {/* You can add another grid of book components here */}
      </div>

    </div>
  );
};

export default WishlistPage;