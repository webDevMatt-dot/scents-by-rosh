"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 className="text-3xl font-serif mb-4 text-center">Your Cart is Empty</h1>
        <p className="text-gray-400 mb-8 text-center text-sm md:text-base">Looks like you haven't found your signature scent yet.</p>
        <Link 
          href="/shop" 
          className="bg-[#c9a449] text-black px-8 py-3 rounded-sm font-bold tracking-widest text-xs hover:bg-[#b08d3b] transition-all"
        >
          START SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-serif mb-8 md:mb-12 text-center">Your Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {items.map((item) => (
              // Flex-row on both mobile and desktop, but adjusted gaps
              <div key={item.id} className="flex gap-4 md:gap-6 border-b border-[#222] pb-6 md:pb-8">
                {/* Image Placeholder - Smaller on mobile */}
                <div className="w-20 h-28 md:w-24 md:h-32 bg-[#111] rounded-lg flex items-center justify-center text-[#c9a449] font-serif text-2xl md:text-3xl shrink-0 border border-white/5">
                  {item.initial}
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg md:text-xl font-serif">{item.name}</h3>
                      <p className="font-semibold text-[#c9a449] text-sm md:text-base">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm mt-1">Inspired by {item.inspiredBy}</p>
                    <p className="text-gray-500 text-[10px] md:text-xs mt-1 uppercase tracking-wider">{item.category.replace('-', ' ')}</p>
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#333] rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 md:px-3 py-1 text-gray-400 hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 md:px-3 py-1 text-gray-400 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] md:text-xs text-gray-500 hover:text-red-400 underline decoration-gray-700 underline-offset-4"
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-[#111] p-6 md:p-8 rounded-lg sticky top-24 md:top-32 border border-[#222]">
              <h3 className="font-serif text-xl md:text-2xl mb-6">Summary</h3>
              
              <div className="flex justify-between mb-4 text-gray-400 text-sm md:text-base">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6 text-gray-400 text-sm md:text-base">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              
              <div className="flex justify-between mb-8 text-lg md:text-xl font-semibold border-t border-[#333] pt-4 text-[#c9a449]">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <button className="w-full bg-[#c9a449] text-black py-4 font-bold tracking-widest text-xs rounded-sm hover:bg-[#b08d3b] transition-all">
                CHECKOUT
              </button>

              <p className="text-center text-gray-600 text-[10px] md:text-xs mt-4">
                Secure Checkout • Free Shipping over $100
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}