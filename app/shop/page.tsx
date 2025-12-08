"use client";

import React, { useState, useMemo } from "react";
import { products, Product } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";
type FilterOption = "all" | "for-her" | "for-him" | "unisex";

export default function ShopPage() {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [sort, setSort] = useState<SortOption>("name-asc");

  // Logic to Filter and Sort products
  const filteredProducts = useMemo(() => {
    let items = [...products];

    // 1. Filter
    if (filter !== "all") {
      items = items.filter((p) => p.category === filter);
    }

    // 2. Sort
    items.sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

    return items;
  }, [filter, sort]);

  return (
    <div className="min-h-screen bg-black text-white pt-10 pb-20">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-12 px-6">
        <p className="text-[#c9a449] text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-3">
          COLLECTION
        </p>
        <h1 className="text-5xl md:text-6xl font-serif text-white tracking-wide">
          ALL FRAGRANCES
        </h1>
        <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Premium oil-based fragrances inspired by the world's most iconic scents.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- CONTROLS BAR (Buttons & Sort) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 pb-8 border-b border-[#1a1a1a]">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <FilterButton 
              label="ALL FRAGRANCES" 
              isActive={filter === "all"} 
              onClick={() => setFilter("all")} 
            />
            <FilterButton 
              label="FOR HER" 
              isActive={filter === "for-her"} 
              onClick={() => setFilter("for-her")} 
            />
            <FilterButton 
              label="FOR HIM" 
              isActive={filter === "for-him"} 
              onClick={() => setFilter("for-him")} 
            />
            <FilterButton 
              label="UNISEX" 
              isActive={filter === "unisex"} 
              onClick={() => setFilter("unisex")} 
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
             {/* Icon */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-500">
               <path d="M3 6h18M7 12h10M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
             </svg>
             
             <select 
               value={sort}
               onChange={(e) => setSort(e.target.value as SortOption)}
               className="bg-[#111] border border-[#333] text-sm text-white px-4 py-2 rounded-md outline-none focus:border-[#c9a449] cursor-pointer"
             >
               <option value="name-asc">Name (A-Z)</option>
               <option value="name-desc">Name (Z-A)</option>
               <option value="price-asc">Price (Low to High)</option>
               <option value="price-desc">Price (High to Low)</option>
             </select>
          </div>
        </div>

        {/* --- PRODUCT COUNT --- */}
        <div className="mb-6 text-gray-500 text-sm">
          {filteredProducts.length} fragrances
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
           <div className="py-20 text-center text-gray-500">
             No fragrances found in this category.
           </div>
        )}

      </div>
    </div>
  );
}

// Helper Component for the Buttons
function FilterButton({ label, isActive, onClick }: { label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2.5 rounded-md text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300
        ${isActive 
          ? "bg-[#c9a449] text-black shadow-lg shadow-amber-900/20 scale-105" 
          : "bg-white text-black hover:bg-gray-200"
        }
      `}
    >
      {label}
    </button>
  );
}