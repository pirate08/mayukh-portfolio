import { ProjectDetails } from "@/types/project";

export const projectsData: ProjectDetails[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    imageUrl: "/images/E-commerce-logo.png",
    slugUrl: "e-commerce-platform",
    section: "Full Stack",
    year: new Date("2024-01-01"),
    isFeatured: true,
    description:
      "This e-commerce platform was built from the ground up to handle high-traffic retail operations. It features real-time inventory tracking, Stripe payment integration, an admin dashboard with analytics, and a responsive storefront.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/pirate08",
    liveUrl: "#",
    projectHightlights: [
      "Handles 10k+ concurrent users",
      "Real-time inventory sync across warehouses",
      "Stripe payment integration with webhooks",
      "Admin dashboard with sales analytics",
    ],
    screeshots: [
      "/images/E-commerce-logo.png",
      "/images/Portfolio-logo.png",
      "/images/Task-Management-logo.png",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    imageUrl: "/images/Task-Management-logo.png",
    slugUrl: "task-management-app",
    section: "Full Stack",
    year: new Date("2024-03-01"),
    isFeatured: true,
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop boards, and team workspace support.",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    githubUrl: "https://github.com/pirate08",
    liveUrl: "#",
    projectHightlights: [
      "Real-time drag-and-drop boards",
      "Team workspace with role management",
      "WebSocket-powered live updates",
      "Email notifications via webhooks",
    ],
    screeshots: [],
  },
  {
    id: 3,
    title: "Developer Portfolio CMS",
    imageUrl: "/images/Portfolio-logo.png",
    slugUrl: "developer-portfolio-cms",
    section: "Frontend",
    year: new Date("2024-06-01"),
    isFeatured: false,
    description:
      "A headless CMS-powered portfolio system built with Strapi and Next.js. Fully dynamic content management with SEO optimization.",
    tags: ["Next.js", "Strapi", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/pirate08",
    liveUrl: "#",
    projectHightlights: [
      "Headless CMS with Strapi",
      "Static generation with ISR",
      "SEO optimized with dynamic metadata",
      "Fully responsive design",
    ],
    screeshots: [],
  },
];

// --Helper function to fetch project by slug--
export const getProjectBySlug = (slug: string): ProjectDetails | undefined => {
  return projectsData.find((project) => project.slugUrl === slug);
};
