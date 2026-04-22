import React from 'react';

const HomePageContent = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#111', paddingBottom: '50px' }}>
      
      {/* 1. Hero Section & Sidebar Layout */}
      <section style={{ display: 'flex', padding: '40px 5%', gap: '30px' }}>
        {/* Sidebar Categories */}
        <aside style={{ width: '20%', borderRight: '1px solid #eee', lineHeight: '2.5' }}>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '15px', cursor: 'pointer' }}>
            <li>Fiction Books</li>
            <li>Educational Books</li>
            <li>Children's Literature</li>
            <li>Science & Technology</li>
            <li>History & Biography</li>
            <li>Self-Help & Wellness</li>
            <li>Magazines</li>
          </ul>
        </aside>

        {/* Hero Banner */}
        <div style={{ flex: 1, backgroundColor: '#000', color: '#fff', padding: '40px', display: 'flex', alignItems: 'center', borderRadius: '4px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '16px' }}>Special Book Collection</p>
            <h2 style={{ fontSize: '40px', margin: '20px 0' }}>Up to 10% <br /> off Voucher</h2>
            <button style={{ background: 'none', border: 'none', color: '#fff', textDecoration: 'underline', cursor: 'pointer' }}>Shop Now →</button>
          </div>
          <div style={{ flex: 1, textAlign: 'right' }}>
            {/* මෙතැනට පොත්වල පින්තූරයක් එක් කරන්න */}
            <img src="https://via.placeholder.com/300x200?text=Book+Banner" alt="Banner" style={{ maxWidth: '100%' }} />
          </div>
        </div>
      </section>

      {/* 2. Flash Sales Section */}
      <section style={{ padding: '40px 5%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <div style={{ width: '15px', height: '30px', backgroundColor: '#DB4444', borderRadius: '4px' }}></div>
          <span style={{ color: '#DB4444', fontWeight: 'bold' }}>Today's</span>
        </div>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Flash Sales</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} style={{ position: 'relative' }}>
              <div style={{ height: '250px', backgroundColor: '#f5f5f5', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#DB4444', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>-40%</span>
                <img src="https://via.placeholder.com/150x200?text=Book+Cover" alt="Book" />
              </div>
              <h3 style={{ fontSize: '16px', marginTop: '10px' }}>The Great Adventure Book</h3>
              <p style={{ color: '#DB4444', fontWeight: 'bold' }}>Rs. 1,200 <span style={{ color: '#888', textDecoration: 'line-through', marginLeft: '10px', fontWeight: 'normal' }}>Rs. 2,000</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Browse By Category - Books */}
      <section style={{ padding: '40px 5%', borderTop: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <div style={{ width: '15px', height: '30px', backgroundColor: '#DB4444', borderRadius: '4px' }}></div>
          <span style={{ color: '#DB4444', fontWeight: 'bold' }}>Categories</span>
        </div>
        <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>Browse By Book Category</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {['Novel', 'Academic', 'History', 'Sci-Fi', 'Poetry', 'Business'].map(cat => (
            <div key={cat} style={{ width: '150px', height: '130px', border: '1px solid #ddd', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', cursor: 'pointer', transition: '0.3s' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>📚</div>
              <span style={{ fontWeight: '500' }}>{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Features */}
      <section style={{ display: 'flex', justifyContent: 'space-around', padding: '80px 5%', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '30px', marginBottom: '15px' }}>🚚</div>
          <h4 style={{ margin: '5px 0', textTransform: 'uppercase' }}>Free and Fast Delivery</h4>
          <p style={{ fontSize: '12px', color: '#666' }}>Free delivery for all orders over Rs. 5,000</p>
        </div>
        <div>
          <div style={{ fontSize: '30px', marginBottom: '15px' }}>🎧</div>
          <h4 style={{ margin: '5px 0', textTransform: 'uppercase' }}>24/7 Customer Service</h4>
          <p style={{ fontSize: '12px', color: '#666' }}>Friendly 24/7 customer support</p>
        </div>
        <div>
          <div style={{ fontSize: '30px', marginBottom: '15px' }}>🛡️</div>
          <h4 style={{ margin: '5px 0', textTransform: 'uppercase' }}>Money Back Guarantee</h4>
          <p style={{ fontSize: '12px', color: '#666' }}>We return money within 30 days</p>
        </div>
      </section>

    </div>
  );
};

export default HomePageContent;