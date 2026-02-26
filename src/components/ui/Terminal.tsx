"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { TerminalLine } from "@/types/terminal";
import { getCommandOutput } from "@/lib/terminalCommands";

const WELCOME: TerminalLine[] = [
  { id: 1, type: "output", content: "Welcome to my interactive terminal! 🖥️" },
  { id: 2, type: "output", content: "Type 'help' to see available commands." },
];

const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>(WELCOME);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isFirstRender = useRef(true);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleSubmit = () => {
    if (!input.trim()) return;

    const newLines: TerminalLine[] = [
      ...lines,
      { id: Date.now(), type: "input", content: input },
    ];

    const { output, isError } = getCommandOutput(input);

    if (output === "__CLEAR__") {
      setLines(WELCOME);
    } else {
      setLines([
        ...newLines,
        {
          id: Date.now() + 1,
          type: isError ? "error" : "output",
          content: output,
        },
      ]);
    }

    setHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") return handleSubmit();

    if (e.key === "ArrowUp") {
      const newIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex] ?? "");
    }

    if (e.key === "ArrowDown") {
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? "" : history[newIndex]);
    }
  };

  return (
    <div
      className="bg-[#1a1b26] rounded-2xl overflow-hidden shadow-2xl font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#16161e] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-gray-400 text-xs">mayukh@portfolio ~</span>
      </div>

      {/* Output area */}
      <div className="h-80 overflow-y-auto p-5 flex flex-col gap-1 scrollbar-thin">
        {lines.map((line) => (
          <div key={line.id}>
            {line.type === "input" ? (
              <p className="text-green-400">
                <span className="text-primary mr-2">›</span>
                {line.content}
              </p>
            ) : line.type === "error" ? (
              <p className="text-red-400 whitespace-pre-wrap">{line.content}</p>
            ) : (
              <p className="text-gray-300 whitespace-pre-wrap">
                {line.content}
              </p>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 px-5 py-3 border-t border-white/10 bg-[#16161e]">
        <span className="text-primary">›</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-gray-200 outline-none caret-primary placeholder:text-gray-600"
          placeholder="Type a command..."
          autoComplete="off"
          spellCheck={false}
          aria-label="Terminal input"
        />
      </div>
    </div>
  );
};

export default Terminal;
