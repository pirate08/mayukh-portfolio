export const commands: Record<string, string> = {
  help: `Available commands:
  help       - Show available commands
  about      - Learn about me
  skills     - View my tech stack
  projects   - See my projects
  contact    - Get my contact info
  clear      - Clear the terminal
  joke       - Get a programming joke
  whoami     - Who are you?
  date       - Show current date
  fortune    - Get a fortune`,

  about: `Hi! I'm Mayukh Deb Goswami 👋
  Full Stack Developer from India.
  I build fast, clean, and scalable web applications.
  Passionate about Next.js, Node.js, and open-source.`,

  skills: `Tech Stack:
  Frontend  →  Next.js, React, TypeScript, JavaScript, Tailwind CSS, Framer Motion, HTML5, CSS3,
  Backend   →  Node.js, Express, Hono, REST APIs, Socket.io, Strapi CMS,
  Database  → PostgreSQL, MongoDB, Redis, Supabase, Prisma,
  DevOps    → VS Code, Git, Postman, Vercel, Docker, Render`,

  projects: `Featured Projects:
  1. GigSphere   → Next.js, Typescript, Node.js, Express.js, MongoDb
  2. Task Management App(TickTrack)    → Next.js, Javascript, Node.js, Express.js, MongoDb
  3. Portfolio        → Next.js, Strapi, Tailwind CSS
  
  Visit /projects to see all my work.`,

  contact: `Get in touch:
  Email   → devdosedaily@gmail.com
  GitHub  → https://github.com/pirate08/
  LinkedIn→ https://www.linkedin.com/in/mayukh-deb-goswami-343563358/`,

  whoami: `visitor@portfolio — a curious person exploring Mayukh's work 👀`,

  date: new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }),

  joke: [
    "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?' 😂",
    "Why do Java developers wear glasses? Because they don't C#! 🤓",
    "How many programmers does it take to change a lightbulb? None — that's a hardware problem! 💡",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. (Git blame: me)",
  ][Math.floor(Math.random() * 5)],

  fortune: [
    "The best error message is the one that never shows up. — Thomas Fuchs",
    "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Simplicity is the soul of efficiency. — Austin Freeman",
    "Make it work, make it right, make it fast. — Kent Beck",
  ][Math.floor(Math.random() * 5)],
};

export const getCommandOutput = (
  input: string,
): { output: string; isError: boolean } => {
  const trimmed = input.trim().toLowerCase();
  if (trimmed === "clear") return { output: "__CLEAR__", isError: false };
  if (commands[trimmed]) return { output: commands[trimmed], isError: false };
  return {
    output: `Command not found: '${trimmed}'. Type 'help' to see available commands.`,
    isError: true,
  };
};
