import { useEffect } from "react";

import { injectGlobalStyles } from "../styles/global";
import { useCursorGlow, useActiveSection, useScrollReveal } from "../hooks";
import Sidebar from "./Sidebar";
import {
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  CertificationsSection,
  Footer,
} from "./Sections";

// Inject styles once when the module is first loaded rather than inside
// a useEffect, so there's no flash of unstyled content on first render.
injectGlobalStyles();

// Portfolio is intentionally kept thin. It owns the cross-cutting concerns
// (cursor glow, active section tracking, scroll reveal) and delegates all
// visual rendering to Sidebar and the section components.
export default function Portfolio() {
  const mouse = useCursorGlow();
  const activeSection = useActiveSection();
  useScrollReveal();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Ambient light that follows the cursor - purely decorative */}
      <div
        className="cursor-glow"
        style={{ left: mouse.x, top: mouse.y }}
        aria-hidden="true"
      />

      <div className="portfolio">
        <Sidebar activeSection={activeSection} onNavClick={scrollToSection} />

        <main className="right">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
