import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data";

// Tracks mouse position for the ambient cursor glow effect.
// Returns normalized {x, y} coordinates in pixels.
export function useCursorGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return mouse;
}

// Observes sections as they scroll into view and returns the
// id of whichever one is currently "active" in the viewport.
// The rootMargin is tuned so the nav highlights before a section
// fully enters - feels more responsive to the user.
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    NAV_ITEMS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

// Wires up IntersectionObserver for any element with class "reveal".
// When the element enters the viewport it gets a "visible" class
// which triggers the CSS fade-in transition defined in global styles.
export function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // unobserve after reveal so we don't do unnecessary work
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
