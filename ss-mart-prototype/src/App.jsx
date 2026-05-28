import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClientShop from './pages/ClientShop';
import AdminDashboard from './pages/AdminDashboard';
import MobilePrototype from './pages/MobilePrototype';
import CategoriesPage from './pages/CategoriesPage';
import OffersPage from './pages/OffersPage';
import './styles/global.css';

function HomePortal() {
  return (
    <div className="page-enter" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(160deg, #f8fafc 0%, #e2e8f0 100%)', padding: '2rem' }}>
      <div className="scale-in" style={{ textAlign: 'center', maxWidth: '700px' }}>
        
        <div className="bounce-in" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🛒</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-1px' }}>
          <span style={{ color: 'var(--secondary)' }}>SS</span><span style={{ color: 'var(--primary)' }}>MART</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.6 }}>
          Arani's Quick-Commerce Platform. Select a perspective to explore the complete digital solution.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="stagger">
          <Link to="/shop" style={{ textDecoration: 'none' }}>
            <div className="card hover-lift fade-in-up" style={{ padding: '2rem 1.5rem', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛍️</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Web Storefront</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Customer-facing shop with products, offers & cart</div>
            </div>
          </Link>
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <div className="card hover-lift fade-in-up" style={{ padding: '2rem 1.5rem', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Admin Dashboard</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Revenue, orders, inventory & analytics</div>
            </div>
          </Link>
          <Link to="/mobile" style={{ textDecoration: 'none' }}>
            <div className="card hover-lift fade-in-up" style={{ padding: '2rem 1.5rem', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Mobile App</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Interactive quick-commerce mobile prototype</div>
            </div>
          </Link>
        </div>

        <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Built for SS MART, 80 Sathyamoorthy Rd, Arani Palayam, Tamil Nadu 632301
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePortal />} />
        <Route path="/shop" element={<ClientShop />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/mobile" element={<MobilePrototype />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
