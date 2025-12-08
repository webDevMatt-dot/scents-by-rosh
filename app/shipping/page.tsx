"use client";

import React, { useState } from "react";

export default function ShippingPage() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState<"idle" | "searching" | "found">("idle");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("searching");
    // Simulate lookup delay
    setTimeout(() => setStatus("found"), 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#c9a449] selection:text-black">
      
      {/* Header */}
      <div className="pt-32 pb-12 px-6 text-center">
        <p className="text-[#c9a449] text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Order Status
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 animate-fade-in-up">
          Track Your Order
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base animate-fade-in-up delay-100">
          Enter your order details below to check the status of your shipment.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24">
        
        {/* Tracking Form */}
        <div className="bg-[#0a0a0a] border border-[#222] p-8 md:p-12 rounded-sm mb-12 animate-fade-in-up delay-200">
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 group">
              <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2">Order Number</label>
              <input 
                type="text" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="#RSH-10234"
                className="w-full bg-black border border-[#333] py-4 px-4 text-white focus:outline-none focus:border-[#c9a449] transition-colors placeholder-gray-700"
                required
              />
            </div>
            <div className="flex-1 group">
              <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-black border border-[#333] py-4 px-4 text-white focus:outline-none focus:border-[#c9a449] transition-colors placeholder-gray-700"
                required
              />
            </div>
            <div className="flex items-end">
              <button 
                type="submit"
                disabled={status === "searching"}
                className="w-full md:w-auto bg-[#c9a449] text-black font-bold tracking-[0.2em] text-xs uppercase h-[58px] px-8 hover:bg-[#b08d3b] transition-colors disabled:opacity-50"
              >
                {status === "searching" ? "..." : "Track"}
              </button>
            </div>
          </form>
        </div>

        {/* Tracking Result (Mock) */}
        {status === "found" && (
          <div className="animate-fade-in space-y-8">
            <div className="flex justify-between items-end border-b border-[#222] pb-4">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Status</p>
                <h3 className="text-2xl font-serif text-white">In Transit</h3>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Est. Delivery</p>
                <p className="text-[#c9a449] font-medium">Dec 14, 2025</p>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="relative pt-4">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[#222] top-[15px]" />
              <div className="absolute top-0 left-0 w-3/4 h-0.5 bg-[#c9a449] top-[15px]" /> {/* 75% Progress */}
              
              <div className="grid grid-cols-4 gap-2 text-center relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a449] flex items-center justify-center text-black text-xs font-bold">✓</div>
                  <span className="text-xs text-[#c9a449] uppercase tracking-wider font-bold">Ordered</span>
                </div>
                 {/* Step 2 */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a449] flex items-center justify-center text-black text-xs font-bold">✓</div>
                  <span className="text-xs text-[#c9a449] uppercase tracking-wider font-bold">Processing</span>
                </div>
                 {/* Step 3 */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a449] border-4 border-black flex items-center justify-center">
                     <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                  </div>
                  <span className="text-xs text-white uppercase tracking-wider font-bold">Shipped</span>
                </div>
                 {/* Step 4 */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center text-gray-500 text-xs">4</div>
                  <span className="text-xs text-gray-600 uppercase tracking-wider">Delivered</span>
                </div>
              </div>
            </div>

            {/* Latest Update */}
            <div className="bg-[#111] p-6 rounded-sm flex gap-4 mt-8">
               <div className="text-[#c9a449]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
               </div>
               <div>
                 <p className="text-sm text-white">Arrived at Regional Sort Facility</p>
                 <p className="text-xs text-gray-500 mt-1">New York, NY • Today at 08:30 AM</p>
               </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}