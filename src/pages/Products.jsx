import React from 'react'
import { db } from '../lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import ProductCard from '../components/ProductCard'

const products = [
  {
    tag: 'Best Seller',
    off: 3,
    title: 'A2 Cow Ghee',
    size: '1 Ltr',
    description: 'Traditional bilona-churned A2 cow ghee with rich aroma.',
    price: '2,400',
    image: 'https://source.unsplash.com/400x300/?olive,oil,bottle',
  },
  {
    tag: 'Best Seller',
    off: 2,
    title: 'A2 Desi Cow Ghee',
    size: '500 ml',
    description: 'Granular, rich desi cow ghee sourced from trusted farms.',
    price: '1,325',
    image: 'https://source.unsplash.com/400x300/?sesame,oil,bottle',
  },
  {
    tag: 'New Launch',
    off: 3,
    title: 'Buffalo Ghee',
    size: '1 Ltr',
    description: 'Authentic bilona-churned buffalo ghee with bold flavor.',
    price: '3,400',
    image: 'https://source.unsplash.com/400x300/?mustard,oil,bottle',
  },
  {
    tag: 'Short Sale',
    off: 5,
    title: 'Coconut Oil (Wood Pressed)',
    size: '1 Ltr',
    description: 'Pure wood-pressed coconut oil for cooking and skincare.',
    price: '425',
    image: 'https://source.unsplash.com/400x300/?coconut,oil,bottle',
  },
  {
    tag: 'New Launch',
    off: 4,
    title: 'Niger Seed Oil (Cold Pressed)',
    size: '1 Ltr',
    description: 'Cold-pressed niger seed oil with earthy, nutty taste.',
    price: '375',
    image: 'https://source.unsplash.com/400x300/?sunflower,oil,bottle',
  },
  {
    tag: 'Best Seller',
    off: 6,
    title: 'Deepam Lamp Oil',
    size: '1 Ltr',
    description: 'Pure lamp oil for pooja and daily rituals.',
    price: '220',
    image: 'https://source.unsplash.com/400x300/?lamp,oil',
  },
]

export default function Products({ onAddToCart }) {
  const placeholder = 'https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg'
  const cleanTitle = t => String(t || '').replace(/\bmurugan\b/ig, '').replace(/\s+/g, ' ').trim()
  const [items, setItems] = React.useState(products.map(p => ({ ...p, title: cleanTitle(p.title), image: p.image })))
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDocs(collection(db, 'products'))
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        if (list.length) {
          setItems(list.map(p => ({
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
      }
    }
    load()
  }, [])

  return (
    <main className="px-4 md:px-8 py-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome To Murugan!</h1>
        <p className="mt-1 text-gray-700">You're One Step Closer to Purity</p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6 text-sm">
        <a href="#" className="hover:text-green-700 font-medium">A2 Ghee</a>
        <a href="#" className="hover:text-green-700 font-medium">Oils</a>
        <a href="#" className="hover:text-green-700 font-medium">Combos</a>
        <a href="#" className="hover:text-green-700 font-medium">Sale</a>
        <a href="#" className="hover:text-green-700 font-medium">Superfood</a>
      </div>

      <div className="mt-4 flex justify-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full md:w-96 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      <div className="mt-8 overflow-x-auto" onWheel={(e) => { e.currentTarget.scrollLeft += e.deltaY }}>
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

      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 border rounded-full text-sm">See All</button>
      </div>
    </main>
  )
}