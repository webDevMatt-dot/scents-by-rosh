"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/app/components/ProductCard";
import { client } from "@/app/lib/sanity";

export default function UnisexPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Fetch products where category is 'unisex'
    client.fetch(`*[_type == "product" && category == "unisex"]{
      _id, name, inspiredBy, price, category, initial, image
    }`).then(setItems);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase">COLLECTION</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mt-4">UNISEX</h1>
          <p className="text-gray-400 mt-3">
            Premium oil-based fragrances inspired by the world’s most iconic scents
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((product) => (
            <ProductCard key={product._id} product={{ id: product._id, ...product }} />
          ))}
        </div>
      </div>
    </div>
  );
}