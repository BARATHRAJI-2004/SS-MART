import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Percent, Gift, Star, ChevronRight, Zap } from 'lucide-react';
import '../styles/global.css';

const bannerOffers = [
  { title: 'Fresh Fruits Fest', subtitle: 'Up to 50% OFF on seasonal fruits', bg: 'linear-gradient(135deg, #0c831f, #11998e)', icon: '🍎', code: 'FRUITS50' },
  { title: 'Dairy Deals', subtitle: 'Buy 2 Get 1 Free on all dairy products', bg: 'linear-gradient(135deg, #667eea, #764ba2)', icon: '🥛', code: 'DAIRY3' },
  { title: 'Weekend Special', subtitle: 'Flat ₹100 OFF on orders above ₹500', bg: 'linear-gradient(135deg, #f5576c, #ff6b6b)', icon: '🎉', code: 'WKND100' },
];

const couponOffers = [
  { code: 'SSMART20', discount: '20% OFF', minOrder: '₹299', maxDiscount: '₹80', expiry: '31 May 2026', isNew: true },
  { code: 'FIRSTORDER', discount: 'Flat ₹50 OFF', minOrder: '₹199', maxDiscount: '₹50', expiry: '15 Jun 2026', isNew: false },
  { code: 'FRESH10', discount: '10% OFF on Veggies', minOrder: '₹149', maxDiscount: '₹40', expiry: '30 Jun 2026', isNew: false },
  { code: 'DAIRY25', discount: '25% OFF on Dairy', minOrder: '₹199', maxDiscount: '₹100', expiry: '10 Jun 2026', isNew: true },
];

const dealProducts = [
  { name: 'Fresho Apple', weight: '1 kg', price: 90, oldPrice: 180, discount: '50%', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?w=300&q=80' },
  { name: 'Nandini Milk', weight: '500 ml', price: 18, oldPrice: 24, discount: '25%', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80' },
  { name: 'Aashirvaad Atta', weight: '5 kg', price: 175, oldPrice: 250, discount: '30%', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80' },
  { name: 'Fresh Banana', weight: '1 kg', price: 29, oldPrice: 49, discount: '41%', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&q=80' },
];

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="page-enter" style={{ minHeight: '100vh', paddingBottom: '3rem' }}>
      {/* Header */}
      <header style={{ background: 'white', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/shop" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-dark)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>
            <ArrowLeft size={24} />
          </Link>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}><Percent size={20} color="var(--accent)" /> Offers & Deals</h1>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>

        {/* Big Banners */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }} className="stagger">
          {bannerOffers.map((offer, idx) => (
            <div key={idx} className="offer-banner fade-in-up" style={{ background: offer.bg, borderRadius: 'var(--radius-xl)', padding: '2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '160px' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.25rem' }}>{offer.title}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '1rem' }}>{offer.subtitle}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '0.4rem 0.75rem', fontSize: '0.8rem', fontWeight: 700, border: '1px dashed rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
                  CODE: {offer.code}
                </div>
              </div>
              <div style={{ fontSize: '4.5rem', animation: 'float 3s ease-in-out infinite' }}>{offer.icon}</div>
            </div>
          ))}
        </div>

        {/* Coupon Codes */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Gift size={22} color="var(--primary)" /> Available Coupons
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '3rem' }} className="stagger">
          {couponOffers.map((coupon, idx) => (
            <div key={idx} className="card hover-glow fade-in-up" style={{ padding: '1.25rem', position: 'relative', overflow: 'hidden' }}>
              {coupon.isNew && <span className="badge badge-new" style={{ position: 'absolute', top: '12px', right: '12px' }}>NEW</span>}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Percent size={22} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>{coupon.discount}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Min. order: {coupon.minOrder}</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--background)', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px dashed var(--border)' }}>
                <span style={{ fontWeight: 700, letterSpacing: '1.5px', fontSize: '0.9rem' }}>{coupon.code}</span>
                <button className="btn" onClick={() => handleCopy(coupon.code)}
                  style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem', background: copiedCode === coupon.code ? 'var(--success)' : 'var(--primary)', color: 'white', borderRadius: '6px' }}>
                  {copiedCode === coupon.code ? '✓ Copied!' : 'COPY'}
                </button>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> Valid till {coupon.expiry} • Max discount: {coupon.maxDiscount}
              </div>
            </div>
          ))}
        </div>

        {/* Deal of the Day */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={22} color="var(--accent)" /> Deal of the Day
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }} className="stagger">
          {dealProducts.map((product, idx) => (
            <div key={idx} className="card fade-in-up" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="img-zoom" style={{ position: 'relative', height: '160px' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-discount" style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '0.8rem', padding: '4px 10px' }}>
                  {product.discount} OFF
                </span>
              </div>
              <div style={{ padding: '1rem' }}>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{product.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{product.weight}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>₹{product.price}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '6px' }}>₹{product.oldPrice}</span>
                  </div>
                  <button className="btn btn-add">ADD</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
