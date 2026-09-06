import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, Calendar, Sparkles, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import ContactForm from "./ContactForm";
import { useTheme } from "../context/ThemeContext";

export default function Footer({ onOpenSchedule }) {
  const { currentTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("arbazsayyad.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative py-24 px-4 border-t border-zinc-800/60 mt-12 overflow-hidden scroll-mt-16">
      {/* Background Dynamic Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[850px] h-[450px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentTheme.glowColor }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
          style={{
            backgroundColor: currentTheme.badgeBg,
            color: currentTheme.color,
            borderColor: currentTheme.badgeBorder
          }}
        >
          Let's Connect
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight mb-4">
          Let's build something impactful.
        </h2>

        <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Actively open for Software Engineering roles where I can contribute to high-scale backend services, event-driven pipelines, and distributed architectures.
        </p>

        {/* Quick Actions Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-medium shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ backgroundColor: currentTheme.color }}
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email: arbazsayyad.dev@gmail.com</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenSchedule}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium hover:bg-zinc-800 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-indigo-400" style={{ color: currentTheme.color }} />
            Schedule a Call
          </button>
        </div>

        {/* Interactive Direct Message Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Bottom copyright and socials */}
        <div className="pt-8 border-t border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Arbaz Sayyad. Built with React & Tailwind CSS.</p>
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/Arbaz4Sayyad"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/arbaz-sayyad"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://arbaz4sayyad.github.io/resume/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
