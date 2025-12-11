"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import { client, urlFor } from "@/app/lib/sanity"; // Import urlFor

export default function Home() {
  const [bestsellers, setBestsellers] = useState<any[]>([]);
  const [images, setImages] = useState<any>(null); // State for site images

  // Fetch Data
  useEffect(() => {
    async function fetchData() {
      // 1. Fetch Bestsellers
      const productsData = await client.fetch(`*[_type == "product"][0...4] {
        _id, name, inspiredBy, price, category, initial, image
      }`);
      setBestsellers(productsData);

      // 2. Fetch Site Images (We grab the first document of type 'siteContent')
      const siteData = await client.fetch(`*[_type == "siteContent"][0]`);
      setImages(siteData);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col font-sans selection:bg-[#c9a449] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {images?.heroImage ? (
             <Image
              src={urlFor(images.heroImage).width(1920).url()} 
              alt="Luxury Perfume"
              fill
              className="object-cover opacity-60"
              priority
            />
          ) : (
             // Fallback while loading or if not set
             <div className="w-full h-full bg-[#111]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
        </div>

        {/* ... (Keep your Hero Text content exactly the same) ... */}
        <div className="relative z-20 text-center px-4 md:px-6 max-w-5xl mx-auto mt-[-50px]">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6 animate-fade-in">
            <span className="text-[#c9a449] text-sm md:text-lg">✧</span>
            <p className="text-[#c9a449] tracking-[0.25em] text-[10px] md:text-sm font-bold uppercase">
              Luxury Inspired Fragrances
            </p>
            <span className="text-[#c9a449] text-sm md:text-lg">✧</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1] animate-fade-in-up">
            Inspired Luxury. <br />
            <span className="text-[#c9a449]">Designed for You.</span>
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light animate-fade-in-up delay-100">
            Premium oil-based fragrances inspired by the world’s most iconic scents.
            Long-lasting luxury crafted for those who demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
            <Link
              href="/shop"
              className="bg-[#c9a449] text-black px-8 py-4 rounded-sm font-bold tracking-widest text-xs hover:bg-[#b08d3b] transition-all w-full sm:w-auto"
            >
              SHOP COLLECTION →
            </Link>
            <Link
              href="/about"
              className="bg-white text-black px-8 py-4 rounded-sm font-bold tracking-widest text-xs hover:bg-gray-200 transition-all w-full sm:w-auto"
            >
              OUR STORY
            </Link>
          </div>
        </div>

        <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-80">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-[#c9a449]/50 flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-[#c9a449] rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* --- BESTSELLERS SECTION (Keep exactly the same) --- */}
      <FadeInSection>
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          {/* ... (Keep existing Bestseller code) ... */}
           <div className="text-center mb-12 md:mb-16">
            <p className="text-[#c9a449] text-xs tracking-[0.3em] uppercase mb-3">Most Wanted</p>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Bestselling Fragrances</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Our most coveted scents, inspired by the world's finest perfumeries</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product._id} product={{ id: product._id, ...product }} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop" className="text-[#c9a449] text-xs tracking-widest font-bold hover:text-white transition-colors border-b border-[#c9a449] pb-1">
              VIEW ALL FRAGRANCES →
            </Link>
          </div>
        </section>
      </FadeInSection>

      {/* --- COLLECTIONS SECTION --- */}
      <FadeInSection delay={200}>
        <section className="py-16 md:py-20 px-6 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#c9a449] text-xs tracking-[0.3em] uppercase mb-3">Collections</p>
              <h2 className="text-3xl md:text-5xl font-serif text-white">Find Your Signature</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
              
              {/* For Her */}
              <Link href="/women/for-her" className="group relative h-[400px] md:h-full overflow-hidden rounded-sm">
                 {images?.forHerImage && (
                   <Image 
                    src={urlFor(images.forHerImage).width(600).url()} 
                    alt="Women" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-50" 
                   />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                 <div className="absolute bottom-10 left-8 z-10">
                   <p className="text-[#c9a449] text-[10px] tracking-widest uppercase mb-2">Elegant & Empowering</p>
                   <h3 className="text-3xl font-serif text-white mb-4">FOR HER</h3>
                   <span className="text-white text-xs tracking-widest border-b border-white/30 pb-1 group-hover:border-[#c9a449] group-hover:text-[#c9a449] transition-all">EXPLORE →</span>
                 </div>
              </Link>

              {/* For Him */}
              <Link href="/men/for-him" className="group relative h-[400px] md:h-full overflow-hidden rounded-sm">
                 {images?.forHimImage && (
                   <Image 
                    src={urlFor(images.forHimImage).width(600).url()} 
                    alt="Men" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-50" 
                   />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                 <div className="absolute bottom-10 left-8 z-10">
                   <p className="text-[#c9a449] text-[10px] tracking-widest uppercase mb-2">Bold & Refined</p>
                   <h3 className="text-3xl font-serif text-white mb-4">FOR HIM</h3>
                   <span className="text-white text-xs tracking-widest border-b border-white/30 pb-1 group-hover:border-[#c9a449] group-hover:text-[#c9a449] transition-all">EXPLORE →</span>
                 </div>
              </Link>

              {/* Unisex */}
              <Link href="/unisex/for-us" className="group relative h-[400px] md:h-full overflow-hidden rounded-sm">
                 {images?.unisexImage && (
                   <Image 
                    src={urlFor(images.unisexImage).width(600).url()} 
                    alt="Unisex" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-50" 
                   />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                 <div className="absolute bottom-10 left-8 z-10">
                   <p className="text-[#c9a449] text-[10px] tracking-widest uppercase mb-2">Timeless & Universal</p>
                   <h3 className="text-3xl font-serif text-white mb-4">UNISEX</h3>
                   <span className="text-white text-xs tracking-widest border-b border-white/30 pb-1 group-hover:border-[#c9a449] group-hover:text-[#c9a449] transition-all">EXPLORE →</span>
                 </div>
              </Link>

            </div>
          </div>
        </section>
      </FadeInSection>

      <style jsx global>{`
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s infinite;
        }
      `}</style>
    </div>
  );
}

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}