import React from "react";
import { SkillCategory } from "@/types/skill";

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard = ({ category }: SkillCardProps) => {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Number + Title */}
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-sm font-bold text-primary bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-md">
          {category.number}
        </span>
        <h3 className="text-xl font-semibold text-slate-900">
          {category.title}
        </h3>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="border border-primary text-gray-600 text-sm font-medium px-3 py-1 rounded-full hover:border-primary hover:bg-primary hover:text-white transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SkillCard;
