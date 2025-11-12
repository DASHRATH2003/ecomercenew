import React from 'react'
import ProductCard from '../components/ProductCard'
import { db } from '../lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Home({ onAddToCart }) {
  const placeholder = 'https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg'
  const cleanTitle = t => String(t || '').replace(/\bmurugan\b/ig, '').replace(/\s+/g, ' ').trim()
  const fallback = [
    {
      tag: 'Best Seller',
      off: 5,
      title: 'Groundnut Oil (Wood Pressed)',
      size: '1 Ltr',
      description: 'Traditional wood-pressed groundnut oil for everyday cooking.',
      price: '320',
      image: placeholder,
    },
    {
      tag: 'Best Seller',
      off: 4,
      title: 'Sesame Oil (Cold Pressed)',
      size: '1 Ltr',
      description: 'Cold-pressed sesame oil with rich, nutty flavor.',
      price: '380',
      image: placeholder,
    },
    {
      tag: 'New Launch',
      off: 3,
      title: 'Coconut Oil (Wood Pressed)',
      size: '1 Ltr',
      description: 'Pure wood-pressed coconut oil for cooking and skincare.',
      price: '425',
      image: placeholder,
    },
    {
      tag: 'New Launch',
      off: 4,
      title: 'Mustard Oil (Cold Pressed)',
      size: '1 Ltr',
      description: 'Strong pungent mustard oil for authentic taste.',
      price: '350',
      image: placeholder,
    },
    {
      tag: 'Short Sale',
      off: 6,
      title: 'Sunflower Oil (Refined)',
      size: '1 Ltr',
      description: 'Light, refined sunflower oil for daily use.',
      price: '210',
      image: placeholder,
    },
    {
      tag: 'Best Seller',
      off: 6,
      title: 'Deepam Lamp Oil',
      size: '1 Ltr',
      description: 'Pure lamp oil for pooja and daily rituals.',
      price: '220',
      image: placeholder,
    },
  ]
  const bestsellers = [
    {
      tag: 'Best Seller',
      off: 5,
      title: 'Groundnut Oil (Wood Pressed)',
      size: '1 Ltr',
      description: 'Deep aroma, perfect for everyday frying and tadka.',
      price: '320',
      image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop',
    },
    {
      tag: 'Best Seller',
      off: 4,
      title: 'Sesame Oil (Cold Pressed)',
      size: '1 Ltr',
      description: 'Nutty flavour for traditional recipes and pickles.',
      price: '380',
      image: 'https://images.unsplash.com/photo-1621401830921-0516c2c73033?q=80&w=1200&auto=format&fit=crop',
    },
    {
      tag: 'Best Seller',
      off: 3,
      title: 'Mustard Oil (Cold Pressed)',
      size: '1 Ltr',
      description: 'Strong pungency; ideal for bhaji and marinades.',
      price: '350',
      image: 'https://images.unsplash.com/photo-1505575972945-279931c7c8e1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      tag: 'Best Seller',
      off: 2,
      title: 'Coconut Oil (Wood Pressed)',
      size: '1 Ltr',
      description: 'Cooking + skincare: natural, light and aromatic.',
      price: '425',
      image: 'https://images.unsplash.com/photo-1561553873-0317c0353edf?q=80&w=1200&auto=format&fit=crop',
    },
    {
      tag: 'Best Seller',
      off: 6,
      title: 'Sunflower Oil (Refined)',
      size: '1 Ltr',
      description: 'Light daily-use oil, neutral taste, consistent results.',
      price: '210',
      image: 'https://images.unsplash.com/photo-1514996937319-d23f0efb71e2?q=80&w=1200&auto=format&fit=crop',
    },
  ]
  const [items, setItems] = React.useState(fallback)
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDocs(collection(db, 'products'))
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        const onlyOil = list.filter(p => typeof p.title === 'string' && /oil/i.test(p.title))
        if (onlyOil.length) {
          setItems(onlyOil.map(p => ({
            tag: p.tag,
            off: p.off,
            title: cleanTitle(p.title),
            size: p.size,
            description: p.description,
            price: p.price,
            image: p.image || placeholder,
          })))
        }
      } catch (e) {
        console.error(e)
        setItems(fallback)
      }
    }
    load()
  }, [])
  return (
    <main>
      <section className="bg-green-50">
        <div className="px-4 md:px-8 py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-green-900">
                Pure Cold-Pressed Oils,
                <br />
                For Every Kitchen.
              </h1>
              <p className="mt-4 text-gray-700 text-lg">Wood pressed purity | Natural aroma | Healthy cooking</p>
              <div className="mt-6">
                <a href="#" className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800">Shop Oils</a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-3xl shadow-md border border-green-100 flex items-center justify-center">
            <img src={placeholder} alt="Featured" className="w-40 h-40 rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
          <a href="#" className="text-green-700 font-semibold">View All</a>
        </div>
        <div className="mt-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full md:w-96 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mt-6 overflow-x-auto" onWheel={(e) => { e.currentTarget.scrollLeft += e.deltaY }}>
          <div className="flex flex-nowrap gap-4">
            {items.filter(p => {
              const q = query.trim().toLowerCase()
              if (!q) return true
              return (
                String(p.title || '').toLowerCase().includes(q) ||
                String(p.description || '').toLowerCase().includes(q)
              )
            }).map((p, i) => (
              <div key={i} className="shrink-0 w-3/4 sm:w-1/2 lg:w-1/4">
                <ProductCard product={p} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        </div>
        <section className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900">Why Choose Murugan Oils?</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="mx-auto w-12 h-12 text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M12 2C7 2 3 6 3 11c0 3.87 2.69 7.12 6.31 8.11L12 22l2.69-2.89C18.31 18.12 21 14.87 21 11c0-5-4-9-9-9zm0 6c1.66 0 3 1.34 3 3 0 2.25-3 5-3 5s-3-2.75-3-5c0-1.66 1.34-3 3-3z" />
                </svg>
              </div>
              <div className="mt-3 font-semibold">Native Sourcing</div>
              <p className="mt-1 text-sm text-gray-700">High-quality seeds sourced responsibly from local farms.</p>
            </div>
            <div>
              <div className="mx-auto w-12 h-12 text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M12 2l4 7h-8l4-7zm0 20c-3.31 0-6-2.69-6-6h12c0 3.31-2.69 6-6 6z" />
                </svg>
              </div>
              <div className="mt-3 font-semibold">Traditional Processing</div>
              <p className="mt-1 text-sm text-gray-700">Wood/Cold pressed methods retain natural aroma and nutrition.</p>
            </div>
            <div>
              <div className="mx-auto w-12 h-12 text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M9 21h6v-2H9v2zM4 3h16v2H4V3zm2 5h12v2H6V8zm2 5h8v2H8v-2z" />
                </svg>
              </div>
              <div className="mt-3 font-semibold">Quality Checks</div>
              <p className="mt-1 text-sm text-gray-700">Batch-tested for purity, free from additives and chemicals.</p>
            </div>
            <div>
              <div className="mx-auto w-12 h-12 text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                  <path d="M3 7h4l2 3h8l2-3h2v10h-2l-2-3H9l-2 3H3V7z" />
                </svg>
              </div>
              <div className="mt-3 font-semibold">Supports Farmers</div>
              <p className="mt-1 text-sm text-gray-700">Empowering rural livelihoods through fair procurement.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-yellow-50 rounded-2xl p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-900">Native Ingredients. No Substitutes.</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" alt="Native geographies" className="h-56 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-semibold text-white">From Native Geographies</div>
                <p className="mt-1 text-xs text-white/90">We source locally to match ideal growing seasons.</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow">
              <img src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop" alt="Seed selection" className="h-56 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-semibold text-white">What Do We Look For?</div>
                <p className="mt-1 text-xs text-white/90">Just flavour, nutrition and purity. Not high yield.</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop" alt="Purity checks" className="h-56 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-semibold text-white">Impurities Out. Goodness In.</div>
                <p className="mt-1 text-xs text-white/90">Only the best seeds and purest oils make the cut.</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow">
              <img src="https://images.unsplash.com/photo-1565118544785-6c2ee0b37f02?q=80&w=1200&auto=format&fit=crop" alt="Native seeds" className="h-56 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-semibold text-white">Native Seeds. No Substitutes.</div>
                <p className="mt-1 text-xs text-white/90">Sesame, groundnut, mustard and more from local regions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-end justify-between">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Farm‑fresh Bestsellers You'll Love</h3>
            <a href="#" className="text-green-700 font-semibold">View all bestsellers →</a>
          </div>
          <div className="mt-6 overflow-x-auto" onWheel={(e) => { e.currentTarget.scrollLeft += e.deltaY }}>
            <div className="flex flex-nowrap gap-4">
              {bestsellers.map((p, i) => (
                <div key={i} className="shrink-0 w-3/4 sm:w-1/2 lg:w-1/4">
                  <ProductCard product={p} onAddToCart={onAddToCart} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section className="bg-teal-50 border-t">
        <div className="px-4 md:px-8 py-3 text-sm flex items-center gap-3">
          <span className="font-semibold">Murugan Rewards</span>
          <span className="text-gray-600">Get Upto 17% Off Using Points</span>
        </div>
      </section>

      <a
        href="https://wa.me/"
        className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full p-3 shadow-lg"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2a10 10 0 0 0-8.94 14.56L2 22l5.6-1.06A10 10 0 1 0 12 2zm5.2 14.2c-.26.73-1.53 1.38-2.1 1.46-.56.08-1.28.12-2.06-.13-.48-.15-1.1-.36-1.9-.83-.9-.54-1.6-1.23-2.18-2.08-.58-.86-.98-1.79-1.17-2.8-.2-1.02.12-1.86.53-2.32.34-.4.74-.45.98-.45h.7c.2 0 .46.67.56.97.15.45.4 1.1.35 1.23-.05.13-.25.4-.46.64-.21.25-.45.53-.21 1.01.24.48 1.08 1.76 2.31 2.39.94.49 1.34.55 1.82.47.48-.08.78-.43 1-.73.22-.3.44-.49.7-.4.26.09 1.63.77 1.9.91.26.13.43.21.49.33.07.12.07.7-.19 1.43z" />
        </svg>
      </a>
    </main>
  )
}