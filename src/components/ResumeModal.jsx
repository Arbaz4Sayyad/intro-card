import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Printer, FileText, Check, Loader2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ResumeModal({ isOpen, onClose }) {
  const { currentTheme } = useTheme();
  const iframeRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const directPdfUrl = "https://arbaz4sayyad.github.io/resume/Arbaz_Sayyad_Software_Engineer_Backend_Resume.pdf";
  const resumePageUrl = "https://arbaz4sayyad.github.io/resume/";

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
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

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(directPdfUrl);
      if (!response.ok) throw new Error("Fetch failed");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Arbaz_Sayyad_Backend_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 2500);
    } catch (err) {
      // Fallback direct download link
      const link = document.createElement("a");
      link.href = directPdfUrl;
      link.setAttribute("download", "Arbaz_Sayyad_Backend_Resume.pdf");
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow?.focus();
        iframeRef.current.contentWindow?.print();
      } catch (e) {
        // If cross-origin restricts direct iframe printing, open print dialog via hidden window
        const printWindow = window.open(directPdfUrl, "_blank");
        if (printWindow) {
          printWindow.addEventListener("load", () => {
            printWindow.print();
          });
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative w-full max-w-5xl h-[88vh] flex flex-col bg-zinc-950/95 border border-zinc-800/80 rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-indigo-400" style={{ color: currentTheme.color }}>
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100 text-base md:text-lg">
                    Arbaz Sayyad — Resume
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Backend Software Engineer | Distributed Systems
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={resumePageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/50 text-xs font-medium text-zinc-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open in New Tab
                </a>

                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/50 text-xs font-medium text-zinc-200 transition-colors"
                  title="Print Resume"
                >
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>

                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95 disabled:opacity-75 cursor-pointer"
                  style={{ backgroundColor: currentTheme.color }}
                >
                  {isDownloading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> Downloading...
                    </>
                  ) : downloadSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Downloaded!
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" /> Download PDF
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Preview Frame */}
            <div className="flex-1 w-full bg-zinc-900/40 relative overflow-hidden">
              <iframe
                ref={iframeRef}
                src={directPdfUrl}
                title="Arbaz Sayyad Resume"
                className="w-full h-full border-0 bg-white"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
