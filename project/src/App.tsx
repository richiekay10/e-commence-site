import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Featured Products
          </motion.h1>
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}