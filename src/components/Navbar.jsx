import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  FileText,
  Calendar,
  Menu,
  X
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Impact", href: "#impact", id: "impact" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Stack", href: "#tech", id: "tech" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export default function Navbar({
  onOpenResume,
  onOpenSchedule
}) {
  const { currentTheme, currentThemeId, setTheme, themes } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.1 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full glass-pill border border-zinc-800/80 shadow-2xl backdrop-blur-xl bg-zinc-950/80"
        >
          {/* Logo / Home */}
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="flex items-center gap-2 pr-2 sm:pr-3 text-zinc-100 font-bold text-sm hover:opacity-80 transition-opacity"
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-mono font-bold shadow-sm"
              style={{ backgroundColor: currentTheme.color }}
            >
              AS
            </div>
            <span className="hidden md:inline text-xs font-semibold tracking-wide text-zinc-300">
              Arbaz Sayyad
            </span>
          </a>

          <div className="h-4 w-px bg-zinc-800 mx-1 hidden sm:block" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-zinc-100 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-zinc-800/90 border border-zinc-700/60 -z-10 shadow-inner"
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="h-4 w-px bg-zinc-800 mx-1" />

          {/* Quick Actions (Theme Picker, Resume Button) */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* Resume Trigger */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              Resume
            </button>

            {/* Theme Selector Popover Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Change Color Accent"
              >
                <span
                  className="w-3 h-3 rounded-full shadow-sm"
                  style={{ backgroundColor: currentTheme.color }}
                />
                <Palette className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              {/* Theme Dropdown */}
              <AnimatePresence>
                {isThemeOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-48 p-2 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl z-50"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 px-2 py-1 mb-1">
                      Accent Theme
                    </p>
                    <div className="space-y-1">
                      {themes.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => {
                            setTheme(theme.id);
                            setIsThemeOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                            currentThemeId === theme.id
                              ? "bg-zinc-800/90 text-white"
                              : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: theme.color }}
                            />
                            <span>{theme.name}</span>
                          </div>
                          {currentThemeId === theme.id && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 inset-x-4 z-40 p-4 rounded-3xl bg-zinc-950/95 border border-zinc-800 shadow-2xl backdrop-blur-2xl lg:hidden max-w-sm mx-auto"
          >
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-zinc-900 text-white font-semibold"
                        : "text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: currentTheme.color }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 mt-3 border-t border-zinc-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200"
              >
                <FileText className="w-4 h-4" /> View Resume
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-white text-sm font-medium"
                style={{ backgroundColor: currentTheme.color }}
              >
                <Calendar className="w-4 h-4" /> Schedule Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
