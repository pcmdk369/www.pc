/**
 * PCMDK369™ Hero Section
 * Full viewport, ambient radial gradients, grid overlay
 * Headline: "Not a Company. An Architecture."
 */

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const handleEnter = () => {
    const el = document.querySelector("#systems");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#04040c" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663787648478/kGzhAj6FKx4VwbxkwUjio3/pcmdk369-hero-bg-ZRYRMqsHC98oCyTDTAanrp.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }}
      />

      {/* Animated ambient orbs */}
      <div
        className="orb animate-breathe-blue z-0"
        style={{
          width: "600px",
          height: "600px",
          left: "-10%",
          top: "10%",
          background: "radial-gradient(circle, rgba(74,127,255,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb animate-breathe-violet z-0"
        style={{
          width: "500px",
          height: "500px",
          right: "-5%",
          top: "-5%",
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb animate-breathe-cyan z-0"
        style={{
          width: "300px",
          height: "300px",
          left: "40%",
          bottom: "15%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-overlay opacity-60" />

      {/* Gradient vignette */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(4,4,12,0.7) 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-0"
        style={{ height: "200px", background: "linear-gradient(to top, #04040c, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="section-label mb-8 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-[#c9a84c] opacity-60" />
          Master Brand Architecture
          <span className="w-8 h-px bg-[#c9a84c] opacity-60" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#f0f0ff",
            letterSpacing: "-0.03em",
            maxWidth: "1100px",
          }}
        >
          Not a Company.
          <br />
          <em
            className="text-gradient-gold"
            style={{ fontStyle: "italic" }}
          >
            An Architecture.
          </em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="text-base sm:text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#9090c0",
            fontWeight: 300,
          }}
        >
          Five dimensions of human existence.{" "}
          <span style={{ color: "#f0f0ff" }}>One integrated intelligence.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="btn-gold" onClick={handleEnter}>
            <span>Enter the Architecture</span>
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#what-is");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm font-medium tracking-widest uppercase transition-colors"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9090c0",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9090c0")}
          >
            What is PCMDK369?
          </button>
        </motion.div>

        {/* Dimension badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="flex flex-wrap justify-center gap-3 mt-16"
        >
          {[
            { label: "Economy", color: "#4a7fff" },
            { label: "Time", color: "#8b5cf6" },
            { label: "Space", color: "#06b6d4" },
            { label: "Energy", color: "#f59e0b" },
            { label: "Mind", color: "#10b981" },
          ].map((dim, i) => (
            <motion.span
              key={dim.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.08, duration: 0.4, ease: "easeOut" as const }}
              className="px-4 py-1.5 text-xs tracking-widest uppercase rounded-full"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: dim.color,
                border: `1px solid ${dim.color}30`,
                background: `${dim.color}08`,
              }}
            >
              {dim.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "'DM Mono', monospace", color: "#9090c0" }}
        >
          Scroll
        </span>
        <div className="w-px h-12 relative overflow-hidden" style={{ background: "rgba(144,144,192,0.2)" }}>
          <motion.div
            className="absolute top-0 left-0 right-0"
            style={{ height: "40%", background: "linear-gradient(to bottom, transparent, #c9a84c)" }}
            animate={{ y: ["0%", "250%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
