"use client";

import Link from "next/link";
import React, { useState } from "react"; // Import useState
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount, openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md transition-all duration-300 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex flex-col items-start group">
          <span className="text-2xl md:text-3xl font-serif tracking-wider text-white group-hover:text-gray-200 transition-colors">
            SCENTS
          </span>
          <span className="text-xs tracking-[0.3em] text-amber-400 -mt-1 group-hover:text-amber-300 transition-colors">by ROSH</span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#c9a449] transition-colors">SHOP</Link>
          <Link href="/women/for-her" className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#c9a449] transition-colors">WOMEN</Link>
          <Link href="/men/for-him" className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#c9a449] transition-colors">MEN</Link>          
          <Link href="/unisex/for-us" className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#c9a449] transition-colors">UNISEX</Link>
          <Link href="/about" className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#c9a449] transition-colors">ABOUT</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          
          {/* Cart Trigger */}
          <button 
            onClick={openCart} 
            className="relative text-gray-300 hover:text-[#c9a449] transition-colors" 
            aria-label="cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="20" r="1" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="18" cy="20" r="1" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            
            {/* Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#c9a449] text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button (Toggle Logic Added) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-[#c9a449] transition-colors p-1"
          >
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-[#222] shadow-2xl animate-fade-in-down h-screen z-40">
          <div className="flex flex-col p-8 space-y-6 text-center">
            <Link 
              href="/shop" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif text-white hover:text-[#c9a449]"
            >
              SHOP ALL
            </Link>
            <Link 
              href="/women/for-her" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif text-white hover:text-[#c9a449]"
            >
              WOMEN
            </Link>
            <Link 
              href="/men/for-him" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif text-white hover:text-[#c9a449]"
            >
              MEN
            </Link>
            <Link 
              href="/unisex/for-us" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif text-white hover:text-[#c9a449]"
            >
              UNISEX
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif text-white hover:text-[#c9a449]"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}