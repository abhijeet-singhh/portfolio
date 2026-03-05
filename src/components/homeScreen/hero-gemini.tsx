"use client";

import { Container } from "../core/Container";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { personalInfo, socialLinks } from "@/data/personal";
import { CustomTooltip } from "../core/custom-tooltip";
import { MdEmail, MdArrowOutward } from "react-icons/md";
import { AnimatedWrapper } from "@/lib/animated-wrapper";

const Hero2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatedWrapper>
      {/* Container is max-w-4xl, so we focus on vertical depth */}
      <Container className="relative pt-12 pb-20 flex flex-col items-center">
        {/* 1. TOP SECTION: THE NAME & IMAGE OVERLAP */}
        <div className="relative w-full flex flex-col items-center">
          {/* Large Background Text (Watermark) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 text-[12vw] md:text-[120px] font-black text-foreground/[0.05] leading-none uppercase select-none z-0"
          >
            FULLSTACK
          </motion.h2>

          {/* Profile Image - Elevated & Framed */}
          <div className="relative z-10 mt-6 group">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#bb6b00] to-transparent rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />

            <div className="relative w-56 h-72 md:w-64 md:h-80 overflow-hidden rounded-[3rem] border-[6px] border-background shadow-2xl">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Bio Tag - Overlapping the image edge */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-8 bottom-12 hidden md:block max-w-[180px] bg-background/80 backdrop-blur-xl border border-border p-4 rounded-2xl shadow-xl"
            >
              <p className="text-[11px] font-bold text-[#bb6b00] uppercase tracking-widest mb-1">
                About Me
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                {personalInfo.bio}
              </p>
            </motion.div>
          </div>

          {/* 2. MAIN TITLE (The foreground focus) */}
          <div className="relative z-20 -mt-10 text-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-foreground uppercase drop-shadow-2xl">
              DEVELOPER
            </h1>
            <p className="font-caveat text-3xl md:text-4xl text-[#bb6b00] mt-2">
              {personalInfo.name}
            </p>
          </div>
        </div>

        {/* 3. DESCRIPTION (Mobile & Tablet visible) */}
        <div className="mt-8 max-w-lg text-center md:hidden">
          <p className="text-muted-foreground font-hanken text-lg px-4">
            {personalInfo.bio}
          </p>
        </div>

        {/* 4. ACTIONS & SOCIALS (The "Command Center") */}
        <div className="mt-12 w-full max-w-md flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:abhijeetxdev@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-bold transition-all hover:bg-[#bb6b00] hover:text-white"
            >
              Contact Me <MdEmail className="size-5" />
            </Link>

            <div className="flex items-center gap-2 bg-secondary/50 p-2 rounded-2xl border border-border">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link
                      href={item.link}
                      target="_blank"
                      className="p-2.5 flex rounded-xl hover:bg-background hover:text-[#bb6b00] transition-all"
                    >
                      <Icon weight="bold" className="size-5" />
                    </Link>
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <CustomTooltip label={item.label} />
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Availability Indicator */}
          <div className="flex justify-center items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Currently accepting remote roles
            </span>
          </div>
        </div>

        {/* Decorative flair that stays within max-w-4xl */}
        <div className="absolute top-0 left-0 text-[10px] font-mono opacity-20 rotate-90 origin-top-left translate-x-4">
          INIT_STK_026
        </div>
      </Container>
    </AnimatedWrapper>
  );
};

export { Hero2 };
