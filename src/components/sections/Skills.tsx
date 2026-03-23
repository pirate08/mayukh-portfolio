import React from "react";
import SkillCard from "../ui/SkillCard";
import { SkillCategory, Stat, ProcessStep } from "@/types/skill";

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    number: "01",
    title: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Hono",
      "REST APIs",
      "Socket.io",
      "Strapi CMS",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Supabase", "Redis"],
  },
  {
    id: 4,
    number: "04",
    title: "DevOps & Tools",
    skills: ["VS Code", "Git", "Postman", "Vercel", "Docker", "Render"],
  },
];

const stats: Stat[] = [
  { value: "12+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Happy Clients" },
  { value: "10+", label: "Technologies" },
];

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding your needs and goals",
  },
  {
    id: 2,
    title: "Planning",
    description: "Creating detailed project roadmap",
  },
  {
    id: 3,
    title: "Development",
    description: "Building with regular updates",
  },
  {
    id: 4,
    title: "Launch",
    description: "Testing, deployment, and support",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-secondary py-24 px-4"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h6 className="font-mono text-primary text-base mb-2">
            What I Work With
          </h6>
          <h2
            id="skills-heading"
            className="text-3xl md:text-[36px] font-bold text-slate-900"
          >
            Skills & Technologies
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-[20px] mt-5 max-w-2xl mx-auto">
            I'm constantly learning and adapting to new technologies. Here's my
            current toolkit that I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
