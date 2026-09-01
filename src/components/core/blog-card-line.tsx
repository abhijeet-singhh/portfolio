"use client";

import { BlogsProps } from "@/data/portfolio";
import { MdArrowRightAlt } from "react-icons/md";
import { cn } from "@/lib/utils";
import { CalendarDotsIcon, BookOpenIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { motion } from "motion/react";

const BlogCard = ({
  img,
  title,
  content,
  tags,
  date,
  link,
  className,
}: BlogsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group relative w-full max-w-sm bg-background font-mono select-none border border-border/80 rounded-none mb-4",
        className,
      )}
    >
      {/* Sharp Linear Offset Accent on Hover */}
      <div className="absolute inset-0 border border-[#bb6b00]/60 translate-x-1.5 translate-y-1.5 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none z-0" />

      {/* Main Container Layer */}
      <div className="relative bg-background p-3 flex flex-col h-full z-10 space-y-3">
        {/* COMPACT IMAGE TRACK */}
        <div className="relative w-full aspect-[16/9] border border-border/60 bg-secondary/10 overflow-hidden rounded-none">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover grayscale contrast-[1.10] brightness-95 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
          />

          {/* Clean Timestamp Badge */}
          <div className="absolute bottom-2 left-2 z-20">
            <div className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-background border border-border/80 rounded-none flex items-center gap-1.5 text-muted-foreground">
              <CalendarDotsIcon
                weight="bold"
                className="size-3 text-[#bb6b00]"
              />
              {date.toUpperCase()}
            </div>
          </div>
        </div>

        {/* DETAILS AND COPY BLOCK */}
        <div className="flex flex-col flex-1 space-y-2">
          {/* Metadata Track */}
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="text-[9px] font-bold uppercase tracking-widest text-[#bb6b00]/80"
              >
                //{tag}
              </span>
            ))}
          </div>

          {/* Core Post Typography Header */}
          <div className="border-b border-border/40 pb-1.5">
            <h3 className="text-sm font-black text-foreground uppercase tracking-wide leading-snug line-clamp-2 transition-colors group-hover:text-[#bb6b00]">
              {title}
            </h3>
          </div>

          {/* Truncated Summary Snippet */}
          <p className="text-xs text-muted-foreground font-sans leading-relaxed tracking-wide line-clamp-2">
            {content}
          </p>

          {/* FOOTER ACTION PANEL */}
          <div className="pt-3 border-t border-border/40 mt-auto flex items-center justify-between">
            {/* Reading Estimate Metric Tag */}
            <div className="flex items-center gap-1.5 text-muted-foreground/70 text-[9px] font-bold uppercase tracking-wider">
              <BookOpenIcon size={12} weight="bold" />
              <span>5_MIN_READ</span>
            </div>

            {/* Flat Redirect Action Link */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-foreground text-background border border-foreground px-3 py-1.5 font-bold text-[10px] tracking-wider uppercase rounded-none transition-all duration-150 hover:bg-[#bb6b00] hover:border-[#bb6b00] hover:text-white"
            >
              READ_POST
              <MdArrowRightAlt className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { BlogCard };
