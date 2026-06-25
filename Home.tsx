/**
 * PCMDK369™ — Home Page
 * Void Codex design system
 * Sections: Hero → What Is → 5 Systems → Intelligence → Cycle → Ecosystem → Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import SystemsSection from "@/components/sections/SystemsSection";
import IntelligenceSection from "@/components/sections/IntelligenceSection";
import CycleSection from "@/components/sections/CycleSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#04040c", color: "#f0f0ff" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <SystemsSection />
        <IntelligenceSection />
        <CycleSection />
        <EcosystemSection />
        <ManifestoSection />
      </main>
      <Footer />
    </div>
  );
}
