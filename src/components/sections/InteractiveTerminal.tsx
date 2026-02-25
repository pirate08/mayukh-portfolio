import React from "react";
import Terminal from "../ui/Terminal";

const InteractiveTerminal = () => {
  return (
    <section className="bg-secondary py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center gap-2">
          <h6 className="font-mono text-primary text-xs border border-primary bg-primary/10 mb-2 rounded-full w-fit px-3 py-1">
            {`>_ Interactive Terminal`}
          </h6>
          <h2 className="text-3xl md:text-[36px] font-bold text-slate-900">
            Explore My Portfolio
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-[17px] mt-3 max-w-2xl mx-auto">
            Try typing commands like{" "}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">
              help
            </code>
            ,{" "}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">
              joke
            </code>
            , or{" "}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">
              fortune
            </code>
          </p>
        </div>

        {/* Terminal */}
        <Terminal />

        {/* Tip */}
        <p className="text-center text-gray-400 text-sm mt-5">
          💡 Tip: Use ↑ and ↓ arrow keys to navigate command history
        </p>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
