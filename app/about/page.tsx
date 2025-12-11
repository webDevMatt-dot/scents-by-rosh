import React from "react";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";

// This makes the page fetch data on the server
export default async function AboutPage() {
  // Fetch Site Images
  const images = await client.fetch(`*[_type == "siteContent"][0]`);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#c9a449] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-10" />
          {images?.aboutHeroImage ? (
            <Image
              src={urlFor(images.aboutHeroImage).width(1920).url()}
              alt="Perfume background"
              fill
              className="object-cover opacity-50"
              priority
            />
          ) : (
            <div className="w-full h-full bg-[#111]" />
          )}
        </div>

        {/* ... (Keep Hero Text same) ... */}
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
              {images?.founderImage ? (
                <Image 
                  src={urlFor(images.founderImage).width(800).url()} 
                  alt="Rosheen Ngorima"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                 <div className="w-full h-full bg-[#111] flex items-center justify-center text-gray-700">Founder Image</div>
              )}
            </div>
            
            {/* Floating Quote Card (Keep same) */}
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

          {/* Text Side (Keep same) */}
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

      {/* --- MISSION SECTION (Keep exactly the same) --- */}
      <section className="py-24 bg-[#0a0a0a]">
         {/* ... (Keep the rest of your Mission and Stats section exactly as they were in the previous file) ... */}
         {/* For brevity, I am not pasting the Mission/Stats code again, but make sure you keep it! */}
         <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9a449] text-xs tracking-[0.3em] uppercase mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Affordable Luxury. Unforgettable Presence.
            </h2>
             {/* ... */}
          </div>
          {/* ... Grid of Values ... */}
          </div>
      </section>
      
      {/* --- STATS BAR --- */}
      {/* ... */}
    </div>
  );
}