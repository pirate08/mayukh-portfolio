export interface TerminalLine {
  id: number;
  type: "output" | "input" | "error";
  content: string;
}