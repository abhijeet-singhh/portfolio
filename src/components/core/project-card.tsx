"use client";

import { ProjectsProps } from "@/data/portfolio";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import {
  ExportIcon,
  GithubLogoIcon,
  LinkIcon,
  PlayCircleIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogPopup, DialogTrigger } from "../ui/dialog";
import Image from "next/image";
import { CustomTooltip } from "./custom-tooltip";

const ICONS: Record<string, React.ElementType> = {
  GithubLogoIcon,
  LinkIcon,
  ExportIcon,
};

const IconComponent = ({ icon }: { icon: string }) => {
  const Icon = ICONS[icon];
  return Icon ? <Icon weight="bold" className="size-5" /> : null;
};

const ProjectCard = ({
  img,
  title,
  content,
  isLive,
  skills,
  links,
  preview,
  slug,
  className,
}: ProjectsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isDialogOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isDialogOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col items-center mb-6 md:mb-8 z-5",
        "md:h-130 lg:w-105",
        className,
      )}
    >
      {/* Rotated background accent */}
      <div className="absolute inset-0 rounded-[3rem] -rotate-3 bg-neutral-200 dark:bg-neutral-800 group-hover:rotate-0 transition-transform duration-500" />

      {/* Main Card */}
      <div className="relative w-full h-full flex flex-col bg-background border border-border p-4 rounded-[3rem] shadow-md md:shadow-lg group-hover:shadow-xl transition-all duration-500 overflow-hidden">
        {/* Video / Image */}
        <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border-4 border-background shadow-inner">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover filter grayscale-30 group-hover:scale-105 transition-transform duration-700"
          />

          {/* Status badge */}
          <div className="absolute top-3 right-3 z-20">
            <div
              className={cn(
                "px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest backdrop-blur-md border shadow-black/40 flex items-center gap-1",
                isLive
                  ? "bg-green-500/10 border-green-500/20 text-green-600"
                  : "bg-neutral-900/30 border-neutral-700/20 text-neutral-700",
              )}
            >
              <GoDotFill
                className={cn(
                  "animate-pulse",
                  isLive ? "text-green-500" : "text-neutral-600",
                  "w-3 h-3",
                )}
              />
              {isLive ? "Live" : "Building"}
            </div>
          </div>

          {/* Video dialog trigger */}
          {preview && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] cursor-pointer rounded-[2.27rem]">
                <div className="p-3 rounded-full bg-white/20 border border-white/30 text-white">
                  <PlayCircleIcon size={32} weight="fill" />
                </div>
              </DialogTrigger>
              <DialogPopup className="max-w-4xl p-0 border-0 bg-transparent">
                <video
                  ref={videoRef}
                  src={preview}
                  autoPlay
                  loop
                  controls
                  className="w-full aspect-video rounded-3xl"
                />
              </DialogPopup>
            </Dialog>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-4 py-6">
          {/* Title + accent line */}
          <div className="mb-3">
            <h3 className="text-3xl font-black text-foreground uppercase leading-none tracking-tighter">
              {title}
            </h3>
            <div className="h-1 w-12 bg-[#bb6b00] mt-2 rounded-full" />
          </div>

          {/* Short description */}
          <p className="text-sm text-muted-foreground font-hanken leading-relaxed line-clamp-2">
            {content}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60"
              >
                #{skill}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 flex items-center justify-between">
            {/* Links */}
            <div className="flex items-center gap-1 bg-secondary/40 p-1.5 rounded-2xl border border-border">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    className="p-2 flex rounded-xl hover:bg-background hover:text-[#bb6b00] transition-all"
                  >
                    <IconComponent icon={link.icon} />
                  </a>
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <CustomTooltip label={link.label} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <Link
              href={`/projects/${slug}`}
              className="group/link flex items-center gap-1 text-sm font-bold uppercase tracking-tighter text-[#bb6b00] "
            >
              Case Study
              <MdArrowRightAlt className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { ProjectCard };
