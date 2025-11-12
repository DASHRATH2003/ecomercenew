import React, { useState } from 'react'
import logo from '../assets/logo.jpg'

const categories = [
  { label: 'All Products' },
  { label: 'Newly Launched' },
  {
    label: 'Oils',
    children: [
      'Deepam Oil',
      'Niger Oil',
      'Coconut Oil',
      'Custor Oil',
      'Refiend Subflower oil',
    ],
  },
  { label: 'Shop' },
  { label: 'Healthy Combo' },
  { label: 'Blogs' },
]

export default function Navbar({ onNavigate, cartCount = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      <div className="bg-green-700 text-white text-center text-sm px-4 py-2">
  Discover our range of 100% Pure Cold-Pressed Oils
</div>

      <nav className="px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2" onClick={() => onNavigate && onNavigate('home')}>
            <img src={logo} alt="Murugan" className="h-12 w-auto rounded" />
            
          </a>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle Menu"
            onClick={() => setOpen(v => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          <ul className="hidden md:flex items-center gap-6 text-[15px]">
            {categories.map(item => (
              <li key={item.label} className="relative group">
                <button
                  type="button"
                  onClick={() => item.label === 'Shop' && onNavigate && onNavigate('products')}
                  className="hover:text-green-700 transition-colors"
                >
                  {item.label}
                </button>

                {item.children && (
                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg border rounded-md min-w-[220px]">
                    <ul className="py-2">
                      {item.children.map(sub => (
                        <li key={sub}>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">{sub}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <circle cx="11" cy="11" r="7" strokeWidth="2" />
                <path d="M20 20l-3-3" strokeWidth="2" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Account">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <circle cx="12" cy="8" r="4" strokeWidth="2" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" strokeWidth="2" />
              </svg>
            </button>
            <button className="relative p-2 rounded-full hover:bg-gray-100" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path d="M3 4h2l2 12h10l2-8H6" strokeWidth="2" />
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="17" cy="20" r="1.5" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-green-700 text-white text-xs leading-none px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {open && (
          <ul className="md:hidden grid gap-3 pb-4">
            {categories.map(item => (
              <li key={item.label}>
                <a href="#" className="block px-2 py-2 rounded-md hover:bg-gray-100">{item.label}</a>
                {item.children && (
                  <ul className="mt-1 grid">
                    {item.children.map(sub => (
                      <li key={sub}>
                        <a href="#" className="block px-3 py-1 rounded-md text-sm text-gray-700 hover:bg-gray-100">{sub}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}