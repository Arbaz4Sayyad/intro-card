import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MessageSquare, Video, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ScheduleModal({ isOpen, onClose }) {
  const { currentTheme } = useTheme();
  const [selectedType, setSelectedType] = useState("intro");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const meetingTypes = [
    {
      id: "intro",
      title: "15-Min Quick Intro",
      desc: "Discuss engineering background, open backend roles, and mutual fit.",
      duration: "15 mins",
      icon: <CoffeeIcon className="w-5 h-5" />
    },
    {
      id: "tech",
      title: "30-Min Technical Chat",
      desc: "Deep dive into distributed systems, Kafka pipelines, or Spring architecture.",
      duration: "30 mins",
      icon: <Video className="w-5 h-5" />
    },
    {
      id: "interview",
      title: "Formal Interview / Hiring",
      desc: "Schedule a formal technical or hiring round.",
      duration: "45-60 mins",
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  const handleBookViaEmail = (type) => {
    const subject = encodeURIComponent(`Meeting Request: ${type.title} with Arbaz Sayyad`);
    const body = encodeURIComponent(
      `Hi Arbaz,\n\nI'd like to schedule a ${type.duration} chat regarding backend engineering opportunities.\n\nProposed Times / Timezone:\n1. \n2. \n\nLooking forward to connecting!`
    );
    window.location.href = `mailto:arbazsayyad.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800/80 rounded-3xl p-6 md:p-8 shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800"
                  style={{ color: currentTheme.color }}
                >
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">Schedule a Conversation</h3>
                  <p className="text-sm text-zinc-400">Let's connect on backend engineering & opportunities</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {meetingTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedType === type.id
                      ? "bg-zinc-900 border-zinc-600 shadow-md"
                      : "bg-zinc-900/40 border-zinc-800/60 hover:bg-zinc-900/70 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 mt-0.5"
                      style={selectedType === type.id ? { color: currentTheme.color } : {}}
                    >
                      {type.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-zinc-100 text-sm md:text-base">
                          {type.title}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-mono">
                          {type.duration}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">{type.desc}</p>
                    </div>
                  </div>
                  <div className="ml-2">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedType === type.id
                          ? "border-transparent"
                          : "border-zinc-700"
                      }`}
                      style={selectedType === type.id ? { backgroundColor: currentTheme.color } : {}}
                    >
                      {selectedType === type.id && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA action */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const type = meetingTypes.find((t) => t.id === selectedType);
                  handleBookViaEmail(type);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-medium shadow-lg hover:scale-[1.02] transition-transform"
                style={{ backgroundColor: currentTheme.color }}
              >
                <Mail className="w-4 h-4" /> Request Meeting via Email <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-xs text-zinc-500 mt-4">
              Timezone: IST (UTC+5:30) • Usually replies within 12–24 hours
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function CoffeeIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Z" />
      <path d="M6 2v2" />
    </svg>
  );
}
