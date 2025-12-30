"use client";

import {
  FolderSimpleIcon,
  HouseIcon,
  NotePencilIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "./Container";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ReactElement, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";

interface NavItemsProps {
  label: string;
  href: string;
  icon: ReactElement;
}

type TooltipProps = {
  label: string;
};

const Tooltip = ({ label }: TooltipProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="absolute bottom-[-32px] bg-muted text-foreground text-[12px] px-2 py-0.5 rounded-md whitespace-nowrap z-10"
    >
      {label}
    </motion.div>
  );
};

const navItems: NavItemsProps[] = [
  {
    label: "Home",
    href: "/",
    icon: <HouseIcon className="size-5" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FolderSimpleIcon className="size-5" />,
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: <NotePencilIcon className="size-5" />,
  },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hidden, setHidden] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setHidden(false);
      return;
    }

    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current <= 0) {
        setHidden(false);
        lastScroll = current;
        return;
      }
      if (current > lastScroll) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={
          isDesktop
            ? {
                y: hidden ? -100 : 0,
                opacity: hidden ? 0 : 1,
              }
            : {
                y: 0,
                opacity: 1,
              }
        }
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed flex items-center gap-5 px-4 py-1 rounded-2xl border border-border bg-background",
          "bottom-4 left-1/2 -translate-x-1/2",
          "md:top-4 md:bottom-auto",
        )}
      >
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={item.href} className="px-2 py-1">
              <span>{item.icon}</span>
            </Link>
            <AnimatePresence>
              {hoveredIndex === index && <Tooltip label={item.label} />}
            </AnimatePresence>
          </div>
        ))}
        <ThemeToggle />
      </motion.div>
    </Container>
  );
};

export { Navbar };
