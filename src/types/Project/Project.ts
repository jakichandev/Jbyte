import type { Tech } from "../Tech/Tech";

export interface Project {
  slug: string;
  label: string;
  image: string | undefined;
  body: string;
  stack: Tech[];
  featured?: boolean;
  links: {
    github: string;
    online?: string;
  };
}

export interface ProjectCardProps extends Project {
  mode: "expanded" | "compact";
}
