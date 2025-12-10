"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { urlFor } from "@/app/lib/sanity"; // Import the helper

type Props = {
  product: any; // Using 'any' briefly to handle both Sanity object and static data
  priority?: boolean; // New Prop for speed
};

export default function ProductCard({ product, priority = false }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative">
      <Link href={`/product/${product.id || product._id}`} className="block">
        {/* Card Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-[#050505] border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-[#c9a449]/20">
          
          {/* --- PRODUCT IMAGE --- */}
          {product.image ? (
            <Image
              // OPTIMIZATION MAGIC HAPPENS HERE:
              src={urlFor(product.image).width(600).height(800).url()} 
              alt={product.name}
              fill
              priority={priority} // Loads top images instantly
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            // Fallback Letter
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-[#050505]">
               <span className="font-serif text-9xl text-[#3d3116] select-none group-hover:scale-110 transition-transform duration-700 ease-out group-hover:text-[#5c4a21]">
                 {product.initial}
               </span>
            </div>
          )}

          {/* Gradients & Text Overlays (Keep existing code) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#c9a449] via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-10" />

          {/* Tag */}
          <div className="absolute top-5 left-5 z-20">
            <span className="inline-block rounded-full border border-[#c9a449]/40 bg-black/60 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#c9a449] backdrop-blur-md uppercase">
              {product.category?.replace("-", " ") || "UNISEX"}
            </span>
          </div>

          {/* Add to Cart Button (Keep existing code) */}
          <button 
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className="absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a449] text-black shadow-lg shadow-black/50 active:scale-90 transition-all duration-300 hover:bg-[#ffe082] opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </button>
        </div>

        {/* Details Text */}
        <div className="mt-5 space-y-1 px-1">
          <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-[#c9a449] transition-colors">{product.name}</h3>
          <p className="text-xs text-zinc-500 font-medium">Inspired by {product.inspiredBy}</p>
          <p className="text-[#c9a449] font-serif text-lg pt-1">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
}