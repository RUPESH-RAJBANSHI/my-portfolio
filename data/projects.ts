export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "Full-Stack" | "Frontend";
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Mayura ERP",
    description:
      "A comprehensive ERP system designed to manage business operations, including inventory, sales, purchases, accounting, and other essential business processes.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
    category: "Full-Stack",
    live: "https://mayuraerp.com",
    github: "https://github.com/RUPESH-RAJBANSHI",
  },
  {
    title: "DotNode Point",
    description:
      "A modern IT company website and management platform offering software development, web and app development, UI/UX design, business solutions, and digital services, with an integrated admin dashboard for managing products, careers, applications, queries, meetings, and partnerships.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",

      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    category: "Full-Stack",
    live: "https://dotnodepoint.com",
    github: "https://github.com/DotNodePoint-DNP/DNP-TECH-COMPANY",
  },
];
