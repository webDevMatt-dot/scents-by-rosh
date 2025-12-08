"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const { items, removeFromCart, updateQuantity, cartTotal, isCartOpen, closeCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop (Click to close) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={closeCart}
      />

      {/* Sidebar Drawer */}
      {/* Added max-w-[90vw] for mobile safety so it doesn't feel too wide on some devices, keeps full width on very small ones */}
      <div className="relative w-full md:max-w-md bg-[#0a0a0a] border-l border-[#222] h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        
        {/* Header - Adjusted padding */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#222]">
          <h2 className="text-lg md:text-xl font-serif text-white tracking-wide">Your Bag ({items.length})</h2>
          <button onClick={closeCart} className="text-gray-400 hover:text-white p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items - Adjusted padding and sizing */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <p className="text-gray-500">Your bag is empty.</p>
              <button onClick={closeCart} className="text-[#c9a449] text-xs font-bold tracking-widest uppercase border-b border-[#c9a449] pb-1">
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 md:gap-4">
                {/* Image Placeholder - Smaller on mobile (w-16) */}
                <div className="w-16 h-20 md:w-20 md:h-24 bg-[#111] rounded-md flex items-center justify-center text-[#c9a449] font-serif text-lg md:text-xl border border-white/5 shrink-0">
                  {item.initial}
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-medium text-sm md:text-base pr-2">{item.name}</h3>
                      <p className="text-[#c9a449] text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="text-gray-500 text-[10px] md:text-xs mt-1 uppercase tracking-wide">{item.category}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    {/* Qty */}
                    <div className="flex items-center border border-[#333] rounded px-2 py-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-gray-400 hover:text-white pr-2 text-sm">-</button>
                      <span className="text-xs text-white w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-gray-400 hover:text-white pl-2 text-sm">+</button>
                    </div>
                    
                    {/* Remove */}
                    <button onClick={() => removeFromCart(item.id)} className="text-[10px] md:text-xs text-gray-500 underline decoration-gray-700 hover:text-white">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer (Total & Checkout) - Adjusted padding */}
        {items.length > 0 && (
          <div className="p-4 md:p-6 border-t border-[#222] bg-black">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400 uppercase tracking-widest text-xs">Subtotal</span>
              <span className="text-xl font-serif text-white">${cartTotal.toFixed(2)}</span>
            </div>
            
            <Link 
              href="/cart" 
              onClick={closeCart}
              className="block w-full bg-[#c9a449] text-black text-center py-3 md:py-4 font-bold tracking-widest text-xs rounded-sm hover:bg-[#b08d3b] transition-all mb-3"
            >
              CHECKOUT
            </Link>
             <button 
              onClick={closeCart}
              className="block w-full border border-[#333] text-white text-center py-3 font-bold tracking-widest text-xs rounded-sm hover:bg-[#1a1a1a] transition-all"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </div>
  );
}