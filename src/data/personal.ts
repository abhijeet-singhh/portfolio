import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { SiBento } from "react-icons/si";
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

export const personalInfo: PersonalInfoProps = {
  name: "Abhijeet Singh",
  bio: "I build full-stack web applications, working on everything from clean, responsive interfaces to reliable backend systems. I enjoy figuring out how things fit together and turning ideas into simple, polished products people actually enjoy using.",
  image: "/seven-mustard.png",
} as const;

export const socialLinks: SocialLinkProps[] = [
  { icon: XLogoIcon, label: "Twitter", link: "https://x.com/abhijeet_tw" },
  {
    icon: GithubLogoIcon,
    label: "GitHub",
    link: "https://github.com/abhijeet-singhh",
  },
  { icon: LinkedinLogoIcon, label: "LinkedIn", link: "#" },
  { icon: SiBento, label: "Bento", link: "https://bento.me/abhi-dev" },
] as const;
