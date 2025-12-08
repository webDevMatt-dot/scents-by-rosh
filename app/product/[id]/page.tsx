"use client";

import React, { useState } from "react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { products } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<"notes" | "ingredients">("notes");

  // 1. Find the product
  const product = products.find((p) => p.id === id);

  // Handle invalid IDs
  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-[#c9a449] border-b border-[#c9a449] pb-1">Back to Shop</Link>
        </div>
      </div>
    );
  }

  // 2. Find Related Products (Same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#c9a449] selection:text-black">
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- LEFT: IMAGE GALLERY --- */}
          <div className="relative h-[500px] md:h-[700px] w-full bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#222]">
            {/* Main Image (Using Placeholder Logic or actual Image if you have it) */}
            {product.image ? (
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-cover"
              />
            ) : (
              // Fallback Design if no image file exists
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#111] to-black">
                <span className="font-serif text-[12rem] text-[#c9a449]/20">{product.initial}</span>
              </div>
            )}
            
            {/* Floating Tags */}
            <div className="absolute top-6 left-6">
               <span className="inline-block rounded-full border border-[#c9a449]/40 bg-black/30 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#c9a449] backdrop-blur-md uppercase">
                  {product.category.replace("-", " ")}
               </span>
            </div>
          </div>

          {/* --- RIGHT: DETAILS --- */}
          <div className="flex flex-col justify-center">
            
            {/* Header */}
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{product.name}</h1>
            <p className="text-gray-400 text-lg mb-6">Inspired by <span className="text-white">{product.inspiredBy}</span></p>
            <p className="text-3xl font-serif text-[#c9a449] mb-8">${product.price.toFixed(2)}</p>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-10 text-sm md:text-base">
              A masterpiece of olfactory art. This premium oil-based fragrance captures the essence of luxury with 
              long-lasting depth and projection. Meticulously blended to mirror the world's most iconic scents.
            </p>

            {/* Add to Cart */}
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-[#c9a449] text-black font-bold tracking-[0.2em] text-sm uppercase py-5 rounded-sm hover:bg-[#b08d3b] transition-all mb-12 shadow-lg shadow-[#c9a449]/20"
            >
              Add to Bag
            </button>

            {/* Accordion / Tabs */}
            <div className="border-t border-[#222]">
              
              {/* Tab 1: Notes */}
              <div className="border-b border-[#222]">
                <button 
                  onClick={() => setActiveTab(activeTab === "notes" ? "ingredients" : "notes")}
                  className="w-full flex justify-between items-center py-6 text-left hover:text-[#c9a449] transition-colors"
                >
                  <span className="text-xs uppercase tracking-widest font-bold">Fragrance Notes</span>
                  <span className="text-xl">{activeTab === "notes" ? "−" : "+"}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeTab === "notes" ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <span className="text-white">Top:</span> Saffron, Jasmine<br/>
                    <span className="text-white">Heart:</span> Amberwood, Ambergris<br/>
                    <span className="text-white">Base:</span> Fir Resin, Cedar
                  </p>
                </div>
              </div>

              {/* Tab 2: Ingredients */}
              <div className="border-b border-[#222]">
                <button 
                  onClick={() => setActiveTab(activeTab === "ingredients" ? "notes" : "ingredients")}
                  className="w-full flex justify-between items-center py-6 text-left hover:text-[#c9a449] transition-colors"
                >
                  <span className="text-xs uppercase tracking-widest font-bold">Details & Care</span>
                  <span className="text-xl">{activeTab === "ingredients" ? "−" : "+"}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeTab === "ingredients" ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                   <p className="text-gray-400 text-sm leading-relaxed">
                    Concentrated perfume oil. Alcohol-free. <br/>
                    Apply to pulse points (wrists, neck, behind ears) for maximum projection.
                   </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- RELATED PRODUCTS --- */}
        <div className="mt-32">
          <h2 className="text-3xl font-serif mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {relatedProducts.length > 0 ? (
               relatedProducts.map(p => <ProductCard key={p.id} product={p} />)
             ) : (
               <p className="text-gray-500 col-span-4 text-center">No other products in this category yet.</p>
             )}
          </div>
        </div>

      </div>
    </div>
  );
}