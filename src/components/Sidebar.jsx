import { SOCIAL_LINKS, NAV_ITEMS } from "../data";
import { SOCIAL_ICON_MAP } from "./Icons";

// The sidebar is purely presentational. It receives activeSection and
// onNavClick as props so the parent controls the scroll behavior.
// This keeps the sidebar testable and free of DOM side-effects.

function NavItem({ id, isActive, onClick }) {
  return (
    <button
      className={`nav-item${isActive ? " active" : ""}`}
      onClick={() => onClick(id)}
    >
      <span className="nav-line" />
      {id}
    </button>
  );
}

function SocialLink({ href, label, type }) {
  const Icon = SOCIAL_ICON_MAP[type];
  if (!Icon) return null;

  // mailto links don't open in a new tab - that would be odd UX
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className="social-link"
      title={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <Icon />
    </a>
  );
}

export default function Sidebar({ activeSection, onNavClick }) {
  return (
    <aside className="left">
      <div className="left-top">
        {/* <p className="greeting">// hello world</p> */}
        <h1>
          Chinmoy Biswas
        </h1>
        <h2>Sr. Full-Stack Developer</h2>
        <p>
          I build scalable, AI-driven products using React.js, TypeScript, Node.js, and modern data engineering.
        </p>

        <nav className="nav">
          {NAV_ITEMS.map((id) => (
            <NavItem
              key={id}
              id={id}
              isActive={activeSection === id}
              onClick={onNavClick}
            />
          ))}
        </nav>
      </div>

      <div className="socials">
        {SOCIAL_LINKS.map((link) => (
          <SocialLink key={link.type} {...link} />
        ))}
      </div>
    </aside>
  );
}
