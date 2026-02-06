"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { ASSETS } from "@/data/portfolio";

export default function About() {
  const marqueeX1 = {
    animate: {
      x: [0, -50, 0],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  };

  const webDevSkills = ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL", "Postman", "Rest API", "Next.js", "React.js", "Tailwind", "CSS", "Bootstrap"];
  const motionSkills = ["DaVinci Resolve", "Adobe After Effects", "Adobe Premiere Pro"];
  const designSkills = ["Adobe Photoshop", "Adobe Illustrator", "Figma"];

  return (
    <Layout>
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square grayscale border border-white/10 overflow-hidden"
        >
          <img src={ASSETS.userImage} alt="Babatunde Onitolo" className="w-full h-full object-cover" />
        </motion.div>
        
        <div>
          <motion.div {...marqueeX1}>
            <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tighter mb-12">
              ABOUT ME.
            </h1>
          </motion.div>

          <div className="space-y-12 text-2xl md:text-3xl font-light leading-relaxed text-neutral-300">
            <p>
              I'm Babatunde Onitolo. A fullstack developer and designer based in Lagos, Nigeria.
            </p>
            <p>
              I love using my skills to solve complex problems and building digital experiences that are both beautiful and functional. 
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12 text-2xl md:text-3xl font-light leading-relaxed text-neutral-300 max-w-4xl">
        <p>
          I thrive in collaborative environments, believing that the best solutions come from diverse teams working together toward a common goal. Professionalism, precision, and performance are at the core of everything I build.
        </p>
      </div>

      <div className="mt-24 pt-12 border-t border-white/10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">Expertise & Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-mono text-neutral-400 mb-6 uppercase tracking-wider">Web Development</h3>
            <div className="flex flex-wrap gap-3">
              {webDevSkills.map(skill => (
                <span key={skill} className="px-4 py-2 border border-white/10 text-sm font-mono hover:bg-white hover:text-black transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-mono text-neutral-400 mb-6 uppercase tracking-wider">Motion Design</h3>
            <div className="flex flex-wrap gap-3">
              {motionSkills.map(skill => (
                <span key={skill} className="px-4 py-2 border border-white/10 text-sm font-mono hover:bg-white hover:text-black transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-mono text-neutral-400 mb-6 uppercase tracking-wider">Graphics Design</h3>
            <div className="flex flex-wrap gap-3">
              {designSkills.map(skill => (
                <span key={skill} className="px-4 py-2 border border-white/10 text-sm font-mono hover:bg-white hover:text-black transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
