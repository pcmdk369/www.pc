/**
 * PCMDK369™ Ecosystem Section
 * Grid of 10 subdomain tiles: novatrix / aeternyx / dimensyx / eneraxis / serenyx
 * academy / blog / career / gbc / legal
 * Each tile: dark glass with hover gold border
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiles = [
  {
    id: "novatrix",
    name: "Novatrix™",
    tag: "Economy",
    color: "#4a7fff",
    href: "https://novatrix.pcmdk369.com",
    description: "Economic intelligence & wealth architecture",
    category: "dimension",
  },
  {
    id: "aeternyx",
    name: "Aeternyx™",
    tag: "Time",
    color: "#8b5cf6",
    href: "https://aeternyx.pcmdk369.com",
    description: "Temporal mastery & legacy engineering",
    category: "dimension",
  },
  {
    id: "dimensyx",
    name: "Dimensyx™",
    tag: "Space",
    color: "#06b6d4",
    href: "https://dimensyx.pcmdk369.com",
    description: "Spatial intelligence & environmental design",
    category: "dimension",
  },
  {
    id: "eneraxis",
    name: "Eneraxis™",
    tag: "Energy",
    color: "#f59e0b",
    href: "https://eneraxis.pcmdk369.com",
    description: "Energy optimization & vitality engineering",
    category: "dimension",
  },
  {
    id: "serenyx",
    name: "Serenyx™",
    tag: "Mind",
    color: "#10b981",
    href: "https://serenyx.pcmdk369.com",
    description: "Consciousness architecture & mental sovereignty",
    category: "dimension",
  },
  {
    id: "academy",
    name: "Academy",
    tag: "Education",
    color: "#c9a84c",
    href: "https://academy.pcmdk369.com",
    description: "Integrated intelligence education platform",
    category: "platform",
  },
  {
    id: "blog",
    name: "Blog",
    tag: "Insights",
    color: "#c9a84c",
    href: "https://blog.pcmdk369.com",
    description: "Deep intelligence dispatches & system thinking",
    category: "platform",
  },
  {
    id: "career",
    name: "Career",
    tag: "Talent",
    color: "#c9a84c",
    href: "https://career.pcmdk369.com",
    description: "Join the architecture. Build the future.",
    category: "platform",
  },
  {
    id: "gbc",
    name: "GBC",
    tag: "Community",
    color: "#c9a84c",
    href: "https://gbc.pcmdk369.com",
    description: "Global Builder Community — the inner circle",
    category: "platform",
  },
  {
    id: "legal",
    name: "Legal",
    tag: "Governance",
    color: "#9090c0",
    href: "https://legal.pcmdk369.com",
    description: "Policies, terms, and governance framework",
    category: "platform",
  },
];

export default function EcosystemSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#04040c" }}
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="section-label mb-4">§ 005 — The Full Ecosystem</div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f0f0ff",
                letterSpacing: "-0.02em",
              }}
            >
              The Ecosystem
            </h2>
            <p
              className="text-sm max-w-xs"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#9090c0",
                fontWeight: 300,
              }}
            >
              Ten nodes. One architecture. Every domain of human potential, interconnected.
            </p>
          </div>
          <div className="gold-rule mt-8" />
        </motion.div>

        {/* Tiles grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {tiles.map((tile, i) => (
            <motion.a
              key={tile.id}
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: "easeOut",
              }}
              className="eco-tile group relative flex flex-col p-5 rounded-sm overflow-hidden"
              style={{
                minHeight: "160px",
                textDecoration: "none",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: tile.color }}
              />

              {/* Tag */}
              <div
                className="text-xs tracking-widest uppercase mb-3"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: tile.color,
                  opacity: 0.7,
                }}
              >
                {tile.tag}
              </div>

              {/* Name */}
              <h3
                className="text-lg font-bold mb-2 leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f0f0ff",
                  letterSpacing: "-0.01em",
                }}
              >
                {tile.name}
              </h3>

              {/* Description */}
              <p
                className="text-xs leading-relaxed flex-1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#9090c0",
                  fontWeight: 300,
                }}
              >
                {tile.description}
              </p>

              {/* Arrow */}
              <div
                className="mt-4 flex items-center gap-1.5 text-xs transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:gap-2.5"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: tile.color,
                }}
              >
                <span>Visit</span>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                  <path
                    d="M0 3.5H10M7.5 1L10 3.5L7.5 6"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${tile.color}06 0%, transparent 70%)`,
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="text-center mt-12 text-xs tracking-widest uppercase"
          style={{ fontFamily: "'DM Mono', monospace", color: "#9090c0" }}
        >
          All domains governed by PCMDK369™ — The Integrated Architecture
        </motion.p>
      </div>
    </section>
  );
}
