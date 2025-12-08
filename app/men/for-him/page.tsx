import React from "react";
import { products } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

export default function ForHimPage() {
  const items = products.filter((p) => p.category === "for-him");

  return (
    // Added a full-width wrapper with 'bg-black' and 'min-h-screen'
    <div className="min-h-screen bg-black text-white">
      <div className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase">COLLECTION</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mt-4">FOR HIM</h1>
          <p className="text-gray-400 mt-3">
            Premium oil-based fragrances crafted for confidence and bold presence
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}