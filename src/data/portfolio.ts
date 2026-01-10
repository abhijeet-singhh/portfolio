import { ElementType } from "react";
import { IconType } from "react-icons";
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
import {
  FolderSimpleIcon,
  HouseIcon,
  NotePencilIcon,
} from "@phosphor-icons/react/dist/ssr";

// Types

interface NavItemsProps {
  label: string;
  href: string;
  icon: ElementType;
}

export interface SkillsProps {
  id: number;
  icon: IconType;
  text: string;
}

export interface ProjectLinks {
  icon: "GithubLogoIcon" | "LinkIcon" | "ExportIcon";
  label: string;
  href?: string;
  external?: boolean;
  type?: "link" | "action";
}

export interface ProjectsProps {
  id: number;
  img: string;
  title: string;
  isLive: boolean;
  content: string;
  skills: string[];
  links: ProjectLinks[];
  preview?: string;
  slug?: string;
  className?: string;
}

export interface BlogsProps {
  id: number;
  img: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
  link: string;
  className?: string;
}

// NavItems

export const navItems: NavItemsProps[] = [
  {
    label: "Home",
    href: "/",
    icon: HouseIcon,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderSimpleIcon,
  },
  {
    label: "Blogs",
    href: "https://abhijeet-singhh.github.io/abhijeetxblogs/",
    icon: NotePencilIcon,
  },
];

// Skills Data

export const skills = [
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
] satisfies SkillsProps[];

// Projects Data

export const projects = [
  {
    id: 1,
    img: "/projects/flicknest-mockup.png",
    title: "FlickNest",
    isLive: true,
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
        label: "Website",
        href: "https://flicknestapp.netlify.app",
        external: true,
        type: "link",
      },
      { icon: "ExportIcon", label: "Share", type: "action" },
    ],
    preview: "/projects/videos/anime-video.mp4",
    slug: "flicknest",
  },
  {
    id: 2,
    img: "/projects/mockryze-mockup.png",
    title: "Mockryze",
    isLive: false,
    content:
      "A web platform that delivers role-based, voice-driven AI mock interviews, helping users practice English communication, build confidence, and prepare for real job interviews.",
    skills: ["NextJs", "TypeScript", "Tailwind", "PostgreSQL", "Drizzle"],
    links: [
      {
        icon: "GithubLogoIcon",
        label: "GitHub",
        href: "https://github.com/abhijeet-singhh/mockryze",
        external: true,
        type: "link",
      },
      {
        icon: "LinkIcon",
        label: "Website",
        href: "#",
        external: true,
        type: "link",
      },
      { icon: "ExportIcon", label: "Share", type: "action" },
    ],
    // preview: "#",
    slug: "mockryze",
  },
] satisfies ProjectsProps[];

// Blogs Data

export const blogs = [
  {
    id: 1,
    img: "/blogs/react-130-blog.png",
    title: "Debug log: Error #130",
    content: "A dive into error #130, why it happens, and how I fixed it.",
    tags: ["React", "Debug"],
    date: "June 27, 2025",
    link: "https://abhijeet-singhh.github.io/abhijeetxblogs/blogs/react-error-130-not-my-bug.html",
  },
  {
    id: 2,
    img: "/blogs/react-130-blog.png",
    title: "Debug log: Error #130",
    content: "A dive into error #130, why it happens, and how I fixed it.",
    tags: ["React", "Debug"],
    date: "June 27, 2025",
    link: "https://abhijeet-singhh.github.io/abhijeetxblogs/blogs/react-error-130-not-my-bug.html",
  },
] satisfies BlogsProps[];
