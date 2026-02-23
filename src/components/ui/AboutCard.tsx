import React from "react";
import { CardProps } from "@/types/aboutCard";

const AboutCard = ({ icon: Icon, title, paragraph }: CardProps) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border-[0.5px] border-black/10 bg-box p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
      {/* 1. Icon/Image Section with Hover Dimming */}
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:brightness-75">
        <Icon className="text-3xl" />
      </div>

      {/* 2. Content Section */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl  text-slate-900">{title}</h3>
        <p className="font-sans text-sm leading-relaxed text-gray-500">
          {paragraph}
        </p>
      </div>

      {/* 3. Decorative Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

export default AboutCard;
