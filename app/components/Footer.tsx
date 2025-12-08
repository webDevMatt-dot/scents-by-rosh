import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    // Removed 'mt-16' (margin-top) and 'border-t border-[#111]'
    <footer className="bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-start">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col items-start mb-4">
            <span className="text-2xl md:text-3xl font-serif tracking-wider text-white">
              SCENTS
            </span>
            <span className="text-xs tracking-[0.3em] text-amber-400 -mt-1">by ROSH</span>
          </Link>

          <p className="text-gray-400 text-sm mb-6 max-w-sm">
            Inspired luxury. Premium oil-based fragrances crafted for those who
            demand excellence without compromise.
          </p>

          <div className="flex gap-5">
            {/* Social Icons */}
            <a aria-label="instagram" href="#" className="text-gray-400 hover:text-[#c9a449] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a aria-label="facebook" href="#" className="text-gray-400 hover:text-[#c9a449] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a aria-label="twitter" href="#" className="text-gray-400 hover:text-[#c9a449] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 7.8 4.5c2.1-.2 3.2-.4 3.2-.4l-.9 5.6 3-2.5 3 2-1.3-5s-1-2.2 4-2.8z"/><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
          </div>
        </div>

        <div>
          <h4 className="text-gray-200 text-sm tracking-[0.3em] uppercase mb-4">Shop</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li><Link href="/shop" className="hover:text-[#c9a449] transition-colors">All Fragrances</Link></li>
            <li><Link href="/women/for-her" className="hover:text-[#c9a449] transition-colors">Women</Link></li>
            <li><Link href="/men/for-him" className="hover:text-[#c9a449] transition-colors">Men</Link></li>
            <li><Link href="/unisex/for-us" className="hover:text-[#c9a449] transition-colors">Unisex</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-200 text-sm tracking-[0.3em] uppercase mb-4">Info</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li><Link href="/about" className="hover:text-[#c9a449] transition-colors">About Us</Link></li>
            <li><Link href="/shipping" className="hover:text-[#c9a449] transition-colors">Order Tracking</Link></li>
            <li><Link href="/reviews" className="hover:text-[#c9a449] transition-colors">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-[#c9a449] transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#111]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-gray-600 text-xs tracking-wide">
          © {new Date().getFullYear()} Scents by Rosh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}