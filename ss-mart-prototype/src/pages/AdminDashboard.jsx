import React from 'react';
import { Users, TrendingUp, Package, AlertCircle, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight, BarChart3, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const stats = [
  { label: 'Total Revenue', value: '₹4,52,310', change: '+18.2%', up: true, icon: <DollarSign size={22} />, color: '#10b981', bgColor: 'rgba(16, 185, 129, 0.15)' },
  { label: 'Active Orders', value: '24', change: '+5.1%', up: true, icon: <ShoppingCart size={22} />, color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.15)' },
  { label: 'New Customers', value: '142', change: '+12.3%', up: true, icon: <Users size={22} />, color: '#8b5cf6', bgColor: 'rgba(139, 92, 246, 0.15)' },
  { label: 'Products Sold', value: '1,205', change: '-2.4%', up: false, icon: <Package size={22} />, color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.15)' },
];

const recentOrders = [
  { id: '#ORD-1092', customer: 'Ramesh Kumar', items: 8, total: '₹840', status: 'Delivered', statusColor: '#10b981', time: '2 hrs ago' },
  { id: '#ORD-1091', customer: 'Priya Devi', items: 5, total: '₹520', status: 'Packing', statusColor: '#f59e0b', time: '3 hrs ago' },
  { id: '#ORD-1090', customer: 'Senthil M.', items: 12, total: '₹1,280', status: 'Delivered', statusColor: '#10b981', time: '5 hrs ago' },
  { id: '#ORD-1089', customer: 'Lakshmi S.', items: 3, total: '₹215', status: 'Out for Delivery', statusColor: '#3b82f6', time: '6 hrs ago' },
  { id: '#ORD-1088', customer: 'Karthik R.', items: 6, total: '₹670', status: 'Cancelled', statusColor: '#ef4444', time: '8 hrs ago' },
];

const topProducts = [
  { name: 'India Gate Basmati', sold: 142, revenue: '₹49,700' },
  { name: 'Nandini Toned Milk', sold: 328, revenue: '₹7,216' },
  { name: 'Fresho Apple', sold: 89, revenue: '₹12,460' },
  { name: 'Aashirvaad Atta', sold: 67, revenue: '₹14,070' },
];

export default function AdminDashboard() {
  return (
    <div className="page-enter admin-bg" style={{ minHeight: '100vh', color: '#f8fafc' }}>
      {/* Header */}
      <header style={{ padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800 }}><span style={{ color: 'var(--secondary)' }}>SS</span><span style={{ color: 'var(--primary)' }}>MART</span> <span style={{ color: '#94a3b8', fontWeight: 500, fontSize: '0.9rem' }}>Admin</span></h1>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <Bell size={22} color="#94a3b8" />
            <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></div>
          </div>
          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--primary), #11998e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>A</div>
        </div>
      </header>

      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Welcome */}
        <div className="fade-in-up" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Good evening, Admin 👋</h2>
          <p style={{ color: '#94a3b8' }}>Here's what's happening at your Arani store today.</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '2rem' }} className="stagger">
          {stats.map((stat, idx) => (
            <div key={idx} className="admin-card fade-in-up" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ color: '#94a3b8', fontWeight: 500, fontSize: '0.875rem' }}>{stat.label}</div>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: stat.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color }}>{stat.icon}</div>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', color: stat.up ? '#10b981' : '#ef4444' }}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change} from last week
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem' }}>
          {/* Orders Table */}
          <div className="admin-card fade-in-up" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Recent Orders</h3>
              <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>View All</span>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ color: '#64748b', fontSize: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <th style={{ paddingBottom: '1rem', fontWeight: 500 }}>Order ID</th>
                  <th style={{ paddingBottom: '1rem', fontWeight: 500 }}>Customer</th>
                  <th style={{ paddingBottom: '1rem', fontWeight: 500 }}>Items</th>
                  <th style={{ paddingBottom: '1rem', fontWeight: 500 }}>Status</th>
                  <th style={{ paddingBottom: '1rem', fontWeight: 500 }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.2s', cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '0.85rem 0', fontWeight: 600, fontSize: '0.9rem' }}>{order.id}</td>
                    <td style={{ padding: '0.85rem 0', fontSize: '0.9rem' }}>{order.customer}</td>
                    <td style={{ padding: '0.85rem 0', fontSize: '0.9rem', color: '#94a3b8' }}>{order.items} items</td>
                    <td style={{ padding: '0.85rem 0' }}>
                      <span style={{ background: `${order.statusColor}20`, color: order.statusColor, padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600 }}>{order.status}</span>
                    </td>
                    <td style={{ padding: '0.85rem 0', fontWeight: 600, fontSize: '0.9rem' }}>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Top Products */}
            <div className="admin-card fade-in-up" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BarChart3 size={18} color="var(--primary)" /> Top Products
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {topProducts.map((p, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: i < topProducts.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{p.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{p.sold} units sold</div>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{p.revenue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="admin-card fade-in-up" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={18} color="#f59e0b" /> Alerts
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>
                  <strong style={{ display: 'block', color: '#f59e0b', fontSize: '0.85rem', marginBottom: '2px' }}>Low Stock Alert</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Premium Rice (5kg) — only 3 left</span>
                </div>
                <div style={{ padding: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '3px solid #3b82f6', borderRadius: '4px' }}>
                  <strong style={{ display: 'block', color: '#3b82f6', fontSize: '0.85rem', marginBottom: '2px' }}>New Review ★★★★★</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>"Good shop with reasonable price..."</span>
                </div>
                <div style={{ padding: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '3px solid #10b981', borderRadius: '4px' }}>
                  <strong style={{ display: 'block', color: '#10b981', fontSize: '0.85rem', marginBottom: '2px' }}>Daily Target Reached!</strong>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Sales exceeded ₹40,000 today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
