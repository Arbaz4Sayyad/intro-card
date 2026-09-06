import React, { createContext, useContext, useState, useEffect } from "react";

export const THEMES = [
  {
    id: "indigo",
    name: "Electric Indigo",
    color: "#6366f1",
    accentClass: "text-indigo-400",
    bgClass: "bg-indigo-600",
    borderClass: "border-indigo-500/30",
    glowColor: "rgba(99, 102, 241, 0.15)",
    badgeBg: "bg-indigo-500/10",
    badgeText: "text-indigo-400",
    badgeBorder: "border-indigo-500/20"
  },
  {
    id: "emerald",
    name: "Emerald Cyber",
    color: "#10b981",
    accentClass: "text-emerald-400",
    bgClass: "bg-emerald-600",
    borderClass: "border-emerald-500/30",
    glowColor: "rgba(16, 185, 129, 0.15)",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    badgeBorder: "border-emerald-500/20"
  },
  {
    id: "cyan",
    name: "Cyan Aurora",
    color: "#06b6d4",
    accentClass: "text-cyan-400",
    bgClass: "bg-cyan-600",
    borderClass: "border-cyan-500/30",
    glowColor: "rgba(6, 182, 212, 0.15)",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-400",
    badgeBorder: "border-cyan-500/20"
  },
  {
    id: "amber",
    name: "Sunset Amber",
    color: "#f59e0b",
    accentClass: "text-amber-400",
    bgClass: "bg-amber-600",
    borderClass: "border-amber-500/30",
    glowColor: "rgba(245, 158, 11, 0.15)",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    badgeBorder: "border-amber-500/20"
  },
  {
    id: "rose",
    name: "Neon Rose",
    color: "#f43f5e",
    accentClass: "text-rose-400",
    bgClass: "bg-rose-600",
    borderClass: "border-rose-500/30",
    glowColor: "rgba(244, 63, 94, 0.15)",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-400",
    badgeBorder: "border-rose-500/20"
  }
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "indigo";
  });

  const currentTheme = THEMES.find((t) => t.id === currentThemeId) || THEMES[0];

  useEffect(() => {
    localStorage.setItem("portfolio_theme", currentThemeId);
    document.documentElement.setAttribute("data-theme", currentThemeId);
    
    // Set custom CSS variables for smooth gradient & glow matching
    document.documentElement.style.setProperty("--accent-color", currentTheme.color);
    document.documentElement.style.setProperty("--accent-glow", currentTheme.glowColor);
  }, [currentThemeId, currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        currentThemeId,
        setTheme: setCurrentThemeId,
        themes: THEMES
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
