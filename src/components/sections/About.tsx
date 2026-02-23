import Image from "next/image";
import React from "react";
import AboutCard from "../ui/AboutCard";
import { CardProps } from "@/types/aboutCard";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";

const cardItems: CardProps[] = [
  {
    icon: FaCode,
    title: "Clean Code",
    paragraph: "Writing maintainable, scalable, and readable codebases.",
  },
  {
    icon: FaRocket,
    title: "Fast Performance",
    paragraph: "Optimizing apps for lightning-fast load times and SEO.",
  },
  {
    icon: FaLightbulb,
    title: "Creative Solutions",
    paragraph: "Turning complex problems into simple, intuitive designs.",
  },
  {
    icon: FcCollaboration,
    title: "Collaboration",
    paragraph: "Working effectively with teams to deliver exceptional results.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-secondary py-24 px-4"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* --Section Header-- */}
        <div className="text-center mb-16">
          <h6 className="font-mono text-primary text-base mb-2">About Me</h6>
          <h2
            id="about-heading"
            className="text-3xl md:text-[36px] font-bold text-slate-900"
          >
            Crafting Digital Experiences
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-[20px] mt-5 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with almost 2 years of
            experience building web applications that make a difference.
          </p>
        </div>

        {/* --Main Content: Image Left + Text Right-- */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* --Left: Profile Image Card-- */}
          <div className="w-full md:w-2/5 shrink-0">
            <div className="relative  flex flex-col items-center gap-6">
              {/* Profile image */}
              <div className="relative w-64 h-72 md:w-112.5 md:h-125 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/profile-image.jpeg"
                  alt="Mayukh Deb Goswami — Full Stack Developer"
                  fill
                  className="object-cover object-top transition-all duration-500 hover:brightness-80 hover:contrast-110"
                  sizes="(max-width: 768px) 224px, 256px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* --Right: Text Content-- */}
          <div className="w-full md:w-3/5 text-left flex flex-col gap-5">
            <p className="font-sans text-gray-600 text-lg leading-relaxed">
              I started my journey in web development during my university
              years, fascinated by the power to build something from scratch
              that people actually use. Since then I've worked on full-stack
              projects — turning ideas into real, polished products.
            </p>
            <p className="font-sans text-gray-600 text-lg leading-relaxed">
              My stack spans the full spectrum — React and Next.js on the
              frontend, Node.js, Express.js, MongoDb, Strapi etc on the backend,
              and a strong eye for clean, intuitive UI. I care deeply about
              writing maintainable code and shipping experiences that feel good
              to use.
            </p>
            <p className="font-sans text-gray-600 text-lg leading-relaxed">
              When I'm not building, you'll find me exploring new technologies,
              contributing to open-source, or sharing what I've learned with the
              developer community.
            </p>

            {/* --Tags-- */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Strapi CMS",
                "Tailwind CSS",
                "Express.js",
                "MongoDb",
                "PostgreSql",
                "Prisma",
                "Hono",
                "Javascript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-teal-50 text-primary border border-teal-200 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* --Cards Section-- */}
        <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cardItems.map((card, index) => (
            <div key={index}>
              <AboutCard
                icon={card.icon}
                title={card.title}
                paragraph={card.paragraph}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
