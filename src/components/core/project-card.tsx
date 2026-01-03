"use client";

import { ProjectsProps } from "@/data/portfolio";
import { Container } from "./Container";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import {
  ExportIcon,
  GithubLogoIcon,
  LinkIcon,
  PlayCircleIcon,
} from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { CustomTooltip } from "./custom-tooltip";

const ICONS: Record<string, React.ElementType> = {
  GithubLogoIcon,
  LinkIcon,
  ExportIcon,
};

const ProjectCard = ({ img, title, content, skills, links }: ProjectsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container>
      <div className="flex flex-col w-[420px] h-[478px] bg-card-custom border border-accent box-border rounded-xl mt-10 project-card-shadow">
        {/* Image section */}
        <div className="relative group w-full h-52 rounded-t-xl overflow-hidden">
          {/* Image */}
          <img src={img} alt={title} className="w-full h-full object-cover" />
          {/* Gradient Overlay */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-950/70 via-zinc-950/30 to-transparent z-10"></div>
          {/* Hover Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-muted/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:backdrop-blur-xs cursor-pointer">
            <button className="flex items-center justify-center size-16 rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 group-hover:cursor-pointer hover:bg-white/30">
              <PlayCircleIcon weight="bold" className="size-14" />
            </button>
          </div>
        </div>

        <div className="px-4 flex-1">
          {/* Title */}
          <div className="flex items-center justify-between mt-4">
            <h3 className="font-semibold text-2xl text-foreground">{title}</h3>
            <div className="flex items-center justify-between gap-3">
              <div className="select-none font-medium text-xs w-fit pl-1.5 pr-2.5 py-0.5 gap-0.5 rounded-md flex items-center bg-green-500/15">
                <span className="animate-pulse">
                  <GoDotFill className="text-green-500" />
                </span>
                Live
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-muted-custom mt-4">{content}</div>

          {/* Technologies */}
          <div className="flex items-center gap-1 mt-4 border-b border-border pb-5 select-none">
            {skills.map((skill, index) => {
              return (
                <span
                  key={index}
                  className="bg-muted px-2 py-0.5 rounded-md text-xs text-muted-custom w-fit"
                >
                  {skill}
                </span>
              );
            })}
          </div>

          {/* Links */}
          <div className="mt-2 flex justify-between items-center">
            {/* Left section link */}
            <div className="flex items-center gap-2">
              {links.map((link, index) => {
                const Icon = ICONS[link.icon];
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative flex flex-col items-center"
                  >
                    {link.type === "link" && link.href ? (
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener norefferer" : undefined}
                        className="p-2"
                      >
                        <Icon
                          weight="bold"
                          className="size-5 text-muted-custom"
                        />
                      </Link>
                    ) : (
                      // Action buttons (Share)
                      <button
                        className="p-2"
                        // onClick={() => setShowShareModal(true)}
                      >
                        <Icon
                          weight="bold"
                          className="size-5 cursor-pointer text-muted-custom"
                        />
                      </button>
                    )}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <CustomTooltip label={link.label} />
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right section link */}
            <Link
              href="#"
              className="text-sm text-muted-custom flex items-center gap-0.5 w-fit ml-1"
            >
              View more
              <MdArrowRightAlt className="size-5 mt-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { ProjectCard };
