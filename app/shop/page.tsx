"use client";

import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "@/app/components/ProductCard";
import { getProducts } from "@/app/lib/sanity"; 

// Updated Type Definition
type SanityProduct = {
  _id: string;
  name: string;
  inspiredBy: string;
  price: number;
  category: "for-her" | "for-him" | "unisex";
  initial: string;
  image: any; // Now an object, not a string
};

// ... (Keep FilterOption and SortOption types same as before) ...
type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";
type FilterOption = "all" | "for-her" | "for-him" | "unisex";

export default function ShopPage() {
  // ... (Keep all your state and useEffect logic exactly the same) ...
  const [products, setProducts] = useState<SanityProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterOption>("all");
  const [sort, setSort] = useState<SortOption>("name-asc");

  useEffect(() => {
    const loadData = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const filteredProducts = useMemo(() => {
    let items = [...products];
    if (filter !== "all") items = items.filter((p) => p.category === filter);
    
    items.sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });
    return items;
  }, [filter, sort, products]);

  // ... (Keep Loading state return) ...
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <p className="animate-pulse tracking-widest text-[#c9a449]">LOADING COLLECTION...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-10 pb-20">
      {/* ... (Keep Header and Controls sections same as before) ... */}
      <div className="text-center mb-12 px-6">
        <p className="text-[#c9a449] text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-3">COLLECTION</p>
        <h1 className="text-5xl md:text-6xl font-serif text-white tracking-wide">ALL FRAGRANCES</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 pb-8 border-b border-[#1a1a1a]">
          <div className="flex flex-wrap justify-center gap-3">
            {["all", "for-her", "for-him", "unisex"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as FilterOption)}
                className={`px-6 py-2.5 rounded-md text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all ${filter === f ? "bg-[#c9a449] text-black" : "bg-white text-black"}`}
              >
                {f.replace("-", " ")}
              </button>
            ))}
          </div>
          <select 
             value={sort}
             onChange={(e) => setSort(e.target.value as SortOption)}
             className="bg-[#111] border border-[#333] text-sm text-white px-4 py-2 rounded-md outline-none focus:border-[#c9a449]"
           >
             <option value="name-asc">Name (A-Z)</option>
             <option value="name-desc">Name (Z-A)</option>
             <option value="price-asc">Price (Low to High)</option>
             <option value="price-desc">Price (High to Low)</option>
           </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p, index) => (
            <ProductCard 
              key={p._id} 
              product={{
                id: p._id,
                name: p.name,
                price: p.price,
                category: p.category,
                initial: p.initial,
                inspiredBy: p.inspiredBy,
                image: p.image 
              }} 
              // PASS PRIORITY to the first 4 items so they load instantly
              priority={index < 4}
            />
          ))}
        </div>
      </div>
    </div>
  );
}