"use client";

import { skills } from "@/data/portfolio";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <section className="relative border-b border-border/40 bg-background font-mono select-none">
      <Container className="border-x border-border/40 py-12 px-6 sm:px-12">
        {/* Synchronized Section Header */}
        <div className="relative border-b border-border/40 pb-4 mb-8">
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#bb6b00] translate-x-[-1px] translate-y-[1px]" />
          <SectionHeading subHeading="STACK" heading="TECHNICAL EXPERTISE" />
        </div>

        {/* Compact, Clean Grid Layout */}
        <div
          className={cn(
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3",
          )}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.25, delay: index * 0.01 },
                  y: { duration: 0.25, delay: index * 0.01 },
                }}
                className="relative group"
              >
                {/* Sharp Linear Border Frame on Hover */}
                <div className="absolute inset-0 border border-[#bb6b00] translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none" />

                <div
                  className={cn(
                    "relative flex items-center gap-1 px-2 py-1 bg-background border border-border/80 rounded-none",
                    "group-hover:border-foreground transition-colors duration-150",
                  )}
                >
                  {/* Clean Visual Icon Container */}
                  <div className="flex shrink-0 items-center justify-center size-7 rounded-none bg-secondary/30 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors duration-150">
                    <Icon className="size-4" aria-hidden />
                  </div>

                  {/* Clean Stack Name Only */}
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wide truncate block">
                      {skill.text}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export { Skills };
