/**
 * PCMDK369™ Navbar
 * Void Codex design: transparent → glass on scroll
 * Playfair Display wordmark + Space Grotesk nav links
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Architecture", href: "#what-is" },
  { label: "5 Systems", href: "#systems" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Ecosystem", href: "#ecosystem" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(4, 4, 12, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663787648478/kGzhAj6FKx4VwbxkwUjio3/pcmdk369-logo-mark-SsuDQERY3rsz2fTRJgHCDd.webp"
            alt="PCMDK369™ mark"
            className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f0f0ff",
              letterSpacing: "-0.01em",
            }}
          >
            PCMDK<span style={{ color: "#c9a84c" }}>369</span>
            <span style={{ color: "#c9a84c", fontSize: "0.6em", verticalAlign: "super" }}>™</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="link-gold text-sm font-medium tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#ecosystem")}
            className="btn-gold text-xs py-2 px-5"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span>Enter</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-px bg-[#f0f0ff]"
            animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-px bg-[#f0f0ff]"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-px bg-[#f0f0ff]"
            animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(4, 4, 12, 0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="container py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-[#9090c0] hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
                onClick={() => handleNavClick("#ecosystem")}
                className="btn-gold self-start text-xs py-2.5 px-6 mt-2"
              >
                <span>Enter the Architecture</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
