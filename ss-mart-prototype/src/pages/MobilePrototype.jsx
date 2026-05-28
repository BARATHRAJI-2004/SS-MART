import React, { useState } from 'react';
import { Home, Search, ShoppingBag, User, MapPin, Clock, Heart, Zap, ChevronRight, Percent, Tag, Bell } from 'lucide-react';
import '../styles/global.css';

const categories = [
  { name: 'Fruits', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&q=80' },
  { name: 'Dairy', img: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=150&q=80' },
  { name: 'Snacks', img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=150&q=80' },
  { name: 'Drinks', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=150&q=80' },
  { name: 'Rice', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&q=80' },
  { name: 'Masala', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=150&q=80' },
];

const products = [
  { id: 1, name: 'India Gate Basmati', weight: '1 kg', price: 140, oldPrice: 180, discount: '22%', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&q=80' },
  { id: 2, name: 'Nandini Milk', weight: '500 ml', price: 22, oldPrice: 24, discount: '8%', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80' },
  { id: 3, name: 'Fresh Apple', weight: '1 kg', price: 140, oldPrice: 180, discount: '22%', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?w=200&q=80' },
  { id: 4, name: 'Farm Onion', weight: '1 kg', price: 35, oldPrice: 45, discount: '22%', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&q=80' },
];

function MobileProductCard({ product }) {
  const [qty, setQty] = useState(0);
  return (
    <div className="card" style={{ minWidth: '130px', padding: '0', overflow: 'hidden', transition: 'all 0.25s ease' }}>
      <div className="img-zoom" style={{ position: 'relative', height: '90px' }}>
        <img src={product.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={product.name} />
        <span className="badge badge-discount" style={{ position: 'absolute', top: '4px', left: '4px', fontSize: '0.55rem' }}>{product.discount} OFF</span>
      </div>
      <div style={{ padding: '0.5rem' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 600, lineHeight: '1.2', marginBottom: '0.2rem' }}>{product.name}</div>
        <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>{product.weight}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>₹{product.price}</span>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '3px' }}>₹{product.oldPrice}</span>
          </div>
          {qty === 0 ? (
            <button className="btn btn-add" onClick={() => setQty(1)} style={{ padding: '0.15rem 0.4rem', fontSize: '0.6rem' }}>ADD</button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button className="qty-btn" onClick={() => setQty(Math.max(0, qty - 1))} style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>−</button>
              <span style={{ fontWeight: 700, fontSize: '0.7rem' }}>{qty}</span>
              <button className="qty-btn" onClick={() => setQty(qty + 1)} style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MobilePrototype() {
  const [activeTab, setActiveTab] = useState('home');
  const [cartCount] = useState(2);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)', padding: '2rem' }}>
      
      <div className="slide-in-left" style={{ textAlign: 'left', marginRight: '4rem', maxWidth: '320px' }}>
        <span className="badge badge-new" style={{ marginBottom: '1rem', display: 'inline-block', padding: '4px 12px', fontSize: '0.8rem' }}>MOBILE PROTOTYPE</span>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1rem', lineHeight: 1.2 }}>Realistic Quick-Commerce App</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>Present this ultra-realistic Blinkit-style mobile interface to SS MART. Features include functional add-to-cart, real imagery, and smooth micro-animations.</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}><Zap size={16} /> Fast UX</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}><Heart size={16} /> Wishlist</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}><ShoppingBag size={16} /> Cart</div>
        </div>
      </div>

      <div className="phone-frame scale-in" style={{ background: '#f8f9fa' }}>
        <div className="mobile-notch"></div>
        
        <div style={{ height: '100%', overflowY: 'auto', paddingBottom: '80px' }} className="hide-scrollbar">
          
          {/* Sticky Header */}
          <div style={{ padding: '3rem 1rem 0.75rem 1rem', background: 'white', position: 'sticky', top: 0, zIndex: 10, borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '1.1rem' }}>
                  <Zap size={16} color="var(--primary)" fill="var(--primary)" /> Delivery in 8 minutes
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
                  <MapPin size={12} /> Sathyamoorthy Rd, Arani <span style={{ color: 'var(--primary)', fontWeight: 600 }}>▼</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}>
                  <Bell size={18} color="var(--text-muted)" />
                </div>
              </div>
            </div>
            
            <div style={{ background: 'var(--background)', borderRadius: '10px', padding: '0.65rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border)' }}>
              <Search size={16} color="var(--text-muted)" />
              <input type="text" placeholder="Search for atta, dal, curd and more" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.8rem', background: 'transparent', fontFamily: 'inherit' }} />
            </div>
          </div>

          <div style={{ padding: '1rem' }}>
            
            {/* Promo Banner */}
            <div className="offer-banner" style={{ width: '100%', height: '110px', background: 'linear-gradient(135deg, #0c831f, #11998e)', borderRadius: '14px', padding: '1rem 1.25rem', color: 'white', marginBottom: '1.25rem', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
              <div style={{ zIndex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '4px' }}>Mega Grocery Sale</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.9, marginBottom: '8px' }}>Up to 50% OFF on essentials</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255,255,255,0.2)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                  <Tag size={10} style={{ marginRight: '4px' }} /> USE: MEGA50
                </div>
              </div>
              <div style={{ position: 'absolute', right: '10px', bottom: '-5px', fontSize: '4.5rem', opacity: 0.8, animation: 'float 3s ease-in-out infinite' }}>🛒</div>
            </div>

            {/* Categories */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Shop by Category</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>All <ChevronRight size={14} /></span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }} className="stagger">
              {categories.map((cat, i) => (
                <div key={i} className="category-chip fade-in-up" style={{ gap: '0.25rem' }}>
                  <div className="category-img" style={{ width: '100%', height: '65px', background: '#eef2f6' }}>
                    <img src={cat.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={cat.name} />
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, textAlign: 'center', lineHeight: '1.2' }}>{cat.name}</span>
                </div>
              ))}
            </div>

            {/* Products - Horizontal Scroll */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><Zap size={14} color="var(--accent)" fill="var(--accent)" /> Daily Essentials</h3>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.75rem', marginLeft: '-1rem', paddingLeft: '1rem', marginRight: '-1rem', paddingRight: '1rem' }} className="hide-scrollbar stagger">
              {products.map((product) => (
                <MobileProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Second Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', marginTop: '0.5rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><Percent size={14} color="var(--danger, red)" /> Today's Deals</h3>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.75rem', marginLeft: '-1rem', paddingLeft: '1rem', marginRight: '-1rem', paddingRight: '1rem' }} className="hide-scrollbar stagger">
              {products.slice().reverse().map((product, idx) => (
                <MobileProductCard key={product.id + 10} product={product} />
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Tab Navigation */}
        <div style={{ position: 'absolute', bottom: 0, width: '100%', background: 'white', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-around', padding: '0.6rem 0 1.25rem 0', zIndex: 10 }}>
          {[
            { id: 'home', icon: <Home size={22} />, label: 'Home' },
            { id: 'search', icon: <Search size={22} />, label: 'Search' },
            { id: 'cart', icon: <ShoppingBag size={22} />, label: 'Cart', badge: cartCount },
            { id: 'profile', icon: <User size={22} />, label: 'Account' },
          ].map(tab => (
            <div key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)', gap: '2px', cursor: 'pointer', position: 'relative', transition: 'color 0.2s' }}>
              {tab.icon}
              {tab.badge && (
                <div className="bounce-in" style={{ position: 'absolute', top: '-6px', right: '-8px', width: '18px', height: '18px', background: 'var(--accent)', color: 'white', borderRadius: '50%', fontSize: '0.55rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{tab.badge}</div>
              )}
              <span style={{ fontSize: '0.6rem', fontWeight: activeTab === tab.id ? 700 : 500 }}>{tab.label}</span>
              {activeTab === tab.id && <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)', marginTop: '1px' }}></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
