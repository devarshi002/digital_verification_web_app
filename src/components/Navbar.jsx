import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { navLinks } from '../data/siteData'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
    setDropdownOpen(false)
  }

  const getInitials = (user) => {
    const name = user?.user_metadata?.full_name || user?.email || ''
    return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
  }

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: scrolled ? 'rgba(10,14,26,0.98)' : 'rgba(10,14,26,0.95)',
      borderBottom: scrolled ? '1px solid rgba(0,229,199,0.2)' : '1px solid rgba(0,229,199,0.1)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        {/* Logo */}
        <a href="/" style={{ fontFamily: 'Space Mono, monospace', fontSize: 18, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
          Digi<span style={{ color: '#00e5c7' }}>Verify</span> School
        </a>

        {/* Links */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} style={{ color: '#8892a4', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}
                onMouseOver={e => e.target.style.color = '#00e5c7'}
                onMouseOut={e => e.target.style.color = '#8892a4'}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {user ? (
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,229,199,0.15)', border: '1px solid rgba(0,229,199,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Mono, monospace', fontSize: 12, fontWeight: 700, color: '#00e5c7', cursor: 'pointer' }}>
                {getInitials(user)}
              </button>
              {dropdownOpen && (
                <div style={{ position: 'absolute', top: 44, right: 0, width: 200, background: '#0d1225', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}>
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <p style={{ fontSize: 13, fontWeight: 500, color: '#e2e8f0', margin: '0 0 2px' }}>{user?.user_metadata?.full_name || 'Student'}</p>
                    <p style={{ fontSize: 11, color: '#8892a4', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user?.email}</p>
                  </div>
                  <div style={{ padding: '6px 0' }}>
                    <button onClick={handleSignOut}
                      style={{ width: '100%', textAlign: 'left', padding: '9px 16px', background: 'none', border: 'none', color: '#f87171', fontSize: 13, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(248,113,113,0.08)'}
                      onMouseOut={e => e.currentTarget.style.background = 'none'}
                    >Sign out</button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={() => navigate('/login')}
                style={{ background: 'none', border: 'none', color: '#cbd5e1', fontSize: 14, fontWeight: 500, cursor: 'pointer', padding: '8px 16px', fontFamily: 'DM Sans, sans-serif' }}
                onMouseOver={e => e.target.style.color = '#fff'}
                onMouseOut={e => e.target.style.color = '#cbd5e1'}
              >Login</button>
              <button className="btn-outline-cyan" onClick={() => navigate('/signup')}>Enroll Now</button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}