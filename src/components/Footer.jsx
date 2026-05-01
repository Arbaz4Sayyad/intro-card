import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("arbazsayyad.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative py-24 px-4 border-t border-zinc-800/50 mt-20 overflow-hidden" id="contact">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-6">
          Let's build something impactful.
        </h2>
        <p className="text-zinc-400 text-lg mb-10">
          Actively looking for Software Engineering roles where I can contribute to scalable backend systems.
        </p>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300"
        >
          {copied ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Email Copied!
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              arbazsayyad.dev@gmail.com
            </>
          )}
        </button>

        <div className="mt-20 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Arbaz Sayyad. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="https://github.com/Arbaz4Sayyad" className="hover:text-zinc-300 transition-colors">GitHub</a>
             <a href="https://linkedin.com/in/arbaz-sayyad" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
