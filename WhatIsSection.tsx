/**
 * PCMDK369™ What Is Section
 * Two-column editorial layout
 * Left: large serif statement | Right: explanatory paragraph + pull quote
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhatIsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="what-is"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#04040c" }}
    >
      {/* Background texture */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 z-0 opacity-30"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663787648478/kGzhAj6FKx4VwbxkwUjio3/pcmdk369-what-is-TUkVHUgWx9nygAoNdqVMKU.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, #04040c 40%, rgba(4,4,12,0.5) 70%, #04040c 100%)",
        }}
      />

      {/* Top gold rule */}
      <div className="container relative z-10">
        <div className="gold-rule mb-16" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Editorial statement */}
          <motion.div {...fadeUp(0)}>
            <div className="section-label mb-6">§ 001 — Definition</div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f0f0ff",
                letterSpacing: "-0.02em",
              }}
            >
              The intelligence
              <br />
              <em style={{ color: "#c9a84c", fontStyle: "italic" }}>above</em> the system.
              <br />
              The system
              <br />
              <em style={{ fontStyle: "italic" }}>within</em> the intelligence.
            </h2>

            {/* Decorative number */}
            <div
              className="text-8xl font-bold select-none"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "rgba(201,168,76,0.06)",
                lineHeight: 1,
                marginTop: "-1rem",
              }}
            >
              369
            </div>
          </motion.div>

          {/* Right: Explanation */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-8 pt-4 lg:pt-16">
            <p
              className="text-lg leading-relaxed"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#9090c0",
                fontWeight: 300,
              }}
            >
              PCMDK369™ is not a company, a product, or a platform. It is a{" "}
              <span style={{ color: "#f0f0ff", fontWeight: 500 }}>
                master brand architecture
              </span>{" "}
              — an integrating intelligence layer that governs five sovereign dimensions of human
              existence: Economy, Time, Space, Energy, and Mind.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#9090c0",
                fontWeight: 300,
              }}
            >
              Each dimension operates as a distinct, fully-realized brand. Together, they form a
              unified system where every insight, resource, and capability compounds across all
              five domains simultaneously. This is the architecture of{" "}
              <span style={{ color: "#f0f0ff", fontWeight: 500 }}>exponential human potential</span>.
            </p>

            {/* Pull quote */}
            <motion.blockquote
              {...fadeUp(0.4)}
              className="relative pl-6 py-2"
              style={{ borderLeft: "2px solid #c9a84c" }}
            >
              <p
                className="text-xl leading-snug font-medium"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f0f0ff",
                  fontStyle: "italic",
                }}
              >
                "Integrated systems don't just work better — they work{" "}
                <span style={{ color: "#c9a84c" }}>exponentially</span> better."
              </p>
              <footer
                className="mt-3 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'DM Mono', monospace", color: "#9090c0" }}
              >
                — PCMDK369™ Core Principle
              </footer>
            </motion.blockquote>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.5)}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                { num: "5", label: "Dimensions" },
                { num: "10+", label: "Sub-brands" },
                { num: "∞", label: "Potential" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#c9a84c",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'DM Mono', monospace", color: "#9090c0" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="container relative z-10">
        <div className="gold-rule mt-16" />
      </div>
    </section>
  );
}
