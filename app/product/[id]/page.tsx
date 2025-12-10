"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { client, urlFor } from "@/app/lib/sanity"; // Import Sanity utils
import ProductCard from "@/app/components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<"notes" | "ingredients">("notes");
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // 1. Fetch Current Product
      const query = `*[_type == "product" && _id == $id][0] {
        _id, name, inspiredBy, price, category, initial, image
      }`;
      const fetchedProduct = await client.fetch(query, { id });
      setProduct(fetchedProduct);

      if (fetchedProduct) {
        // 2. Fetch Related (Same category, excluding current)
        const relatedQuery = `*[_type == "product" && category == $cat && _id != $id][0...4] {
          _id, name, inspiredBy, price, category, initial, image
        }`;
        const related = await client.fetch(relatedQuery, { 
          cat: fetchedProduct.category, 
          id 
        });
        setRelatedProducts(related);
      }
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-[#c9a449]">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-[#c9a449] border-b border-[#c9a449] pb-1">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#c9a449] selection:text-black">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- LEFT: IMAGE GALLERY --- */}
          <div className="relative h-[500px] md:h-[700px] w-full bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#222]">
            {product.image ? (
              <Image 
                src={urlFor(product.image).width(800).url()} 
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#111] to-black">
                <span className="font-serif text-[12rem] text-[#c9a449]/20">{product.initial}</span>
              </div>
            )}
            
            <div className="absolute top-6 left-6">
               <span className="inline-block rounded-full border border-[#c9a449]/40 bg-black/30 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#c9a449] backdrop-blur-md uppercase">
                  {product.category?.replace("-", " ")}
               </span>
            </div>
          </div>

          {/* --- RIGHT: DETAILS --- */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{product.name}</h1>
            <p className="text-gray-400 text-lg mb-6">Inspired by <span className="text-white">{product.inspiredBy}</span></p>
            <p className="text-3xl font-serif text-[#c9a449] mb-8">${product.price.toFixed(2)}</p>

            <p className="text-gray-300 leading-relaxed mb-10 text-sm md:text-base">
              A masterpiece of olfactory art. This premium oil-based fragrance captures the essence of luxury with 
              long-lasting depth and projection. Meticulously blended to mirror the world's most iconic scents.
            </p>

            <button 
              onClick={() => addToCart({ id: product._id, ...product })}
              className="w-full bg-[#c9a449] text-black font-bold tracking-[0.2em] text-sm uppercase py-5 rounded-sm hover:bg-[#b08d3b] transition-all mb-12 shadow-lg shadow-[#c9a449]/20"
            >
              Add to Bag
            </button>

            {/* Accordion / Tabs */}
            <div className="border-t border-[#222]">
              <div className="border-b border-[#222]">
                <button 
                  onClick={() => setActiveTab(activeTab === "notes" ? "ingredients" : "notes")}
                  className="w-full flex justify-between items-center py-6 text-left hover:text-[#c9a449] transition-colors"
                >
                  <span className="text-xs uppercase tracking-widest font-bold">Fragrance Notes</span>
                  <span className="text-xl">{activeTab === "notes" ? "−" : "+"}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeTab === "notes" ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <span className="text-white">Top:</span> Saffron, Jasmine<br/>
                    <span className="text-white">Heart:</span> Amberwood, Ambergris<br/>
                    <span className="text-white">Base:</span> Fir Resin, Cedar
                  </p>
                </div>
              </div>

              <div className="border-b border-[#222]">
                <button 
                  onClick={() => setActiveTab(activeTab === "ingredients" ? "notes" : "ingredients")}
                  className="w-full flex justify-between items-center py-6 text-left hover:text-[#c9a449] transition-colors"
                >
                  <span className="text-xs uppercase tracking-widest font-bold">Details & Care</span>
                  <span className="text-xl">{activeTab === "ingredients" ? "−" : "+"}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeTab === "ingredients" ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                   <p className="text-gray-400 text-sm leading-relaxed">
                    Concentrated perfume oil. Alcohol-free. <br/>
                    Apply to pulse points (wrists, neck, behind ears) for maximum projection.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RELATED PRODUCTS --- */}
        <div className="mt-32">
          <h2 className="text-3xl font-serif mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {relatedProducts.length > 0 ? (
               relatedProducts.map(p => (
                 <ProductCard key={p._id} product={{ id: p._id, ...p }} />
               ))
             ) : (
               <p className="text-gray-500 col-span-4 text-center">No other products in this category yet.</p>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}