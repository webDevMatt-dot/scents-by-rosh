import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar"; 
import { CartProvider } from "./context/CartContext";
import type { Metadata } from "next"; 

// Metadata setup
export const metadata: Metadata = {
  title: "Scents by Rosh | Luxury Inspired Fragrances",
  description: "Premium oil-based fragrances inspired by the world's most iconic scents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white min-h-screen">
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}