"use client";

import { cn } from "@/lib/utils";
import { Container } from "../core/Container";
import { AnimatePresence, motion } from "motion/react";
import { personalInfo, socialLinks } from "@/data/personal";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { CustomTooltip } from "../core/custom-tooltip";
import { AnimatedWrapper } from "@/lib/animated-wrapper";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const shortBio = personalInfo.bio.slice(0, 110) + "...";

  return (
    <AnimatedWrapper>
      <Container className="relative min-h-[90vh] flex flex-col justify-between border-x border-border/40 p-0 overflow-hidden bg-background font-mono select-none">
        {/* Subtle Background Dot Matrix */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(var(--foreground) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* ================= TOP COMPACT INFORMATION BAR ================= */}
        <div className="w-full flex items-center justify-between border-b border-border/40 px-6 py-4 z-20 bg-background/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#bb6b00]" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/80">
              {personalInfo.name.toUpperCase()} // PORTFOLIO
            </span>
          </div>
          <div className="flex items-center gap-6 text-[10px] text-muted-foreground font-medium tracking-widest">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-foreground/90 font-bold">
                AVAILABLE FOR REMOTE ROLES
              </span>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="relative w-full flex-1 flex items-center py-12 md:py-16 px-6 sm:px-12 max-w-7xl mx-auto z-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: Name, Title, Biography & Actions */}
            <div className="col-span-1 lg:col-span-7 flex flex-col space-y-8 text-left pr-0 lg:pr-8">
              <div>
                <span className="inline-block border border-[#bb6b00]/40 px-2.5 py-1 text-[9px] text-[#bb6b00] font-bold uppercase tracking-[0.25em] bg-[#bb6b00]/5">
                  SOFTWARE ENGINEER
                </span>
              </div>

              {/* Core Hero Typography */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] text-foreground uppercase">
                  FULLSTACK
                </h1>
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-transparent"
                  style={{ WebkitTextStroke: "1px var(--foreground)" }}
                >
                  DEVELOPER
                </h2>
              </div>

              {/* Clean Interactive Bio Block */}
              <div
                onClick={() => setIsBioOpen(!isBioOpen)}
                className="group relative border border-border/80 p-5 bg-secondary/5 cursor-pointer hover:border-foreground hover:bg-secondary/10 transition-all duration-200 w-full max-w-xl"
              >
                <div className="flex justify-between items-center border-b border-border/40 pb-2 mb-3">
                  <span className="text-[9px] font-bold text-[#bb6b00] tracking-[0.2em] uppercase">
                    // PROFILE_SUMMARY
                  </span>
                  <span className="text-[10px] text-muted-foreground/80 font-bold group-hover:text-foreground transition-colors">
                    {isBioOpen ? "[ COLLAPSE ]" : "[ EXPAND_BIO ]"}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground/90 leading-relaxed font-sans tracking-wide">
                  {isBioOpen ? personalInfo.bio : shortBio}
                </p>
              </div>

              {/* Actions & Social Handles */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="mailto:abhijeetxdev@gmail.com"
                  className="flex items-center justify-center gap-3 bg-foreground text-background border border-foreground px-6 py-3.5 font-bold text-xs tracking-widest uppercase transition-all duration-150 hover:bg-[#bb6b00] hover:border-[#bb6b00] hover:text-white"
                >
                  CONTACT_ME <MdEmail className="size-4" />
                </Link>

                <div className="flex items-center bg-background border border-border p-1">
                  {socialLinks.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <Link
                          href={item.link}
                          target="_blank"
                          className="p-2.5 flex border border-transparent hover:border-border/60 hover:bg-secondary/40 hover:text-[#bb6b00] transition-all"
                        >
                          <Icon weight="bold" className="size-4" />
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
            </div>

            {/* RIGHT COLUMN: Clean Image Framing */}
            <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="relative group w-full max-w-[300px] sm:max-w-[320px] aspect-[4/5]">
                <div className="absolute -inset-3 border border-dashed border-border/30 pointer-events-none" />
                <div className="absolute top-0 right-0 translate-y-[-25px] text-[12px] text-muted-foreground/60 tracking-wider uppercase">
                  BASED IN // INDIA
                </div>

                {/* Sharp Geometric Color Block Offset */}
                <div className="absolute inset-0 border border-[#bb6b00]/60 translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />

                <div className="relative w-full h-full bg-background border border-foreground p-3 flex flex-col justify-between shadow-xl">
                  <div className="relative w-full h-[88%] overflow-hidden border border-border/80 bg-secondary/10">
                    <Image
                      fill
                      priority
                      src={personalInfo.image}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover grayscale contrast-[1.15] brightness-95 hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-bold text-muted-foreground/80 pt-2 px-0.5">
                    <span className="tracking-widest">VER // 2026</span>
                    <span className="text-[#bb6b00] tracking-wider">
                      {personalInfo.name.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM METRICS FOOTER ================= */}
        <div className="w-full flex justify-between items-center border-t border-border/40 divide-x divide-border/40 text-center text-[10px] bg-background/50 z-20">
          <div className="p-3.5 font-bold text-muted-foreground uppercase tracking-widest flex-1 flex justify-start">
            ROLE // <span className="text-foreground">FRONTEND & BACKEND</span>
          </div>
          <div className="p-3.5 font-bold text-muted-foreground uppercase tracking-widest hidden md:flex flex-1 justify-end">
            FOCUS //{" "}
            <span className="text-foreground">
              USER EXPERIENCE & PERFORMANCE
            </span>
          </div>
        </div>
      </Container>
    </AnimatedWrapper>
  );
};

export { Hero };
