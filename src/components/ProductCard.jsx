import React from 'react'

export default function ProductCard({ product, onAddToCart }) {
  const { tag, off, title, size, description, price, image } = product
  return (
    <div className="border rounded-2xl bg-white shadow-sm overflow-hidden">
      <div className="px-3 pt-3 flex items-center justify-between text-xs">
        {tag && (
          <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">{tag}</span>
        )}
        {off && (
          <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold">{off}% OFF</span>
        )}
      </div>
      <div className="p-3">
        <div className="aspect-[4/3] rounded-2xl bg-gray-50 border flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-contain" />
          ) : (
            <div className="w-16 h-16 rounded-full bg-yellow-200" />
          )}
        </div>
      </div>

      <div className="px-3 pb-3">
        <div className="text-xs text-gray-700">{size}</div>
        <div className="mt-1 font-semibold text-gray-900">{title}</div>
        <p className="mt-1 text-sm text-gray-700 line-clamp-2">{description}</p>
        <div className="mt-2 font-bold">₹{price}</div>

        <div className="mt-3 flex gap-2">
          <button onClick={() => onAddToCart && onAddToCart(product)} className="flex-1 bg-green-700 text-white text-xs px-2 py-1 rounded-full">Add to cart</button>
          <button className="flex-1 border border-green-700 text-green-700 text-sm px-3 py-2 rounded-full">Buy Now</button>
        </div>
      </div>
    </div>
  )
}