import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail, ArrowRight, Code2, ChevronDown, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/profile.png";

export default function Hero({ onOpenResume, onOpenSchedule }) {
  const { currentTheme } = useTheme();

  return (
    <section
      id="about"
      className="relative min-h-[100dvh] pt-20 pb-4 md:pt-24 md:pb-6 flex flex-col items-center justify-center text-center px-4"
    >
      {/* Background Dynamic Theme Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[130px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentTheme.glowColor }}
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center w-full my-auto"
      >
        {/* Profile Avatar with Status indicator */}
        <div className="relative inline-block mb-3.5">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 shadow-2xl overflow-hidden transition-all duration-500"
            style={{
              background: `linear-gradient(to bottom, ${currentTheme.color}, #18181b)`
            }}
          >
            <img
              src={profileImg}
              alt="Arbaz Sayyad"
              className="w-full h-full object-cover object-top rounded-full bg-zinc-800"
            />
          </div>
          <div className="absolute bottom-1 right-1 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-zinc-950 rounded-full border border-zinc-800 shadow-md">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
          </div>
        </div>

        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="mb-2.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Open to Software Engineering Opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-2"
        >
          Arbaz Sayyad
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl font-semibold mb-2.5 tracking-tight transition-colors duration-500 max-w-2xl"
          style={{ color: currentTheme.color }}
        >
          Backend Software Engineer | Distributed Systems & Microservices
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
          className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-zinc-400 mb-4 leading-relaxed px-2"
        >
          Engineering high-throughput backends, Kafka event streams, and resilient cloud architectures for production systems.
        </motion.p>

        {/* Spring Contributor Highlight Badge */}
        <motion.a
          href="https://github.com/Arbaz4Sayyad/spring-contributions-showcase"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium mb-5 backdrop-blur-sm group hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300 shadow-sm"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500/30 blur-sm rounded-full animate-pulse" />
            <Code2 className="w-4 h-4 relative z-10" />
          </div>
          <span className="text-xs sm:text-sm tracking-tight font-semibold">
            Contributor to the Spring Ecosystem
          </span>
          <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-4"
        >
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-zinc-950 font-semibold bg-white hover:bg-zinc-100 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-300 cursor-pointer shadow-lg text-xs sm:text-sm"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </button>

          <button
            onClick={onOpenSchedule}
            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white font-medium border border-zinc-700/60 bg-zinc-900/90 hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer text-xs sm:text-sm"
          >
            <Calendar className="w-4 h-4" style={{ color: currentTheme.color }} />
            Schedule Call
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-900 hover:text-white transition-all duration-300 text-xs sm:text-sm"
          >
            Contact Me <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Social Links Row (GitHub, LinkedIn, Email) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-2"
        >
          <a
            href="https://github.com/Arbaz4Sayyad"
            target="_blank"
            rel="noreferrer"
            className="group relative p-2.5 sm:p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>

          <a
            href="https://linkedin.com/in/arbaz-sayyad"
            target="_blank"
            rel="noreferrer"
            className="group relative p-2.5 sm:p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>

          <a
            href="mailto:arbazsayyad.dev@gmail.com"
            className="group relative p-2.5 sm:p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-zinc-400 hover:text-rose-400 hover:border-rose-500/30 transition-all duration-300 backdrop-blur-sm"
            title="Email"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Animated Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          className="mt-3 flex flex-col items-center"
        >
          <a
            href="#impact"
            className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}