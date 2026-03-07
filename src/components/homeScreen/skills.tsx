"use client";

import { skills } from "@/data/portfolio";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <section>
      <Container>
        <SectionHeading subHeading="Technology" heading="Expertise" />

        <div
          className={cn(
            "mt-8 sm:mt-10 flex flex-wrap md:grid md:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3",
          )}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.a
                key={skill.id}
                href={`https://www.google.com/search?q=${skill.text}`}
                target="_blank"
                rel="noopener noreferrer"
                /* entrance animation */
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.35, delay: index * 0.04 },
                  y: { duration: 0.35, delay: index * 0.04 },
                }}
                /* hover animation */
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.28, ease: "easeOut" },
                }}
                className={cn(
                  "group relative flex items-center",
                  "gap-2 sm:gap-3",
                  "px-2.5 py-1.5 sm:px-4 sm:py-3",
                  "rounded-lg sm:rounded-xl",
                  "bg-card",
                  "border border-border/70",
                  "shadow-sm hover:shadow-lg",
                  "transition-shadow duration-200",
                )}
              >
                {/* Icon */}
                <div
                  className="
                  flex shrink-0 items-center justify-center
                  size-7 sm:size-8
                  rounded-md sm:rounded-lg
                  bg-muted
                  ring-1 ring-border
                  transition-all duration-300
                  group-hover:bg-primary/10
                  "
                >
                  <Icon
                    className="
                    size-3.5 sm:size-4
                    text-muted-foreground
                    transition-all duration-300
                    group-hover:text-primary
                    group-hover:scale-110
                    "
                    aria-hidden
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                    {skill.text}
                  </span>

                  <div className="h-px w-0 bg-primary/70 transition-all duration-500 group-hover:w-full" />
                </div>

                {/* soft glow */}
                <div
                  className="
                  absolute inset-0 rounded-lg sm:rounded-xl
                  bg-primary/5
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  pointer-events-none
                  "
                />
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export { Skills };
