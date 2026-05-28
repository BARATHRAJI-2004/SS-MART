import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import '../styles/global.css';

const allCategories = [
  { name: 'Vegetables & Fruits', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80', count: '120+ items', color: '#dcfce7' },
  { name: 'Dairy & Breakfast', img: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&q=80', count: '80+ items', color: '#e0e7ff' },
  { name: 'Munchies & Snacks', img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&q=80', count: '200+ items', color: '#fef08a' },
  { name: 'Cold Drinks & Juices', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&q=80', count: '60+ items', color: '#fce7f3' },
  { name: 'Atta, Rice & Dal', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80', count: '90+ items', color: '#fed7aa' },
  { name: 'Masala & Dry Fruits', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80', count: '150+ items', color: '#fde68a' },
  { name: 'Oil & Ghee', img: 'https://images.unsplash.com/photo-1474979266404-7f28db3e3c7a?w=300&q=80', count: '40+ items', color: '#d9f99d' },
  { name: 'Bakery & Biscuits', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&q=80', count: '100+ items', color: '#fecaca' },
  { name: 'Cleaning Essentials', img: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300&q=80', count: '70+ items', color: '#bfdbfe' },
  { name: 'Baby Care', img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&q=80', count: '50+ items', color: '#fbcfe8' },
  { name: 'Personal Care', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&q=80', count: '110+ items', color: '#c7d2fe' },
  { name: 'Instant & Frozen Food', img: 'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=300&q=80', count: '55+ items', color: '#a7f3d0' },
];

export default function CategoriesPage() {
  return (
    <div className="page-enter" style={{ minHeight: '100vh' }}>
      <header style={{ background: 'white', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/shop" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-dark)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}>
            <ArrowLeft size={24} />
          </Link>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700 }}>All Categories</h1>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }} className="stagger">
          {allCategories.map((cat, idx) => (
            <div key={idx} className="card hover-lift fade-in-up" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1rem', cursor: 'pointer', overflow: 'hidden' }}>
              <div className="img-zoom" style={{ width: '80px', height: '80px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0, background: cat.color }}>
                <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{cat.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cat.count}</div>
              </div>
              <ChevronRight size={20} color="var(--text-muted)" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
