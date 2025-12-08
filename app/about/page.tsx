import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#c9a449] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder - Replace src with your actual hero image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-10" />
          <Image
            src="/images/about-hero.png" // You will need to add an image here
            alt="Perfume background"
            fill
            className="object-cover opacity-50"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
          <p className="text-[#c9a449] tracking-[0.3em] text-xs md:text-sm uppercase mb-4 font-medium">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Inspired by Icons. <br />
            <span className="text-[#c9a449]">Worn by Queens.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            The story of how one woman's vision became a movement of accessible luxury.
          </p>
        </div>
      </section>

      {/* --- FOUNDER SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-sm overflow-hidden border border-white/5">
              {/* Replace with actual founder image */}
              <Image 
                src="/images/founder.jpg" 
                alt="Rosheen Ngorima"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Floating Quote Card */}
            <div className="absolute -bottom-10 right-0 md:-right-10 bg-[#111] border border-[#222] p-6 max-w-xs shadow-2xl rounded-sm">
              <span className="text-4xl text-[#c9a449] font-serif leading-none">“</span>
              <p className="text-gray-300 text-sm italic mb-4 relative z-10">
                Confidence begins with a signature presence. That’s what I wanted to give every person who wears our scents.
              </p>
              <p className="text-[#c9a449] text-xs font-bold tracking-widest uppercase">
                — Rosheen Ngorima
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="mt-10 md:mt-0">
            <p className="text-[#c9a449] text-xs tracking-[0.3em] uppercase mb-2">The Founder</p>
            <h2 className="text-4xl font-serif mb-6">Meet Rosheen Ngorima</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                Scents by Rosh was created by global entrepreneur Rosheen Ngorima, a woman who understands that confidence begins with a signature presence.
              </p>
              <p>
                After years of admiring luxury fragrances but finding them inaccessible to many, Rosheen set out to change the industry. Her vision was simple yet revolutionary: create premium, oil-based fragrances inspired by the world's most iconic scents, at prices that don't require a second mortgage.
              </p>
              <p>
                Each scent is inspired by iconic fragrances and blended with premium oils to offer luxury that lasts, empowering every woman and man to step boldly into their world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9a449] text-xs tracking-[0.3em] uppercase mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Affordable Luxury. Unforgettable Presence.
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              We believe luxury should be accessible, empowering, and bold—just like the remarkable individuals who wear our scents.
            </p>
          </div>

          {/* Grid of Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#111] p-8 border border-white/5 hover:border-[#c9a449]/50 transition-colors group text-center">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] text-[#c9a449] group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 className="text-white font-serif text-lg mb-3">Premium Quality</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Only the finest oil-based ingredients for long-lasting, luxurious scents.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111] p-8 border border-white/5 hover:border-[#c9a449]/50 transition-colors group text-center">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] text-[#c9a449] group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3 className="text-white font-serif text-lg mb-3">Empowerment</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Every fragrance is designed to boost confidence and elevate presence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111] p-8 border border-white/5 hover:border-[#c9a449]/50 transition-colors group text-center">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] text-[#c9a449] group-hover:scale-110 transition-transform">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-white font-serif text-lg mb-3">Accessibility</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Luxury should be attainable for everyone who desires excellence.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#111] p-8 border border-white/5 hover:border-[#c9a449]/50 transition-colors group text-center">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] text-[#c9a449] group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <h3 className="text-white font-serif text-lg mb-3">Excellence</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Inspired by the world's finest perfumeries, crafted for distinction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="border-t border-[#1a1a1a] bg-black py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl md:text-4xl font-serif text-[#c9a449] mb-1">15+</h4>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500">Signature Scents</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-serif text-[#c9a449] mb-1">24h</h4>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500">Long Lasting</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-serif text-[#c9a449] mb-1">100%</h4>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500">Oil Based</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-serif text-[#c9a449] mb-1">1000+</h4>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500">Happy Customers</p>
          </div>
        </div>
      </section>
    </div>
  );
}