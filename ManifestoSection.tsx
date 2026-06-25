/**
 * PCMDK369™ Manifesto / CTA Section
 * Full-width dark panel with gold typographic treatment
 * "The architecture is live. The question is: are you ready?"
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ManifestoSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-40 overflow-hidden"
      style={{ background: "#04040c" }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,127,255,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="section-label mb-8 inline-flex items-center gap-3"
        >
          <span className="w-12 h-px bg-[#c9a84c] opacity-40" />
          The Architecture Awaits
          <span className="w-12 h-px bg-[#c9a84c] opacity-40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#f0f0ff",
            letterSpacing: "-0.03em",
            maxWidth: "900px",
            margin: "0 auto 2rem",
          }}
        >
          The architecture is{" "}
          <em className="text-gradient-gold" style={{ fontStyle: "italic" }}>
            live.
          </em>
          <br />
          The question is: are you{" "}
          <em style={{ fontStyle: "italic" }}>ready?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-base sm:text-lg max-w-xl mx-auto mb-12"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#9090c0",
            fontWeight: 300,
            lineHeight: 1.7, borderRadius: 'px', borderWidth: 'px', fontSize: 'px', height: 'px', marginBottom: 'px', marginLeft: 'px', marginRight: 'px', marginTop: 'px', paddingBottom: 'px', paddingLeft: 'px', paddingRight: 'px', paddingTop: 'px', width: 'px',
          }}
        >
          Five dimensions. One intelligence. Zero compromise. PCMDK369™ is not a destination —
          it is the operating system for those who refuse to fragment their potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:pcmdkofficial@gmail.com"
            className="btn-gold"
          >
            <span>Connect with PCMDK369™</span>
          </a>
          <a
            href="https://linktr.ee/Mr.MurliDhar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-widest uppercase transition-colors"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9090c0",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9090c0")}
          >
            All Links →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
