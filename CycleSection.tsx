/**
 * PCMDK369™ The Cycle Section
 * Animated flow diagram: Novatrix → Aeternyx → Dimensyx → Eneraxis → Serenyx → SIC → back
 * Each node uses brand color, arrows animated on scroll entry
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const nodes = [
  { id: "novatrix", name: "Novatrix™", tag: "Economy", color: "#4a7fff", angle: 270 },
  { id: "aeternyx", name: "Aeternyx™", tag: "Time", color: "#8b5cf6", angle: 342 },
  { id: "dimensyx", name: "Dimensyx™", tag: "Space", color: "#06b6d4", angle: 54 },
  { id: "eneraxis", name: "Eneraxis™", tag: "Energy", color: "#f59e0b", angle: 126 },
  { id: "serenyx", name: "Serenyx™", tag: "Mind", color: "#10b981", angle: 198 },
];

function polarToXY(angle: number, radius: number, cx: number, cy: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

export default function CycleSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  const cx = 300;
  const cy = 300;
  const outerR = 200;
  const nodeR = 44;

  // Build arc paths between consecutive nodes
  const arcs: Array<{ d: string; color: string; midColor: string }> = [];
  for (let i = 0; i < nodes.length; i++) {
    const from = nodes[i];
    const to = nodes[(i + 1) % nodes.length];
    const fromPos = polarToXY(from.angle, outerR, cx, cy);
    const toPos = polarToXY(to.angle, outerR, cx, cy);

    // Control point: slightly outward
    const midAngle = (from.angle + to.angle) / 2;
    const ctrl = polarToXY(midAngle, outerR * 1.25, cx, cy);

    arcs.push({
      d: `M ${fromPos.x} ${fromPos.y} Q ${ctrl.x} ${ctrl.y} ${toPos.x} ${toPos.y}`,
      color: from.color,
      midColor: to.color,
    });
  }

  // SIC center connections
  const sicLines: Array<{ d: string; color: string }> = nodes.map((node) => {
    const pos = polarToXY(node.angle, outerR, cx, cy);
    return {
      d: `M ${cx} ${cy} L ${pos.x} ${pos.y}`,
      color: node.color,
    };
  });

  return (
    <section
      id="cycle"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#04040c" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-[#c9a84c] opacity-40" />
            § 004 — The Integrated Cycle
            <span className="w-8 h-px bg-[#c9a84c] opacity-40" />
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
            }}
          >
            The Cycle
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#9090c0",
              fontWeight: 300,
            }}
          >
            Each dimension feeds the next. SIC™ orchestrates the whole. The cycle never stops.
          </p>
        </motion.div>

        {/* SVG Diagram */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[600px] hidden sm:block">
            <svg
              viewBox="0 0 600 600"
              className="w-full h-auto"
              style={{ overflow: "visible" }}
            >
              <defs>
                {nodes.map((node) => (
                  <radialGradient
                    key={`grad-${node.id}`}
                    id={`grad-${node.id}`}
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop offset="0%" stopColor={node.color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={node.color} stopOpacity="0" />
                  </radialGradient>
                ))}
                <radialGradient id="grad-sic" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
                </radialGradient>
                {/* Arrow markers */}
                {nodes.map((node) => (
                  <marker
                    key={`arrow-${node.id}`}
                    id={`arrow-${node.id}`}
                    markerWidth="8"
                    markerHeight="8"
                    refX="6"
                    refY="3"
                    orient="auto"
                  >
                    <path d="M0,0 L0,6 L8,3 z" fill={node.color} opacity="0.7" />
                  </marker>
                ))}
              </defs>

              {/* SIC center glow */}
              <circle cx={cx} cy={cy} r={70} fill="url(#grad-sic)" />

              {/* Spoke lines from SIC to nodes */}
              {sicLines.map((line, i) => (
                <motion.path
                  key={`sic-line-${i}`}
                  d={line.d}
                  stroke={line.color}
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                  fill="none"
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                />
              ))}

              {/* Outer ring */}
              <motion.circle
                cx={cx}
                cy={cy}
                r={outerR}
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 8"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* Arc paths between nodes */}
              {arcs.map((arc, i) => (
                <motion.path
                  key={`arc-${i}`}
                  d={arc.d}
                  stroke={arc.color}
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                  fill="none"
                  markerEnd={`url(#arrow-${nodes[i].id})`}
                  strokeDasharray="1000"
                  initial={{ strokeDashoffset: 1000, opacity: 0 }}
                  animate={isInView ? { strokeDashoffset: 0, opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.6 + i * 0.2, ease: "easeOut" }}
                />
              ))}

              {/* Node circles */}
              {nodes.map((node, i) => {
                const pos = polarToXY(node.angle, outerR, cx, cy);
                return (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: "easeOut" }}
                    style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                  >
                    {/* Glow */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={nodeR + 20}
                      fill={`url(#grad-${node.id})`}
                    />
                    {/* Outer ring */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={nodeR}
                      fill="rgba(4,4,12,0.9)"
                      stroke={node.color}
                      strokeWidth="1.5"
                      strokeOpacity="0.7"
                    />
                    {/* Inner fill */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={nodeR - 8}
                      fill={`${node.color}12`}
                    />
                    {/* Brand name */}
                    <text
                      x={pos.x}
                      y={pos.y - 6}
                      textAnchor="middle"
                      fill={node.color}
                      fontSize="9"
                      fontFamily="'Playfair Display', serif"
                      fontWeight="700"
                    >
                      {node.name.replace("™", "")}
                    </text>
                    <text
                      x={pos.x}
                      y={pos.y + 8}
                      textAnchor="middle"
                      fill={node.color}
                      fontSize="6.5"
                      fontFamily="'DM Mono', monospace"
                      opacity="0.7"
                    >
                      {node.tag}
                    </text>
                  </motion.g>
                );
              })}

              {/* SIC center node */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                <circle
                  cx={cx}
                  cy={cy}
                  r={52}
                  fill="rgba(4,4,12,0.95)"
                  stroke="#c9a84c"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r={44}
                  fill="rgba(201,168,76,0.06)"
                  stroke="#c9a84c"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                  strokeDasharray="3 5"
                />
                <text
                  x={cx}
                  y={cy - 8}
                  textAnchor="middle"
                  fill="#c9a84c"
                  fontSize="16"
                  fontFamily="'Playfair Display', serif"
                  fontWeight="700"
                >
                  SIC™
                </text>
                <text
                  x={cx}
                  y={cy + 10}
                  textAnchor="middle"
                  fill="#c9a84c"
                  fontSize="6"
                  fontFamily="'DM Mono', monospace"
                  opacity="0.7"
                >
                  SUPER INTELLIGENT
                </text>
                <text
                  x={cx}
                  y={cy + 20}
                  textAnchor="middle"
                  fill="#c9a84c"
                  fontSize="6"
                  fontFamily="'DM Mono', monospace"
                  opacity="0.7"
                >
                  CORE
                </text>
              </motion.g>
            </svg>

            {/* Legend below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.8, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              {nodes.map((node) => (
                <div key={node.id} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: node.color }}
                  />
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'DM Mono', monospace", color: "#9090c0" }}
                  >
                    {node.name}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#c9a84c" }}
                />
                <span
                  className="text-xs"
                  style={{ fontFamily: "'DM Mono', monospace", color: "#9090c0" }}
                >
                  SIC™
                </span>
              </div>
            </motion.div>
          </div>

          {/* Mobile fallback: linear flow list */}
          <div className="sm:hidden w-full">
            <div className="flex flex-col items-center gap-0">
              {[...nodes, { id: 'sic', name: 'SIC™', tag: 'Intelligence', color: '#c9a84c', angle: 0 }].map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="flex items-center gap-4 px-6 py-4 rounded-sm w-full max-w-xs"
                    style={{
                      background: `${node.color}08`,
                      border: `1px solid ${node.color}25`,
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: node.color }}
                    />
                    <div>
                      <div
                        className="text-sm font-bold"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#f0f0ff' }}
                      >
                        {node.name}
                      </div>
                      <div
                        className="text-xs tracking-widest uppercase"
                        style={{ fontFamily: "'DM Mono', monospace", color: node.color, opacity: 0.7 }}
                      >
                        {node.tag}
                      </div>
                    </div>
                  </div>
                  {i < 5 && (
                    <div className="w-px h-6" style={{ background: `${node.color}30` }} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
