export const siteConfig = {
  name: "Eymen Karatas",
  title: "Eymen Karatas | Front-End & Full-Stack Engineer",
  description:
    "Front-End Developer and Full-Stack Engineer specializing in enterprise web and mobile applications, UI engineering, and scalable client-side architecture.",
  url: "https://eymenkaratas.dev",
  email: "eymen.karatas3347@gmail.com",
  location: "Istanbul, Turkey",
  linkedin: "https://www.linkedin.com/in/eymen-karatas-6352b0436",
  github: "https://github.com/eymenkaratas",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "2.5+", label: "Years at OBSS", suffix: "" },
  { value: "15", label: "Core Technologies", suffix: "+" },
  { value: "1", label: "Enterprise Mobile App", suffix: "" },
  { value: "CMMI", label: "Lead Appraiser", suffix: "" },
];

export const aboutParagraphs = [
  "I am a Front-End Developer and Full-Stack Engineer with professional experience designing and developing enterprise-level web and mobile applications. I specialize in client-side architecture, user interface engineering, API integration, and application performance optimization.",
  "At OBSS — one of Turkey's leading software technology companies — I contributed to OBizz, a recognized mobile application, focusing on front-end implementation, client-side development, and user experience improvements. I transform business requirements and UI/UX concepts into reliable production applications while maintaining clean, maintainable code.",
  "Beyond development, I am certified as a CMMI-DEV High Maturity Lead Appraiser, combining hands-on engineering expertise with deep knowledge of software process improvement and quality standards.",
];

export const experiences = [
  {
    id: "obss",
    company: "OBSS",
    role: "Front-End Developer",
    location: "Istanbul, Turkey",
    period: "June 2021 — November 2023",
    description:
      "Worked in professional software development teams delivering enterprise solutions and mobile applications for one of Turkey's most respected technology companies.",
    highlights: [
      "Developed and maintained mobile application interfaces and client-side functionality for production-grade enterprise software.",
      "Built reusable UI component libraries and structured frontend solutions for long-term maintainability across teams.",
      "Converted product requirements and design specifications into functional, tested features within Agile sprints.",
      "Integrated frontend functionality with REST APIs and backend application services with robust error handling.",
      "Improved application stability, responsiveness, and overall user experience through performance profiling.",
      "Participated in debugging, testing, code reviews, and production issue resolution across cross-functional teams.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "REST APIs",
      "Agile/Scrum",
    ],
  },
];

export const projects = [
  {
    id: "obizz",
    title: "OBizz Mobile Application",
    company: "OBSS",
    category: "Enterprise Mobile",
    description:
      "A recognized mobile application developed at OBSS, serving enterprise clients with intuitive interfaces and reliable client-side architecture. I led front-end implementation across core user-facing modules.",
    highlights: [
      "Architected reusable component systems for consistent UI across multiple application modules.",
      "Implemented responsive mobile layouts optimized for diverse device form factors and OS versions.",
      "Integrated complex API workflows with optimistic UI updates and graceful error recovery.",
      "Collaborated with designers to translate Figma specifications into pixel-perfect implementations.",
      "Drove performance improvements reducing load times and improving scroll responsiveness.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "Redux",
      "Jest",
      "Figma",
    ],
    featured: true,
  },
  {
    id: "component-library",
    title: "Enterprise UI Component Library",
    company: "OBSS",
    category: "Design System",
    description:
      "An internal component library built to standardize UI patterns across OBSS mobile projects, accelerating development velocity and ensuring visual consistency.",
    highlights: [
      "Designed atomic component architecture with composable, theme-aware building blocks.",
      "Documented usage patterns and accessibility guidelines for team-wide adoption.",
      "Reduced duplicate UI code across projects by centralizing shared interface elements.",
    ],
    technologies: ["React Native", "TypeScript", "Storybook", "Design Tokens"],
    featured: false,
  },
  {
    id: "api-integration",
    title: "Client-Server Integration Layer",
    company: "OBSS",
    category: "Architecture",
    description:
      "A structured client-side data layer connecting mobile frontends with backend services, featuring caching strategies, request deduplication, and offline-aware state management.",
    highlights: [
      "Built typed API client wrappers with centralized error handling and retry logic.",
      "Implemented caching layers to minimize network requests and improve perceived performance.",
      "Established patterns for authentication token management and secure data flow.",
    ],
    technologies: ["TypeScript", "REST", "Async Storage", "OAuth"],
    featured: false,
  },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: "code",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Component Architecture",
    ],
    span: "large" as const,
  },
  {
    title: "Mobile Development",
    icon: "smartphone",
    skills: [
      "React Native",
      "Mobile UI Engineering",
      "Cross-Platform Development",
      "Performance Optimization",
    ],
    span: "medium" as const,
  },
  {
    title: "Software Engineering",
    icon: "layers",
    skills: [
      "OOP",
      "Design Patterns",
      "Clean Code",
      "Git",
      "Agile/Scrum",
      "Code Review",
      "Testing",
    ],
    span: "medium" as const,
  },
  {
    title: "Integration & Architecture",
    icon: "network",
    skills: [
      "REST APIs",
      "Client-Server Architecture",
      "Database Fundamentals",
      "SDLC",
    ],
    span: "small" as const,
  },
  {
    title: "Quality & Process",
    icon: "shield",
    skills: [
      "CMMI-DEV V2.0",
      "Process Improvement",
      "Quality Management",
      "Continuous Improvement",
    ],
    span: "small" as const,
  },
  {
    title: "Tools & Workflow",
    icon: "wrench",
    skills: ["VS Code", "Figma", "Jira", "Confluence", "Postman", "Chrome DevTools"],
    span: "small" as const,
  },
];

export const education = {
  institution: "Istanbul Technical University (ITU)",
  degree: "Bachelor's Degree in Computer Engineering",
  location: "Istanbul, Turkey",
  period: "September 2014 — June 2018",
  description:
    "Built a strong foundation in computer science and software engineering through rigorous coursework and collaborative academic projects.",
  coursework: [
    "Software Engineering",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
    "Web Technologies",
    "Mobile Application Development",
  ],
};

export const certifications = [
  {
    title: "CMMI-DEV High Maturity Lead Appraiser",
    issuer: "CMMI Institute / TÜBİTAK BİLGEM YTE",
    period: "July 2025 — July 2028",
    id: "Appraisal ID: 51274",
    areas: [
      "CMMI-DEV V2.0 Framework",
      "High Maturity Software Process Assessment",
      "Software Process Improvement",
      "Quality Management Systems",
      "Continuous Improvement Practices",
      "Engineering Process Optimization",
    ],
  },
];

export const journeyMilestones = [
  {
    year: "2014",
    title: "Started at ITU",
    description:
      "Began Computer Engineering at Istanbul Technical University, one of Turkey's most prestigious technical universities.",
    image: "/images/college-focus.png",
    imageAlt: "Eymen studying at Istanbul Technical University",
  },
  {
    year: "2018",
    title: "Graduated from ITU",
    description:
      "Completed Bachelor's in Computer Engineering with a solid foundation in algorithms, systems, and software design.",
    image: "/images/college-collaboration.png",
    imageAlt: "Eymen collaborating with peers at university library",
  },
  {
    year: "2021",
    title: "Joined OBSS",
    description:
      "Started as Front-End Developer at OBSS, one of Turkey's leading software companies, contributing to enterprise mobile applications alongside a talented engineering community.",
    image: "/images/obss-community.png",
    imageAlt: "Eymen Karatas with colleagues at the OBSS office",
  },
  {
    year: "2023",
    title: "OBizz & Enterprise Delivery",
    description:
      "Delivered key front-end modules for OBizz mobile application, improving UX and application stability across production releases.",
    image: "/images/obizz-mobile.png",
    imageAlt: "OBizz mobile application — ING Business interface showcase",
    imageFit: "cover" as const,
    imageVariant: "showcase" as const,
  },
  {
    year: "2025",
    title: "CMMI Lead Appraiser",
    description:
      "Certified as CMMI-DEV High Maturity Lead Appraiser, bridging engineering excellence with process quality standards.",
    image: "/images/cmmi-certificate.png",
    imageAlt: "CMMI-DEV High Maturity Lead Appraiser certificate",
    imageFit: "contain" as const,
  },
];

export const languages = [
  { name: "Turkish", level: "Native", percentage: 100 },
  { name: "English", level: "Professional Working Proficiency", percentage: 85 },
];
