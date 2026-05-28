import React, { useState } from 'react';
import { ShoppingCart, Search, ChevronDown, ChevronRight, Heart, Star, Clock, Zap, Percent, Tag, Flame, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const products = [
  { id: 1, name: 'Fresho Apple - Red Delicious', weight: '1 kg', price: 140, oldPrice: 180, discount: '22%', time: '8 MINS', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?w=400&q=80' },
  { id: 2, name: 'India Gate Basmati Rice - Super', weight: '5 kg', price: 350, oldPrice: 400, discount: '13%', time: '8 MINS', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80' },
  { id: 3, name: 'Fortune Sunflower Oil', weight: '1 L', price: 120, oldPrice: 150, discount: '20%', time: '8 MINS', img: 'https://images.unsplash.com/photo-1474979266404-7f28db3e3c7a?w=400&q=80' },
  { id: 4, name: 'Nandini Toned Milk', weight: '500 ml', price: 22, oldPrice: 24, discount: '8%', time: '8 MINS', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80' },
  { id: 5, name: 'Farm Fresh Onion', weight: '1 kg', price: 35, oldPrice: 45, discount: '22%', time: '8 MINS', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80' },
  { id: 6, name: 'Aashirvaad Atta - Whole Wheat', weight: '5 kg', price: 210, oldPrice: 250, discount: '16%', time: '8 MINS', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80' },
  { id: 7, name: 'Fresh Banana - Robusta', weight: '1 kg', price: 39, oldPrice: 49, discount: '20%', time: '8 MINS', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80' },
  { id: 8, name: 'Amul Butter - Pasteurised', weight: '500 g', price: 270, oldPrice: 290, discount: '7%', time: '8 MINS', img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80' },
];

const categories = [
  { name: 'Vegetables & Fruits', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&q=80', count: '120+ items' },
  { name: 'Dairy & Breakfast', img: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&q=80', count: '80+ items' },
  { name: 'Munchies & Snacks', img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&q=80', count: '200+ items' },
  { name: 'Cold Drinks & Juices', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&q=80', count: '60+ items' },
  { name: 'Atta, Rice & Dal', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&q=80', count: '90+ items' },
  { name: 'Masala & Dry Fruits', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&q=80', count: '150+ items' },
];

const offers = [
  { title: 'Fresh Fruits Fest', subtitle: 'Up to 50% OFF on seasonal fruits', bg: 'linear-gradient(135deg, #0c831f, #11998e)', icon: '🍎' },
  { title: 'Dairy Deals', subtitle: 'Buy 2 Get 1 Free on all dairy', bg: 'linear-gradient(135deg, #667eea, #764ba2)', icon: '🥛' },
  { title: 'Weekend Special', subtitle: 'Flat ₹100 OFF on orders above ₹500', bg: 'linear-gradient(135deg, #f093fb, #f5576c)', icon: '🎉' },
];

function ProductCard({ product }) {
  const [qty, setQty] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="card fade-in-up" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div className="img-zoom" style={{ position: 'relative', width: '100%', height: '150px' }}>
        <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <span className="badge badge-discount" style={{ position: 'absolute', top: '8px', left: '8px' }}>
          {product.discount} OFF
        </span>
        <button 
          onClick={() => setLiked(!liked)} 
          style={{ position: 'absolute', top: '8px', right: '8px', background: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Heart size={16} fill={liked ? '#ef4444' : 'none'} color={liked ? '#ef4444' : '#9ca3af'} />
        </button>
        <span className="badge badge-delivery" style={{ position: 'absolute', bottom: '8px', left: '8px' }}>
          <Clock size={10} style={{ marginRight: '3px' }} /> {product.time}
        </span>
      </div>
      <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', lineHeight: '1.3', flex: 1 }}>{product.name}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{product.weight}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <div>
            <span style={{ fontSize: '1rem', fontWeight: 700 }}>₹{product.price}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '6px' }}>₹{product.oldPrice}</span>
          </div>
          {qty === 0 ? (
            <button className="btn btn-add" onClick={() => setQty(1)}>ADD</button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button className="qty-btn" onClick={() => setQty(Math.max(0, qty - 1))}>−</button>
              <span style={{ fontWeight: 700, fontSize: '0.9rem', minWidth: '20px', textAlign: 'center' }}>{qty}</span>
              <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ClientShop() {
  return (
    <div className="page-enter" style={{ paddingBottom: '4rem' }}>
      {/* Header */}
      <header style={{ background: 'white', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0.75rem 2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.5px', textTransform: 'uppercase', cursor: 'pointer' }}>SS<span style={{ color: 'var(--primary)' }}>MART</span></h1>
          </Link>
          <div style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><Zap size={14} color="var(--primary)" /> Delivery in 8 minutes</div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
              80, Sathyamoorthy Rd, Arani Palayam... <ChevronDown size={14} style={{ marginLeft: '4px' }} />
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: 'var(--background)', borderRadius: '100px', padding: '0.6rem 1.25rem', border: '1px solid var(--border)', transition: 'border-color 0.3s, box-shadow 0.3s' }}
            onFocus={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--primary-light)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Search for atta, milk, snacks..."
              style={{ border: 'none', background: 'transparent', outline: 'none', padding: '0 0.75rem', width: '100%', fontFamily: 'inherit', fontSize: '0.9rem' }} />
          </div>
          <nav style={{ display: 'flex', gap: '0.5rem' }}>
            <Link to="/offers" className="nav-link"><Percent size={16} /> Offers</Link>
            <Link to="/categories" className="nav-link"><Tag size={16} /> Categories</Link>
          </nav>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontWeight: 500, cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-dark)'}>Login</span>
            <button className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', display: 'flex', gap: '0.5rem', fontSize: '0.95rem', borderRadius: '100px' }}>
              <ShoppingCart size={20} />
              <span style={{ fontWeight: 700 }}>My Cart</span>
            </button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>
        {/* Offer Banners Carousel */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', overflowX: 'auto', paddingBottom: '0.5rem' }} className="hide-scrollbar stagger">
          {offers.map((offer, idx) => (
            <div key={idx} className="offer-banner fade-in-up" style={{ minWidth: '380px', background: offer.bg, borderRadius: 'var(--radius-xl)', padding: '2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.25rem' }}>{offer.title}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{offer.subtitle}</div>
                <button className="btn" style={{ marginTop: '1rem', background: 'white', color: 'var(--text-dark)', fontWeight: 700, borderRadius: '100px', padding: '0.5rem 1.25rem' }}>Shop Now <ChevronRight size={16} /></button>
              </div>
              <div style={{ fontSize: '4rem', animation: 'float 3s ease-in-out infinite' }}>{offer.icon}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Shop by Category</h2>
            <Link to="/categories" style={{ color: 'var(--primary)', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>See All <ChevronRight size={16} /></Link>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '1rem' }} className="hide-scrollbar stagger">
            {categories.map((cat, idx) => (
              <div key={idx} className="category-chip fade-in-up" style={{ minWidth: '120px' }}>
                <div className="category-img" style={{ width: '120px', height: '120px', background: '#f8fafc' }}>
                  <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, textAlign: 'center' }}>{cat.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}><Flame size={22} color="var(--accent)" /> Bestsellers</h2>
          <span style={{ color: 'var(--primary)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>See All <ChevronRight size={16} /></span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }} className="stagger">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Trending Section */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}><TrendingUp size={22} color="var(--primary)" /> Trending in Arani</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }} className="stagger">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id + 100} product={product} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: '#1f2937', color: 'white', padding: '3rem 2rem', marginTop: '2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          <div>
            <h3 style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1rem' }}>SS<span style={{ color: 'var(--primary)' }}>MART</span></h3>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.6 }}>Arani's favorite supermarket. Quality products at the lowest prices, delivered in 8 minutes.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Useful Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#9ca3af', fontSize: '0.875rem' }}>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='white'} onMouseLeave={e => e.target.style.color='#9ca3af'}>About Us</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='white'} onMouseLeave={e => e.target.style.color='#9ca3af'}>Careers</span>
              <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='white'} onMouseLeave={e => e.target.style.color='#9ca3af'}>Blog</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Categories</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#9ca3af', fontSize: '0.875rem' }}>
              <span>Vegetables & Fruits</span>
              <span>Dairy & Breakfast</span>
              <span>Munchies</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#9ca3af', fontSize: '0.875rem' }}>
              <span>80, Sathyamoorthy Rd</span>
              <span>Arani Palayam, Tamil Nadu</span>
              <span>632301</span>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1280px', margin: '2rem auto 0', borderTop: '1px solid #374151', paddingTop: '1.5rem', textAlign: 'center', color: '#6b7280', fontSize: '0.8rem' }}>
          © 2026 SS MART. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
