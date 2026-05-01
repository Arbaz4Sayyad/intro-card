import { motion } from "framer-motion";
import { FileText, Mail, ArrowRight, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { cn } from "../utils";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center text-center px-4">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="relative inline-block mb-8">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-xl overflow-hidden">
            <img 
              src={profileImg} 
              alt="Arbaz Sayyad" 
              className="w-full h-full object-cover object-top rounded-full bg-zinc-800"
            />
          </div>
          <div className="absolute bottom-1 right-1 flex items-center justify-center w-8 h-8 bg-zinc-950 rounded-full border border-zinc-800">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm font-medium text-zinc-300 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 mb-4"
        >
          Arbaz Sayyad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl font-medium text-indigo-400 mb-6"
        >
          Backend Software Engineer | Specialized in Distributed Systems & Scalable Microservices
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10 leading-relaxed"
        >
          Engineering high-performance backends for production systems at scale. Core contributor to the Spring Ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-950 font-semibold hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
            <FileText className="w-4 h-4" />
            View Resume
          </a>
          <a href="https://arbaz4sayyad.github.io/MyPortfolio/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-100 font-medium hover:bg-zinc-700 transition-all duration-300">
            <Globe className="w-4 h-4" />
            Portfolio
          </a>
          <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-white transition-all duration-300">
            Contact Me <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <a href="https://github.com/Arbaz4Sayyad" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/arbaz-sayyad" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="mailto:arbazsayyad.dev@gmail.com" className="text-zinc-500 hover:text-rose-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
