"use client";

import React from "react";
import { Product } from "../data/products";
import Link from "next/link";
import { useCart } from "../context/CartContext";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the product page
    e.stopPropagation(); // Stop the click from bubbling up
    addToCart(product);
  };

  return (
    <div className="group relative">
      <Link href={`/product/${product.id}`} className="block">
        {/* Card Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#050505] border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-[#c9a449]/20">
          
          {/* 1. Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />

          {/* 2. Golden Hue Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#c9a449] via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700 z-0" />

          {/* Tag */}
          <div className="absolute top-5 left-5 z-10">
            <span className="inline-block rounded-full border border-[#c9a449]/40 bg-black/30 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#c9a449] backdrop-blur-md uppercase">
              {product.category === "for-her" ? "For Her" : product.category === "for-him" ? "For Him" : "Unisex"}
            </span>
          </div>

          {/* Center Letter */}
          <div className="relative z-10 flex h-full w-full items-center justify-center">
             <span className="font-serif text-9xl text-[#3d3116] select-none group-hover:scale-110 transition-transform duration-700 ease-out group-hover:text-[#5c4a21]">
               {product.initial}
             </span>
          </div>

          {/* ADD TO CART BUTTON (FIXED FOR MOBILE) */}
          <button 
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className="
              absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full 
              bg-[#c9a449] text-black shadow-lg shadow-black/50 active:scale-90 transition-all duration-300 hover:bg-[#ffe082]
              
              /* Mobile: Always visible */
              opacity-100 translate-y-0
              
              /* Desktop: Hidden until hover */
              md:opacity-0 md:translate-y-4 
              md:group-hover:translate-y-0 md:group-hover:opacity-100
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>

        {/* Details */}
        <div className="mt-5 space-y-1 px-1">
          <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-[#c9a449] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-zinc-500 font-medium">
            Inspired by {product.inspiredBy}
          </p>
          <p className="text-[#c9a449] font-serif text-lg pt-1">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}