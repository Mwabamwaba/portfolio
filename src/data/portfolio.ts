// ===== Portfolio Data =====

export const personalInfo = {
  name: "Elijah Mwaba",
  title: "Software Developer",
  tagline: "Crafting elegant digital experiences with clean code & creative vision.",
  email: ["elijahchungumwaba@outlook.com", "mwabamwaba52@gmail.com"],
  phone: "+260977851886",
  location: "Waterfalls, Lusaka, Zambia",
  resumeUrl: "#",
  social: {
    github: "https://github.com/Mwabamwaba",
    linkedin: "https://www.linkedin.com/in/elijahmwaba",
    twitter: "https://twitter.com/elijahmwaba",
  },
};

export const aboutText = `I'm a passionate software developer who thrives at the intersection of design and engineering. With a strong foundation in full-stack development, I build performant, accessible, and visually stunning applications that solve real-world problems.

My approach combines clean architecture with intuitive user experiences. I believe great software should not only work flawlessly but also feel delightful to use. Every project is an opportunity to push boundaries and deliver something exceptional.`;

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "other";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", icon: "⚛️", level: 95, category: "frontend" },
  { name: "TypeScript", icon: "🔷", level: 90, category: "frontend" },
  { name: "JavaScript", icon: "⚡", level: 95, category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", level: 92, category: "frontend" },
  { name: "HTML / CSS", icon: "🌐", level: 95, category: "frontend" },
  // Backend
  { name: "Node.js", icon: "🟢", level: 90, category: "backend" },
  { name: "Python", icon: "🐍", level: 85, category: "backend" },
  { name: "PostgreSQL", icon: "🐘", level: 82, category: "backend" },
  { name: "REST APIs", icon: "🔗", level: 92, category: "backend" },
  // Tools
  { name: "Git / GitHub", icon: "🔀", level: 92, category: "tools" },
  { name: "Docker", icon: "🐳", level: 75, category: "tools" },
  { name: "VS Code", icon: "💻", level: 95, category: "tools" },
  { name: "Figma", icon: "🎯", level: 80, category: "tools" },
  { name: "CI/CD", icon: "🔄", level: 76, category: "tools" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  accent: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "CloudSync Dashboard",
    description:
      "A real-time cloud monitoring SaaS dashboard with live metrics, alerts, and team collaboration features.",
    longDescription:
      "Built a full-stack SaaS platform for cloud infrastructure monitoring. Features include real-time WebSocket data streams, interactive charts, role-based access control, and automated alerting with Slack integration.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSocket", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/cloudsync.png",
    accent: "#a78bfa",
    featured: true,
  },
  {
    id: "project-2",
    title: "FinTrack AI",
    description:
      "An intelligent personal finance tracker with ML-powered spending insights and budget predictions.",
    longDescription:
      "Developed an AI-powered finance management app that categorizes transactions, predicts spending patterns, and provides actionable insights using machine learning models.",
    techStack: ["Next.js", "Python", "TensorFlow", "MongoDB", "Stripe", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/fintrack.png",
    accent: "#f8d06b",
    featured: true,
  },
  {
    id: "project-3",
    title: "DevConnect",
    description:
      "A developer networking platform with real-time chat, code sharing, and project collaboration.",
    longDescription:
      "Created a full-stack social platform for developers featuring real-time messaging, markdown-supported posts, GitHub integration, and project matchmaking with skill-based filtering.",
    techStack: ["React", "Node.js", "Socket.io", "Redis", "Docker", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/devconnect.png",
    accent: "#22d3ee",
    featured: true,
  },
  {
    id: "project-4",
    title: "EcoShop Marketplace",
    description:
      "A sustainable e-commerce platform connecting eco-friendly brands with conscious consumers.",
    longDescription:
      "Built a marketplace platform with product sustainability scoring, carbon footprint tracking, vendor management dashboard, and Stripe payment integration.",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Vercel", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/ecoshop.png",
    accent: "#34d399",
    featured: false,
  },
  {
    id: "project-5",
    title: "TaskFlow Pro",
    description:
      "An advanced project management tool with Kanban boards, time tracking, and team analytics.",
    longDescription:
      "Designed and implemented a project management application with drag-and-drop Kanban boards, Gantt charts, automated time tracking, and comprehensive team performance analytics.",
    techStack: ["React", "TypeScript", "Express", "MongoDB", "D3.js", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/projects/taskflow.png",
    accent: "#fb923c",
    featured: false,
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Jr Developer",
    company: "The Zig",
    period: "Oct 2025 — Present",
    description:
      "Architecting and developing comprehensive full-stack enterprise systems. Spearheading both frontend and backend development lifecycles to deliver robust, scalable, and high-performance applications.",
    technologies: ["React", "Node.js", "TypeScript", "Next.js"],
  },
  {
    id: "exp-2",
    role: "Web Developer (Entry Level)",
    company: "Forcom Global Resources",
    period: "Oct 2021 — 2022",
    description:
      "Engineered visually engaging and highly responsive static websites tailored to client specifications. Collaborated cross-functionally with the core software development team to translate intricate design requirements into functional digital experiences.",
    technologies: ["HTML/CSS", "JavaScript", "Tailwind CSS", "React"],
  },
  {
    id: "exp-3",
    role: "Creative Designer",
    company: "Forcom Global Resources",
    period: "Oct 2020 — 2021",
    description:
      "Conceptualized and crafted unique, engaging web designs for diverse client portfolios. Partnered closely with the engineering team to ensure pixel-perfect implementation of UI/UX designs and maintain brand consistency across all platforms.",
    technologies: ["Figma", "UI/UX Design", "Adobe XD", "Web Design"],
  },
  {
    id: "exp-4",
    role: "Data Entry Clerk",
    company: "The Fortune Game",
    period: "Jan 2019 — July 2020",
    description:
      "Managed and streamlined high-volume data entry operations, ensuring rigorous quality control, unparalleled data integrity, and efficient record management within fast-paced environments.",
    technologies: ["Data Management", "Quality Assurance", "Excel"],
  },
  {
    id: "exp-5",
    role: "Photo Editor",
    company: "PhotoArt Studios",
    period: "Sep 2018 — Aug 2019",
    description:
      "Executed professional photo retouching and graphic editing workflows. Maintained a keen eye for visual aesthetics, color grading, and composition to deliver high-quality digital assets for clients.",
    technologies: ["Photoshop", "Lightroom", "Color Grading"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
