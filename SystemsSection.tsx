/**
 * PCMDK369™ The 5 Systems Section
 * Horizontal card grid with glassmorphism
 * Each card: system number, brand name, domain tag, description, accent color border
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const systems = [
  {
    number: "01",
    name: "Novatrix™",
    domain: "Economy",
    subdomain: "novatrix",
    color: "#4a7fff",
    colorDim: "rgba(74,127,255,0.08)",
    description:
      "The economic intelligence engine. Wealth architecture, financial systems, and value creation at civilizational scale.",
    tag: "ECONOMY",
  },
  {
    number: "02",
    name: "Aeternyx™",
    domain: "Time",
    subdomain: "aeternyx",
    color: "#8b5cf6",
    colorDim: "rgba(139,92,246,0.08)",
    description:
      "The temporal mastery system. Chronological intelligence, legacy engineering, and the architecture of lasting impact.",
    tag: "TIME",
  },
  {
    number: "03",
    name: "Dimensyx™",
    domain: "Space",
    subdomain: "dimensyx",
    color: "#06b6d4",
    colorDim: "rgba(6,182,212,0.08)",
    description:
      "The spatial intelligence framework. Physical presence, environmental design, and the geometry of human experience.",
    tag: "SPACE",
  },
  {
    number: "04",
    name: "Eneraxis™",
    domain: "Energy",
    subdomain: "eneraxis",
    color: "#f59e0b",
    colorDim: "rgba(245,158,11,0.08)",
    description:
      "The energy optimization system. Vitality engineering, resource mastery, and the physics of sustained performance.",
    tag: "ENERGY",
  },
  {
    number: "05",
    name: "Serenyx™",
    domain: "Mind",
    subdomain: "serenyx",
    color: "#10b981",
    colorDim: "rgba(16,185,129,0.08)",
    description:
      "The consciousness architecture. Mental sovereignty, cognitive enhancement, and the science of inner mastery.",
    tag: "MIND",
  },
];

export default function SystemsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section
      id="systems"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#04040c" }}
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(74,127,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="section-label mb-4">§ 002 — The Five Dimensions</div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f0f0ff",
                letterSpacing: "-0.02em",
              }}
            >
              The 5 Systems
            </h2>
            <p
              className="text-sm max-w-sm"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#9090c0",
                fontWeight: 300,
              }}
            >
              Five sovereign brands. Five dimensions of existence. One governing intelligence.
            </p>
          </div>
          <div className="gold-rule mt-8" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-3">
          {systems.map((sys, i) => (
            <motion.a
              key={sys.name}
              href={`https://${sys.subdomain}.pcmdk369.com`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="group relative flex flex-col p-6 rounded-sm overflow-hidden cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.025)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderTop: `2px solid ${sys.color}`,
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                minHeight: "280px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = `${sys.color}60`;
                el.style.borderTopColor = sys.color;
                el.style.boxShadow = `0 0 30px ${sys.color}12, 0 8px 32px rgba(0,0,0,0.4)`;
                el.style.transform = "translateY(-4px)";
                el.style.background = sys.colorDim;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.borderTopColor = sys.color;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255,255,255,0.025)";
              }}
            >
              {/* System number */}
              <div
                className="text-xs mb-4 font-medium tracking-widest"
                style={{ fontFamily: "'DM Mono', monospace", color: sys.color }}
              >
                {sys.number}
              </div>

              {/* Brand name */}
              <h3
                className="text-2xl font-bold mb-2 leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f0f0ff",
                  letterSpacing: "-0.01em",
                }}
              >
                {sys.name}
              </h3>

              {/* Domain tag */}
              <div
                className="inline-flex items-center gap-1.5 mb-4 px-2.5 py-1 rounded-full text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: sys.color,
                  background: `${sys.color}12`,
                  border: `1px solid ${sys.color}25`,
                  width: "fit-content",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: sys.color }}
                />
                {sys.tag}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#9090c0",
                  fontWeight: 300, borderRadius: 'px', borderWidth: 'px', fontSize: 'px', height: 'px', marginBottom: 'px', marginLeft: 'px', marginRight: 'px', marginTop: 'px', paddingBottom: 'px', paddingLeft: 'px', paddingRight: 'px', paddingTop: 'px', width: 'px',
                }}
              >
                {sys.description}
              </p>

              {/* Arrow indicator */}
              <div
                className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase transition-all duration-300 group-hover:gap-3"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: sys.color,
                  opacity: 0.7,
                }}
              >
                <span>Explore</span>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path
                    d="M0 4H12M9 1L12 4L9 7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${sys.color}08 0%, transparent 60%)`,
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
