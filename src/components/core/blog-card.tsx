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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group lg:w-100 lg:h-120"
    >
      {/* Rotated background accent */}
      <div className="absolute inset-0 rounded-[2.5rem] -rotate-3 bg-neutral-200 dark:bg-neutral-800 group-hover:rotate-0 transition-transform duration-500" />

      <div
        className={cn(
          "relative flex flex-col h-full rounded-[2rem] overflow-hidden",
          "bg-background border border-border",
          "transition-all duration-500",
          "hover:shadow-xl",
          className,
        )}
      >
        {/* Background subtle pattern */}
        {/* <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" /> */}

        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden p-3">
          <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] border border-border/60">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            {/* Date */}
            <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border text-[10px] font-bold uppercase tracking-widest">
              <CalendarDotsIcon
                weight="bold"
                className="size-3 text-[#bb6b00]"
              />
              {date}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 pt-2 flex flex-col flex-1 relative z-10">
          {/* Tags */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-linear-to-r from-[#bb6b00]/50 to-transparent" />

            <div className="flex gap-2">
              {tags.slice(0, 2).map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold text-[#bb6b00] uppercase tracking-widest"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-extrabold text-xl text-foreground leading-tight tracking-tight group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mt-4 line-clamp-3 leading-relaxed font-medium italic opacity-80">
            "{content}"
          </p>

          {/* Footer */}
          <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/40">
            <div className="flex items-center gap-2 text-muted-foreground text-[11px] font-medium">
              <BookOpenIcon size={16} />
              <span>5 min read</span>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-4 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-foreground text-xs font-bold uppercase tracking-tight hover:bg-[#bb6b00]/70 hover:text-white dark:hover:bg-[#bb6b00] transition-colors duration-200"
            >
              Open Post
              <MdArrowRightAlt className="size-4" />
            </a>
          </div>
        </div>

        {/* Glow */}
        <div className="absolute -bottom-12 -left-10 size-32 bg-[#bb6b00]/10 blur-[60px] rounded-full group-hover:bg-[#bb6b00]/20 transition-colors" />
      </div>
    </motion.div>
  );
};

export { BlogCard };
