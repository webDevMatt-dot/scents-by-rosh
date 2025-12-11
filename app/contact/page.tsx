"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate network request
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#c9a449] selection:text-black">
      
      {/* --- HEADER SECTION --- */}
      <div className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-6 text-center">
        <p className="text-[#c9a449] text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Customer Care
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 animate-fade-in-up">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed animate-fade-in-up delay-100">
          Have a question about your order or need help choosing a scent? 
          Our concierge team is here to assist you.
        </p>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* LEFT: Contact Form */}
        <div className="animate-fade-in-up delay-200">
          {formStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center p-12 border border-[#222] bg-[#0a0a0a] text-center rounded-sm">
              <div className="w-16 h-16 rounded-full bg-[#c9a449]/10 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a449" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Message Sent</h3>
              <p className="text-gray-400 text-sm">Thank you for contacting us. We will respond within 24 hours.</p>
              <button 
                onClick={() => setFormStatus("idle")}
                className="mt-8 text-[#c9a449] text-xs font-bold tracking-widest uppercase border-b border-[#c9a449] pb-1 hover:text-white hover:border-white transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">First Name</label>
                  <input type="text" required className="w-full bg-transparent border-b border-[#333] py-3 text-white focus:outline-none focus:border-[#c9a449] transition-colors placeholder-gray-700" placeholder="Jane" />
                </div>
                <div className="group">
                  <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Last Name</label>
                  <input type="text" required className="w-full bg-transparent border-b border-[#333] py-3 text-white focus:outline-none focus:border-[#c9a449] transition-colors placeholder-gray-700" placeholder="Doe" />
                </div>
              </div>

              <div className="group">
                <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Email Address</label>
                <input type="email" required className="w-full bg-transparent border-b border-[#333] py-3 text-white focus:outline-none focus:border-[#c9a449] transition-colors placeholder-gray-700" placeholder="jane@example.com" />
              </div>

              <div className="group">
                <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Subject</label>
                <select className="w-full bg-transparent border-b border-[#333] py-3 text-white focus:outline-none focus:border-[#c9a449] transition-colors cursor-pointer">
                  <option className="bg-black">Order Inquiry</option>
                  <option className="bg-black">Product Question</option>
                  <option className="bg-black">Wholesale / Partnership</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Message</label>
                <textarea required rows={5} className="w-full bg-transparent border-b border-[#333] py-3 text-white focus:outline-none focus:border-[#c9a449] transition-colors placeholder-gray-700 resize-none" placeholder="How can we help you today?"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === "submitting"}
                className="w-full bg-[#c9a449] text-black font-bold tracking-[0.2em] text-xs uppercase py-4 mt-4 hover:bg-[#b08d3b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: Info & Map */}
        <div className="space-y-12 animate-fade-in-up delay-300">
          
          {/* Info Block */}
          <div className="bg-[#0a0a0a] p-8 border border-white/5">
            <h3 className="font-serif text-2xl text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#c9a449] mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                  <a href="mailto:support@scentsbyrosh.com" className="text-white hover:text-[#c9a449] transition-colors">support@scentsbyrosh.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#c9a449] mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Call Us</p>
                  <p className="text-white">+27 71 613 4107</p>
                  <p className="text-gray-500 text-xs mt-1">Mon-Fri: 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="text-[#c9a449] mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Our Studio</p>
                  <p className="text-white">123 Luxury Ave, Suite 400<br/>Johannesburg, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Link */}
          <div className="text-center p-8 border border-dashed border-[#333] rounded-sm">
            <h4 className="font-serif text-xl text-white mb-2">Need a quick answer?</h4>
            <p className="text-gray-400 text-sm mb-4">Check our frequently asked questions for help with shipping, returns, and more.</p>
            <a href="#" className="text-[#c9a449] text-xs font-bold tracking-widest uppercase border-b border-[#c9a449] pb-1 hover:text-white hover:border-white transition-colors">
              Read FAQ
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}