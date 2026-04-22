import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

// Layout with Navbar + Footer
function MainLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0e1a', color: '#e2e8f0' }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

// Bare layout for auth pages
function AuthLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0e1a', color: '#e2e8f0' }}>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />

        {/* Auth pages — no navbar/footer */}
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout>} />

        {/* Protected pages — uncomment as you add more pages */}
        {/* <Route path="/dashboard" element={<ProtectedRoute><MainLayout><Dashboard /></MainLayout></ProtectedRoute>} /> */}

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}