import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, User, Mail, MessageSquare, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ContactForm() {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Opportunity / Hiring Inquiry",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    // Construct mailto link
    const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      setStatus("success");
      window.location.href = `mailto:arbazsayyad.dev@gmail.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 md:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] pointer-events-none"
        style={{ backgroundColor: currentTheme.glowColor }}
      />

      <div className="flex items-center gap-2 mb-6">
        <div
          className="p-2 rounded-xl bg-zinc-950 border border-zinc-800"
          style={{ color: currentTheme.color }}
        >
          <Sparkles className="w-4 h-4" />
        </div>
        <h3 className="text-xl font-bold text-zinc-100">Send a Direct Message</h3>
      </div>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <div
            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-zinc-950 border border-zinc-800"
            style={{ color: currentTheme.color }}
          >
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-zinc-100 mb-2">Message Prepared!</h4>
          <p className="text-zinc-400 text-sm max-w-sm mx-auto mb-6">
            Opening your email client to send the message directly to <b>arbazsayyad.dev@gmail.com</b>.
          </p>
          <button
            onClick={() => {
              setFormData({ name: "", email: "", subject: "Opportunity / Hiring Inquiry", message: "" });
              setStatus("idle");
            }}
            className="text-xs font-semibold px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-zinc-500" /> Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-zinc-500" /> Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah@company.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              Subject / Topic
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
            >
              <option value="Full-time Backend Opportunity">Full-time Backend Opportunity</option>
              <option value="Distributed Systems Consulting / Project">Distributed Systems Consulting / Project</option>
              <option value="Open Source / Spring Contribution Collaboration">Open Source / Spring Collaboration</option>
              <option value="Casual Technical Chat">Casual Technical Chat</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-zinc-500" /> Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about the role, technical challenge, or team..."
              className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-zinc-100 text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50"
            style={{ backgroundColor: currentTheme.color }}
          >
            {status === "submitting" ? (
              <span>Preparing message...</span>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Direct Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
