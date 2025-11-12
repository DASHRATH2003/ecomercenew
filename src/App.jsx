import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Products from './pages/Products'

export default function App() {
  const [view, setView] = React.useState('home')
  const [cart, setCart] = React.useState([])
  const addToCart = (item) => setCart(prev => [...prev, item])

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={setView} cartCount={cart.length} />
      {view === 'home' ? <Home onAddToCart={addToCart} /> : <Products onAddToCart={addToCart} />}
      <Footer />
    </div>
  )
}