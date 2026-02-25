export interface SkillCategory {
  id: number;
  number: string;
  title: string;
  skills: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep{
    id: number;
    title: string;
    description: string;
}