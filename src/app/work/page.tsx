"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  const categories = ["Website Applications", "Motion Design", "Graphics Design"];

  return (
    <Layout>
      <div className="mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold font-display tracking-tighter mb-8"
        >
          SELECTED<br/>WORKS.
        </motion.h1>
      </div>

      {categories.map((cat, idx) => (
        <section key={cat} className="mb-32">
          <h2 className="text-4xl font-display mb-12 flex items-center gap-4 border-b border-white/10 pb-4">
            <span className="text-sm font-mono text-neutral-600">({(idx + 1).toString().padStart(2, '0')})</span>
            {cat}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {PORTFOLIO_ITEMS.filter(item => item.category === cat).map((item) => (
              item.vimeoId ? (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer block"
                >
                  <div className="aspect-[4/5] bg-neutral-900 overflow-hidden mb-6 border border-white/5 relative">
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors z-10" />
                    <iframe
                      src={`https://player.vimeo.com/video/${item.vimeoId}?h=&autoplay=1&loop=1&muted=1`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-display font-medium mb-1 group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
                      <p className="text-xs font-mono text-neutral-500">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.a
                  key={item.id}
                  href={item.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer block"
                >
                  <div className="aspect-[4/5] bg-neutral-900 overflow-hidden mb-6 border border-white/5 relative">
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors z-10" />
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-display font-medium mb-1 group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
                      <p className="text-xs font-mono text-neutral-500">{item.description}</p>
                    </div>
                    <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors flex-shrink-0" />
                  </div>
                </motion.a>
              )
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}
