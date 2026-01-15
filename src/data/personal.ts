import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SiBento, SiLeetcode } from "react-icons/si";
import { ElementType } from "react";

// Types

export interface PersonalInfoProps {
  name: string;
  bio: string;
  image: string;
}

export interface SocialLinkProps {
  icon: ElementType;
  label: string;
  link: string;
}

// Personal Info

export const personalInfo = {
  name: "Abhijeet Singh",
  bio: "I build full-stack web applications, working on everything from clean, responsive interfaces to reliable backend systems. I enjoy figuring out how things fit together and turning ideas into simple, polished products people actually enjoy using.",
  image: "/assets/seven-mustard.png",
} satisfies PersonalInfoProps;

export const socialLinks = [
  // { icon: XLogoIcon, label: "Twitter", link: "https://x.com/abhijeet_tw" },
  {
    icon: GithubLogoIcon,
    label: "GitHub",
    link: "https://github.com/abhijeet-singhh",
  },
  { icon: LinkedinLogoIcon, label: "LinkedIn", link: "#" },
  { icon: SiBento, label: "Bento", link: "https://bento.me/abhi-dev" },
  { icon: SiLeetcode, label: "Leetcode", link: "#" },
] satisfies SocialLinkProps[];

export const aboutMe = `
I am an undergraduate and a full-stack developer. I spend my time
working on web apps and learning how to make them work better, both
on the front end and the back end. I like understanding how things
are built instead of just using them, and most of what I know comes
from sitting down and actually working on projects.
`.trim();
