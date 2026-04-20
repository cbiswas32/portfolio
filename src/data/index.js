// All static content lives here. If the portfolio owner wants to update
// anything - a job, a project, a cert - this is the only file they touch.
// No hunting through components.

export const NAV_ITEMS = ["about", "experience", "projects", "certifications"];

export const SKILLS = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Next.js",
  "Apache Spark",
  "Apache Airflow",
  "Apache Iceberg",
  "Snowflake",
  "StarRocks",
  "React Flow",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Kubernetes",
  "OpenAI / LLaMA",
  "Socket.io",
  "Zustand",
  "TanStack Query",
  "Zod",
  "REST APIs",
  "Microservices",
  "ETL Pipelines",
  "SonarQube",
  "IBM Watson",
];

export const EXPERIENCE = [
  {
    period: "Apr 2024 - Present",
    role: "Software Engineer",
    company: "Bandhan-Konnagar",
    desc: "Building an AI-powered ETL platform with React Flow-based visual orchestration. Working extensively on large-scale data pipelines with Apache Spark, Airflow, Iceberg, and StarRocks. Contributing to the THP Application (NABARD, Govt. of India) — high-performance React UIs, Node.js microservices, dynamic validation-driven forms, admin dashboards, and an auditing/monitoring module from scratch. Containerised with Docker & Kubernetes.",
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Apache Spark",
      "Apache Airflow",
      "Apache Iceberg",
      "StarRocks",
      "Docker",
      "Kubernetes",
      "SonarQube",
    ],
  },
  {
    period: "Jul 2022 - Apr 2024",
    role: "Associate Technical Consultant",
    company: "Streebo",
    desc: "Shipped enterprise-grade full-stack apps using React.js and Node.js across IBM WebSphere Portal, Streebo DXA, and IBM WCM. Built real-time AI chatbots (IBM Watson), live chat with Socket.io, cross-platform mobile apps (Ionic Angular), and integrated Google Maps, OAuth, and payment gateways. Managed schema migrations on MySQL and IBM Db2 with zero-downtime deployments.",
    tags: [
      "React.js",
      "Node.js",
      "IBM Watson",
      "Socket.io",
      "Ionic Angular",
      "MySQL",
      "IBM Db2",
      "OAuth",
    ],
  },
  {
    period: "May - Jun 2022",
    role: "Web Development Intern",
    company: "Hawkdive.com",
    desc: "Collaborated with UX/UI teams to improve conversion rates. Developed Machine Vision and AI-driven solutions using Python. Supported Angular frontends.",
    tags: ["Angular", "Python", "Machine Vision"],
  },
];

export const PROJECTS = [
  {
    title: "Electro FRN ERP System",
    desc: "End-to-end ERP platform for manufacturing, inventory, procurement, and user management. Features role-based access, multi-location support, and a modern React + Node.js architecture.",
    tags: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Material UI"],
    link: "https://erpsfrontend.onrender.com/",
  },
  {
    title: "AI-Powered No-Code ETL Platform",
    desc: "Visual drag-and-drop ETL orchestration tool built with React Flow. Supports Apache Spark execution, real-time pipeline monitoring via WebSockets, and scalable data transformation workflows.",
    tags: [
      "React Flow",
      "TypeScript",
      "Apache Spark",
      "WebSocket",
      "TanStack Query",
    ],
    link: "https://ncetl-frontend.onrender.com/",
  },
  {
    title: "Oman Post AI Chatbot",
    desc: "Multi-language AI chatbot integrated into Oman Post’s platform, enabling intelligent customer interactions using NLP and enterprise-grade conversational flows.",
    tags: ["AI Chatbot", "NLP", "IBM Watson", "Node.js", "REST APIs"],
    link: "https://www.omanpost.om/",
  },
  {
    title: "Xerox Vendor Management App",
    desc: "Enterprise vendor management solution for Xerox, enabling streamlined onboarding, data handling, and workflow automation with secure and scalable architecture.",
    tags: ["React.js", "Node.js", "Enterprise App", "APIs", "Scalable Systems"],
    link: "https://www.xerox.com/",
  },
];

export const CERTIFICATIONS = [
  {
    type: "Degree",
    title: "B.Tech in Computer Science Engineering",
    issuer: "Siliguri Institute of Technology (MAKAUT)",
    timeline: "2019 - 2023",
    score: "CGPA: 9.6/10",
    link: "https://www.sittechno.org/",
  },
  {
    type: "Certification",
    title: "Using Databases with Python",
    issuer: "University of Michigan (Coursera)",
    date: "Dec 2022",
    credentialId: "6BP8ZPHEUTMU",
    link: "https://www.coursera.org/account/accomplishments/verify/6BP8ZPHEUTMU",
  },
  {
    type: "Certification",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    date: "Dec 2022",
    credentialId: "JG5N8VQ8G5E4",
    link: "https://www.coursera.org/account/accomplishments/certificate/JG5N8VQ8G5E4",
  },
  {
    type: "Certification",
    title: "Python Data Analysis",
    issuer: "Coursera",
    date: "Apr 2021",
    credentialId: "YTPG8KXKG2QH",
    link: "https://www.coursera.org/account/accomplishments/certificate/YTPG8KXKG2QH",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chinmoybiswas-81ab81212",
    type: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/cbiswas32",
    type: "github",
  },
  {
    label: "Email",
    href: "mailto:yourchinmoy@gmail.com",
    type: "mail",
  },
  {
    label: "Phone",
    href: "tel:+919064037784",
    type: "phone",
  },
  {
    label: "Resume",
    href: "https://www.linkedin.com/in/chinmoybiswas-81ab81212",
    type: "resume",
  },
];
