"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/layout";
import { PORTFOLIO_ITEMS, SKILLS, ASSETS } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const marqueeX1 = {
    animate: {
      x: [0, -100, 0],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  };

  const marqueeX2 = {
    animate: {
      x: [0, 100, 0],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  };

  const rotateAnimation = {
    animate: {
      rotate: 360
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const categories = ["Website Applications", "Motion Design", "Graphics Design"];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={containerRef} className="min-h-[90vh] flex flex-col justify-center mb-24 overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 z-0 opacity-40 grayscale group overflow-hidden border border-white/10 hidden lg:block">
           <img src={ASSETS.userImage} alt="Babatunde Onitolo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>

        <motion.div 
          initial="initial"
          animate="animate"
          className="max-w-full relative z-10"
        >
          <motion.div {...marqueeX2} className="whitespace-nowrap">
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-[12rem] font-bold font-display leading-[0.8] tracking-tighter mb-4 opacity-20">
              FULLSTACK DEVELOPER
            </motion.h1>
          </motion.div>
          
          <motion.div {...marqueeX1} className="whitespace-nowrap">
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-[12rem] font-bold font-display leading-[0.8] tracking-tighter mb-8">
              & DESIGNER.
            </motion.h1>
          </motion.div>

          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="max-w-xl">
            <motion.p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
              I'm Babatunde Onitolo. A fullstack developer and designer. I love using my skills to solve problems and working with a team to build impactful solutions together.
            </motion.p>
            <div className="mt-12 flex flex-wrap gap-4">
               <Button asChild className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-neutral-200 transition-colors">
                 <Link href="/work">View Selected Work</Link>
               </Button>
               <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/10 transition-colors">
                 <Link href="/contact">Get in Touch</Link>
               </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Rotating Motion Element */}
        <motion.div 
          {...rotateAnimation}
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-white/5 rounded-full pointer-events-none opacity-20 hidden lg:block"
        />
      </section>

      {/* About Preview */}
      <section id="about" className="mb-32 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 sticky top-32">01 — About Me</h2>
        </div>
        <div className="md:col-span-8 space-y-8 text-xl md:text-2xl font-light leading-relaxed text-neutral-300">
          <p>
            I operate at the intersection of design and engineering. With a background in both graphic design and computer science, I create comprehensive digital systems.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {SKILLS.map(skill => (
              <span key={skill} className="px-4 py-2 border border-white/10 text-xs font-mono hover:bg-white hover:text-black transition-colors duration-300 cursor-default">
                {skill}
              </span>
            ))}
          </div>
          <div className="pt-8">
             <Link href="/about" className="text-white text-xl font-display hover:opacity-70 transition-opacity inline-flex items-center gap-2">
               Learn more about my journey <ArrowUpRight size={24} />
             </Link>
          </div>
        </div>
      </section>

      {/* Work Sections on Home Page */}
      <section id="work" className="mb-32">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">02 — Selected Works</h2>
          <Link href="/work" className="text-neutral-500 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
            See all works
          </Link>
        </div>

        {categories.map((cat, idx) => (
          <div key={cat} className={idx !== 0 ? "mt-32" : ""}>
            <h3 className="text-4xl font-display mb-12 flex items-center gap-4">
              <span className="text-sm font-mono text-neutral-600">({(idx + 1).toString().padStart(2, '0')})</span>
              {cat}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {PORTFOLIO_ITEMS.filter(item => item.category === cat).map((item) => (
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
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
