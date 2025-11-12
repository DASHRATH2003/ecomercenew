import React from 'react'

export default function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-5 border-b border-gray-700">
        
        {/* Company Info (Murugan) - Col 1 */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-green-400">Murugan</h3>
          <p className="mt-4 text-sm text-gray-400">Pure oils and pantry essentials crafted with care for a healthy life.</p>
          <p className="mt-4 text-sm text-gray-400">
            **Email:** <a href="mailto:support@murugan.example" className="hover:text-green-400 transition">support@murugan.example</a>
          </p>
          <p className="text-sm text-gray-400">
            **Phone:** +91-90000-00000
          </p>
        </div>

        {/* Shop Links - Col 2 */}
        <div>
          <h4 className="text-md font-semibold text-white uppercase tracking-wider">Shop</h4>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-green-400 transition">Deepam Oil</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Niger Oil</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Coconut Oil</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Custor Oil</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Refined Sunflower Oil</a></li>
          </ul>
        </div>

        {/* Help Links - Col 3 */}
        <div>
          <h4 className="text-md font-semibold text-white uppercase tracking-wider">Help</h4>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-green-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-400 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Follow & Social - Col 4 */}
        <div>
          <h4 className="text-md font-semibold text-white uppercase tracking-wider">Follow Us</h4>
          <div className="mt-4 flex items-center space-x-4">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-green-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.31 4.5h-.02a.56.56 0 0 0-.4-.14H8.71a.56.56 0 0 0-.56.56v6.52a.56.56 0 0 0 .56.56h6.58a.56.56 0 0 0 .56-.56V6.92a.56.56 0 0 0-.56-.56zm-.43 7.82a3.81 3.81 0 1 1-7.62 0 3.81 3.81 0 0 1 7.62 0zm-7.62 0a2.71 2.71 0 1 0 5.42 0 2.71 2.71 0 0 0-5.42 0zm7.14-5.28a.95.95 0 1 0 0-1.9.95.95 0 0 0 0 1.9z" clipRule="evenodd" />
              </svg>
            </a>
            
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-green-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M14.07 10H17V6h-3.92C9.5 6 9 8.24 9 9.53V10H7v4h2v8h4v-8h3l1-4h-4z"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-green-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.25 6.75a4.5 4.5 0 0 0-4.5-4.5h-7.5a4.5 4.5 0 0 0-4.5 4.5v10.5a4.5 4.5 0 0 0 4.5 4.5h7.5a4.5 4.5 0 0 0 4.5-4.5V6.75zM9.75 14.62l3.3-2.12-3.3-2.12v4.24z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between">
        <p>© {currentYear} **Murugan**. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Crafted with care and integrity.</p>
      </div>
    </footer>
  )
}