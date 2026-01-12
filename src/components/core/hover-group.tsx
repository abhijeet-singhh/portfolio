"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HoverGroupProps = {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  hoverClassName?: string;
};

export function HoverGroup({
  children,
  className,
  itemClassName,
  hoverClassName,
}: HoverGroupProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("relative flex", className)}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn("relative", itemClassName)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                layoutId="sharedHover"
                className={cn(
                  "absolute inset-0 pointer-events-none",
                  hoverClassName,
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10">{child}</div>
        </div>
      ))}
    </div>
  );
}
