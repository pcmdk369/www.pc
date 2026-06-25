/**
 * PCMDK369™ Governing Intelligence Section
 * Full-width dark panel, SIC™ gold typographic treatment
 * 3-column stat blocks: 5 Dimensions / 1 Architecture / ∞ Potential
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "5",
    label: "Dimensions",
    description: "Economy · Time · Space · Energy · Mind",
  },
  {
    value: "1",
    label: "Architecture",
    description: "One governing intelligence. Zero fragmentation.",
  },
  {
    value: "∞",
    label: "Potential",
    description: "Compounding returns across all five domains simultaneously.",
  },
];

export default function IntelligenceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section
      id="intelligence"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663787648478/kGzhAj6FKx4VwbxkwUjio3/pcmdk369-sic-panel-UQ8fcqGe8Fupz2ib6xRWke.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #04040c 0%, rgba(4,4,12,0.6) 40%, rgba(4,4,12,0.6) 60%, #04040c 100%)",
        }}
      />
      {/* Side gradients */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, #04040c 0%, transparent 20%, transparent 80%, #04040c 100%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="section-label inline-flex items-center gap-3">
            <span className="w-12 h-px bg-[#c9a84c] opacity-40" />
            § 003 — The Governing Intelligence
            <span className="w-12 h-px bg-[#c9a84c] opacity-40" />
          </div>
        </motion.div>

        {/* SIC™ typographic treatment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <div
            className="inline-block relative"
          >
            {/* Large background text */}
            <div
              className="text-[120px] sm:text-[160px] lg:text-[200px] font-bold leading-none select-none pointer-events-none absolute inset-0 flex items-center justify-center"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "rgba(201,168,76,0.04)",
                letterSpacing: "-0.05em",
              }}
            >
              SIC
            </div>

            {/* Foreground SIC™ */}
            <h2
              className="relative text-7xl sm:text-8xl lg:text-9xl font-bold text-gradient-gold leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "-0.04em",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
            >
              SIC™
            </h2>
          </div>
        </motion.div>

        {/* Full name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace", color: "#c9a84c" }}
          >
            Super Intelligent Core
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="text-center text-lg sm:text-xl max-w-2xl mx-auto mb-20"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#9090c0",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          The mind of the system. The intelligence that sees all five dimensions{" "}
          <span style={{ color: "#f0f0ff" }}>simultaneously</span> — synthesizing, optimizing, and
          amplifying across every domain of human potential.
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="gold-rule mb-16"
          style={{ transformOrigin: "center" }}
        />

        {/* Stat blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: "easeOut" }}
              className={`text-center px-8 ${
                i > 0 ? "sm:border-l sm:border-[rgba(201,168,76,0.15)]" : ""
              }`}
            >
              <div
                className="text-6xl sm:text-7xl font-bold mb-3 text-gradient-gold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "'DM Mono', monospace", color: "#c9a84c" }}
              >
                {stat.label}
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#9090c0",
                  fontWeight: 300,
                }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="gold-rule mt-16"
          style={{ transformOrigin: "center" }}
        />
      </div>
    </section>
  );
}
