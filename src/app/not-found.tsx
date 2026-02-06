"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-8xl md:text-9xl font-bold font-display">404</h1>
          <h2 className="text-3xl md:text-4xl font-display">Page Not Found</h2>
          <p className="text-xl text-neutral-400 max-w-md">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Link href="/" className="inline-block mt-8 px-8 py-3 bg-white text-black font-display hover:bg-neutral-200 transition-colors">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}
