import { ElementType } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import {
  RiBearSmileLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiDrizzle,
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiPrisma,
  SiReactquery,
  SiShadcnui,
  SiVercel,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandTypescript } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";

export interface SkillsProps {
  id: number;
  icon: ElementType;
  text: string;
}

export interface ProjectLinks {
  icon: string;
  label: string;
  href?: string;
  external?: boolean;
  type?: "link" | "action";
}

export interface ProjectsProps {
  id: number;
  img: string;
  title: string;
  status: boolean;
  content: string;
  skills: string[];
  links: ProjectLinks[];
  preview: string;
}

export const skills: SkillsProps[] = [
  { id: 1, icon: DiJavascript, text: "JavaScript" },
  { id: 2, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 3, icon: RiReactjsLine, text: "ReactJs" },
  { id: 4, icon: RiNextjsLine, text: "NextJs" },
  { id: 5, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 6, icon: TbBrandFramerMotion, text: "Motion" },
  { id: 7, icon: SiGreensock, text: "GSAP" },
  { id: 8, icon: SiShadcnui, text: "shadcn" },
  { id: 9, icon: RiBearSmileLine, text: "Zustand" },
  { id: 10, icon: SiReactquery, text: "Tanstack Query" },
  { id: 11, icon: IoLogoNodejs, text: "NodeJS" },
  { id: 12, icon: SiExpress, text: "ExpressJS" },
  { id: 13, icon: SiMongodb, text: "MongoDB" },
  { id: 14, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 15, icon: BsFiletypeSql, text: "SQL" },
  { id: 16, icon: SiPrisma, text: "Prisma" },
  { id: 17, icon: SiDrizzle, text: "Drizzle" },
  { id: 18, icon: FaPython, text: "Python" },
  { id: 19, icon: FaGitAlt, text: "Git" },
  { id: 20, icon: FaGithub, text: "GitHub" },
  { id: 21, icon: SiPostman, text: "Postman" },
  { id: 22, icon: VscTerminalLinux, text: "Linux" },
  { id: 23, icon: SiVercel, text: "Vercel" },
] as const;

export const projects: ProjectsProps[] = [
  {
    id: 1,
    img: "/projects/flicknest-mockup.png",
    title: "FlickNest",
    status: true,
    content:
      "A web app for movie and TV show enthusiasts to explore trending, popular, and new releases. Watch trailers, browse casts, discover recommended and similar titles, and search for your favorites.",
    skills: ["React", "TypeScript", "Tailwind", "Redux Toolkit"],
    links: [
      {
        icon: "GithubLogoIcon",
        label: "GitHub",
        href: "https://github.com/abhijeet-singhh/FlickNest",
        external: true,
        type: "link",
      },
      {
        icon: "LinkIcon",
        label: "Live",
        href: "https://flicknestapp.netlify.app",
        external: true,
        type: "link",
      },
      { icon: "ExportIcon", label: "Share", type: "action" },
    ],
    preview: "#",
  },
];
