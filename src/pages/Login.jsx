import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4c-7.7 0-14.3 4.4-17.7 10.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36.5 24 36.5c-5.2 0-9.6-3.5-11.2-8.3l-6.5 5C9.7 39.5 16.4 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.5-2.5 4.6-4.7 6l6.2 5.2C40.7 35.7 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
)

export default function Login() {
  const navigate = useNavigate()
  const { signIn, signInWithGoogle, signInWithGitHub } = useAuth()

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [oauthLoading, setOauthLoading] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please fill in all fields.')
      return
    }
    setLoading(true)
    const { error } = await signIn({ email: form.email, password: form.password })
    setLoading(false)
    if (error) {
      setError(error.message)
    } else {
      navigate('/')
    }
  }

  const handleGoogle = async () => {
    setOauthLoading('google')
    await signInWithGoogle()
    setOauthLoading('')
  }

  const handleGitHub = async () => {
    setOauthLoading('github')
    await signInWithGitHub()
    setOauthLoading('')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Grid bg */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      <div className="glow-cyan" style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', top: -100, right: -100, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <Link to="/" style={{ fontFamily: 'Space Mono, monospace', fontSize: 20, fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
            Digi<span style={{ color: '#00e5c7' }}>Verify</span> School
          </Link>
          <p style={{ color: '#8892a4', fontSize: 14, marginTop: 8, fontWeight: 300 }}>
            Sign in to your account
          </p>
        </div>

        {/* Card */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '36px 32px' }}>

          {/* OAuth buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            <button
              onClick={handleGoogle}
              disabled={!!oauthLoading}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', padding: '11px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, color: '#e2e8f0', fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s', opacity: oauthLoading === 'github' ? 0.5 : 1 }}
              onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
              onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            >
              <GoogleIcon />
              {oauthLoading === 'google' ? 'Redirecting...' : 'Continue with Google'}
            </button>

            <button
              onClick={handleGitHub}
              disabled={!!oauthLoading}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', padding: '11px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, color: '#e2e8f0', fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s', opacity: oauthLoading === 'google' ? 0.5 : 1 }}
              onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
              onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            >
              <GitHubIcon />
              {oauthLoading === 'github' ? 'Redirecting...' : 'Continue with GitHub'}
            </button>
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ fontSize: 12, color: '#8892a4', fontFamily: 'Space Mono, monospace' }}>or</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, color: '#8892a4', marginBottom: 6, fontWeight: 500 }}>
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, color: '#f0f4ff', fontSize: 14, fontFamily: 'DM Sans, sans-serif', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = 'rgba(0,229,199,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <label style={{ fontSize: 13, color: '#8892a4', fontWeight: 500 }}>Password</label>
                <a href="#" style={{ fontSize: 12, color: '#00e5c7', textDecoration: 'none' }}>Forgot password?</a>
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                autoComplete="current-password"
                style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, color: '#f0f4ff', fontSize: 14, fontFamily: 'DM Sans, sans-serif', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = 'rgba(0,229,199,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            {/* Error */}
            {error && (
              <div style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: 6, padding: '10px 14px', fontSize: 13, color: '#f87171' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', padding: '12px', fontSize: 15, marginTop: 4, opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Sign up link */}
        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 14, color: '#8892a4' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#00e5c7', textDecoration: 'none', fontWeight: 500 }}>
            Create one free
          </Link>
        </p>
      </div>
    </div>
  )
}