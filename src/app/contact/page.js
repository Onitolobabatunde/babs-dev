"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { MessageCircle, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold font-display tracking-tighter mb-12"
        >
          CONTACT.
        </motion.h1>

        <p className="text-2xl md:text-3xl font-light text-neutral-400 mb-24 max-w-2xl">
          Have a project in mind? Let's talk about how we can build something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Direct Contact</h2>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/+2347073092869" 
                  className="flex items-center gap-4 text-2xl font-display hover:opacity-60 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> WhatsApp
                </a>
                <a 
                  href="mailto:onitololaurence@gmail.com" 
                  className="flex items-center gap-4 text-2xl font-display hover:opacity-60 transition-opacity"
                >
                  <Mail /> Email
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Social Presence</h2>
              <div className="flex gap-6">
                <a href="https://github.com/Onitolobabatunde?tab=repositories" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/onitolobabatunde/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/BabsOnitolo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-12 border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl font-display mb-6">Drop a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="text-xs font-mono uppercase text-neutral-500 block mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors" 
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase text-neutral-500 block mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors" 
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase text-neutral-500 block mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-white transition-colors h-32" 
                />
              </div>
              <Button className="w-full rounded-none bg-white text-black hover:bg-neutral-200">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
