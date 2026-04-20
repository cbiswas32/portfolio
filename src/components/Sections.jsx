import { SKILLS, EXPERIENCE, PROJECTS, CERTIFICATIONS } from "../data";
import { IconFolder, IconExternal } from "./Icons";

// Shared tag pill used in both experience cards and project cards.
// Small and focused - one job, done well.
function TagList({ tags }) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

// ---- About ---------------------------------------------------------------

export function AboutSection() {
  return (
    <section id="about" className="section">
      <p className="section-label">About</p>

 <div className="about-text reveal">
  <p>
    I’m a Software Engineer at <strong>Bandhan-Konnagar</strong> with 4+ years
    of experience building scalable, frontend-focused full-stack applications
    using <strong>React.js, TypeScript, and Node.js</strong>. I focus on creating
    high-performance, user-centric systems with clean and maintainable architecture.
  </p>

  <p>
    I work extensively on <strong>ETL pipelines</strong> and modern data engineering
    systems, building scalable workflows using <strong>Apache Spark, Airflow,
    Iceberg, and StarRocks</strong>. Currently, I’m developing an{" "}
    <strong>AI-powered ETL platform</strong> with visual orchestration to simplify
    complex data workflows and improve reliability.
  </p>

  <p>
    I’ve built <strong>AI chatbots using NLP</strong> (IBM Watson) and contributed
    to large-scale platforms like <strong>THP in collaboration with NABARD</strong>,
    where I developed responsive UIs, scalable APIs, and systems handling high
    volumes of real-world data. I also focus on code quality, system monitoring,
    and production-ready deployments using tools like Docker and Kubernetes.
  </p>

  <p>
    Outside of work, I enjoy <strong>photography</strong> and{" "}
    <strong>bike riding</strong>, and I regularly explore system design and
    emerging AI technologies.
  </p>
</div>

      <div className="skills-grid reveal">
        {SKILLS.map((skill) => (
          <span key={skill} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

// ---- Experience ----------------------------------------------------------

function ExperienceCard({ period, role, company, desc, tags }) {
  return (
    <div className="exp-card reveal">
      <div className="exp-date">{period}</div>
      <div className="exp-body">
        <h3>{role}</h3>
        <p className="exp-company">{company}</p>
        <p className="exp-desc">{desc}</p>
        <TagList tags={tags} />
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <p className="section-label">Experience</p>
      {EXPERIENCE.map((job, index) => (
        // using index as key is fine here since the list is static and never reordered
        <ExperienceCard key={index} {...job} />
      ))}
    </section>
  );
}

// ---- Projects ------------------------------------------------------------

function ProjectCard({ title, desc, tags, link }) {
  return (
    <div className="proj-card reveal">
      <div className="proj-header">
        <IconFolder />
        {link && (
          <a
            href={link}
            className="proj-icon"
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${title}`}
          >
            <IconExternal />
          </a>
        )}
      </div>
      <p className="proj-title">{title}</p>
      <p className="proj-desc">{desc}</p>
      <TagList tags={tags} />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <p className="section-label">Projects</p>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}

// ---- Certifications ------------------------------------------------------

function CertItem({ item }) {
  return (
    <div className="cert-item reveal">
      <div className="cert-left">
        <div className={`cert-dot ${item.type === "Degree" ? "degree" : "cert"}`} />
      </div>

      <div className="cert-content">
        {/* Title */}
        <p className="cert-title">{item.title}</p>

        {/* Institute / Issuer */}
        <p className="cert-sub">{item.issuer}</p>

        {/* Meta Info */}
        <div className="cert-meta">
          {item.timeline && <span>{item.timeline}</span>}
          {item.date && <span>{item.date}</span>}
          {item.score && <span>{item.score}</span>}
        </div>

        {/* Link */}
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            View →
          </a>
        )}
      </div>
    </div>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <p className="section-label">Education & Certifications</p>
      {CERTIFICATIONS.map((cert, index) => (
        <CertItem key={index} item={cert} />
      ))}
    </section>
  );
}

// ---- Footer --------------------------------------------------------------

export function Footer() {
  return (
    <footer className="footer reveal">
      <p>
        Designed &amp; built by{" "}
        <strong style={{ color: "var(--accent)" }}>Chinmoy Biswas</strong>.
      </p>
      <p style={{ marginTop: 4 }}>
        Inspired by{" "}
        <a href="https://brittanychiang.com" target="_blank" rel="noreferrer">
          Brittany Chiang
        </a>
        &nbsp;&middot;&nbsp;
        <a href="mailto:yourchinmoy@gmail.com">yourchinmoy@gmail.com</a>
        &nbsp;&middot;&nbsp;
        <a href="https://chinmoy.net.in" target="_blank" rel="noreferrer">
          chinmoy.online
        </a>
      </p>
    </footer>
  );
}
