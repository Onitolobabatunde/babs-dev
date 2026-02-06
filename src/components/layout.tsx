"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground bg-grain font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white px-6 py-6 md:px-12 md:py-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight font-display hover:opacity-70 transition-opacity">
          BABS.DEV
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
          <Link href="/work" className="hover:underline underline-offset-4 decoration-1">
            WORK
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4 decoration-1">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4 decoration-1">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 text-2xl font-display md:hidden"
        >
          <Link href="/work" onClick={() => setIsMenuOpen(false)}>WORK</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="pt-24 md:pt-32 px-6 md:px-12 max-w-[1600px] mx-auto pb-24 bg-grain">
        {children}
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-sm text-neutral-500">
        <div>
          <p>© 2026 Babs Developer.</p>
        </div>
        <div className="flex gap-6">
          <span className="text-neutral-600">Privacy</span>
          <span className="text-neutral-600">Terms</span>
        </div>
      </footer>
    </div>
  );
}
