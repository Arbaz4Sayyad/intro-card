import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor,
  enableTilt = true,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const { currentTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt Spring Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    setMousePos({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const activeGlow = spotlightColor || currentTheme.glowColor || "rgba(99, 102, 241, 0.15)";
  const accentBorder = currentTheme.color || "#6366f1";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={
        enableTilt
          ? {
              transformStyle: "preserve-3d",
              rotateX,
              rotateY,
            }
          : {}
      }
      className={`relative rounded-2xl bg-zinc-900/50 border border-zinc-800/60 overflow-hidden transition-colors duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${activeGlow}, transparent 70%)`,
        }}
      />

      {/* Dynamic Border Spotlight Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.35 : 0,
          border: `1.5px solid ${accentBorder}`,
          maskImage: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent)`,
          WebkitMaskImage: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent)`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
