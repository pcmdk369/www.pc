/**
 * PCMDK369™ Footer
 * Left: logo + tagline | Center: nav links | Right: contact + social
 * Bottom: copyright
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = [
  {
    label: "Architecture",
    href: "#what-is",
  },
  {
    label: "5 Systems",
    href: "#systems",
  },
  {
    label: "Intelligence",
    href: "#intelligence",
  },
  {
    label: "The Cycle",
    href: "#cycle",
  },
  {
    label: "Ecosystem",
    href: "#ecosystem",
  },
];

const dimensions = [
  { name: "Novatrix™", href: "https://novatrix.pcmdk369.com", color: "#4a7fff" },
  { name: "Aeternyx™", href: "https://aeternyx.pcmdk369.com", color: "#8b5cf6" },
  { name: "Dimensyx™", href: "https://dimensyx.pcmdk369.com", color: "#06b6d4" },
  { name: "Eneraxis™", href: "https://eneraxis.pcmdk369.com", color: "#f59e0b" },
  { name: "Serenyx™", href: "https://serenyx.pcmdk369.com", color: "#10b981" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={ref}
      className="relative pt-20 pb-10 overflow-hidden"
      style={{ background: "#04040c", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Top gold rule */}
      <div className="container">
        <div className="gold-rule mb-16" />
      </div>

      {/* Main footer grid */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663787648478/kGzhAj6FKx4VwbxkwUjio3/pcmdk369-logo-mark-SsuDQERY3rsz2fTRJgHCDd.webp"
                alt="PCMDK369™ mark"
                className="w-10 h-10 object-contain"
              />
              <span
                className="text-2xl font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f0f0ff",
                  letterSpacing: "-0.02em",
                }}
              >
                PCMDK<span style={{ color: "#c9a84c" }}>369</span>
                <span style={{ color: "#c9a84c", fontSize: "0.55em", verticalAlign: "super" }}>™</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#9090c0",
                fontWeight: 300,
              }}
            >
              Architecting the integrated future of human potential.
            </p>
            <p
              className="text-xs tracking-wider"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "rgba(144,144,192,0.5)",
              }}
            >
              Economy · Time · Space · Energy · Mind
            </p>
          </motion.div>

          {/* Center: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{ fontFamily: "'DM Mono', monospace", color: "#c9a84c" }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="link-gold text-sm text-left"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <h4
              className="text-xs tracking-widest uppercase mt-8 mb-4"
              style={{ fontFamily: "'DM Mono', monospace", color: "#c9a84c" }}
            >
              Dimensions
            </h4>
            <ul className="flex flex-col gap-2">
              {dimensions.map((dim) => (
                <li key={dim.name}>
                  <a
                    href={dim.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#9090c0",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = dim.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9090c0")}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-transform duration-200 group-hover:scale-125"
                      style={{ background: dim.color, flexShrink: 0 }}
                    />
                    {dim.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{ fontFamily: "'DM Mono', monospace", color: "#c9a84c" }}
            >
              Connect
            </h4>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:pcmdkofficial@gmail.com"
                className="flex items-start gap-3 group"
                style={{ textDecoration: "none" }}
              >
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-200"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ color: "#9090c0" }}
                >
                  <path
                    d="M2 4a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M2 4l6 5 6-5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className="text-sm transition-colors duration-200 group-hover:text-[#c9a84c]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#9090c0",
                    fontWeight: 300,
                    wordBreak: "break-all",
                  }}
                >
                  pcmdkofficial@gmail.com
                </span>
              </a>

              <a
                href="https://linktr.ee/Mr.MurliDhar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
                style={{ textDecoration: "none" }}
              >
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ color: "#9090c0" }}
                >
                  <path
                    d="M6 8a2 2 0 100-4 2 2 0 000 4zM10 8a2 2 0 100-4 2 2 0 000 4zM8 12a2 2 0 100-4 2 2 0 000 4z"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M7.5 6.5L9 7M8.5 6.5L7 7M8 10V8"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className="text-sm transition-colors duration-200 group-hover:text-[#c9a84c]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#9090c0",
                    fontWeight: 300,
                  }}
                >
                  linktr.ee/Mr.MurliDhar
                </span>
              </a>
            </div>

            {/* SIC badge */}
            <div
              className="mt-10 p-4 rounded-sm"
              style={{
                background: "rgba(201,168,76,0.04)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div
                className="text-xs tracking-widest uppercase mb-1"
                style={{ fontFamily: "'DM Mono', monospace", color: "#c9a84c" }}
              >
                Powered by SIC™
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#9090c0",
                  fontWeight: 300,
                }}
              >
                Super Intelligent Core — the governing intelligence of PCMDK369™
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="gold-rule mb-8" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(144,144,192,0.5)",
            }}
          >
            © 2026 PCMDK369™. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(144,144,192,0.3)",
            }}
          >
            The Integrated Architecture of Human Potential
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
