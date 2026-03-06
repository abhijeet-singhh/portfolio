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
  const shortBio = personalInfo.bio.slice(0, 90) + "...";

  return (
    <AnimatedWrapper>
      <Container className="relative pt-12 pb-10 flex flex-col items-center">
        <div className="relative w-full flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "absolute top-0 text-[15vw] font-black text-foreground/5 leading-none uppercase select-none z-0",
              "md:text-[120px]",
            )}
          >
            FULLSTACK
          </motion.h2>

          <div className="relative z-10 mt-6 group">
            {/* image background gradient */}
            <div className="absolute -inset-1 bg-linear-to-b from-[#bb6b00] to-transparent rounded-[3rem] blur-xl opacity-30 group-hover:opacity-40 transition-opacity -rotate-6" />
            {/* image */}
            <motion.div
              className={cn(
                "relative w-56 h-72 overflow-hidden rounded-[3rem] border-[6px] border-background shadow-2xl -rotate-4",
                "md:w-64 md:h-80",
              )}
            >
              <Image
                fill
                src={personalInfo.image}
                alt={personalInfo.name}
                className={cn(
                  "w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-500",
                )}
              />
            </motion.div>

            {/* floating bio tag */}
            <motion.div
              layout
              onClick={() => setIsBioOpen(!isBioOpen)}
              initial={{ x: 20, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                width: isBioOpen ? 280 : 180,
                height: "auto",
                rotate: isBioOpen ? 4 : 0,
              }}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  mass: 1,
                },
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className={cn(
                "absolute left-[43%] bottom-12 hidden w-45 bg-background/80 backdrop-blur-xl border border-border p-4 rounded-2xl shadow-xl cursor-grab",
                "md:block overflow-hidden origin-left",
                isBioOpen ? "z-50" : "z-10",
              )}
            >
              <div className="relative">
                <motion.p
                  layout="position"
                  className="text-[11px] font-bold text-[#bb6b00] uppercase tracking-widest mb-1"
                >
                  About Me
                </motion.p>
                <motion.p
                  layout="position"
                  className={cn(
                    "text-xs leading-relaxed text-muted-foreground line-clamp-3",
                    isBioOpen ? "line-clamp-none" : "line-clamp-3",
                  )}
                >
                  {isBioOpen ? personalInfo.bio : shortBio}
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* main title */}
          <div className="relative z-20 -mt-10 text-center">
            <h1
              className={cn(
                "text-6xl font-black tracking-tighter leading-none text-foreground uppercase drop-shadow-2xl",
                "md:text-8xl",
              )}
            >
              DEVELOPER
            </h1>
            <p
              className={cn(
                "font-caveat text-3xl text-[#bb6b00] mt-2",
                "md:text-4xl",
              )}
            >
              {personalInfo.name}
            </p>
          </div>
        </div>

        {/* descriptioin: mobile and tablet only */}
        <div className={cn("mt-8 max-w-lg text-center", "md:hidden")}>
          <p className="text-muted-foreground font-hanken text-lg px-4">
            {personalInfo.bio}
          </p>
        </div>

        {/* actioins and socials */}
        <div className="mt-12 w-full max-w-md flex flex-col gap-6">
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-4",
              "sm:flex-row",
            )}
          >
            <Link
              href="mailto:abhijeetxdev@gmail.com"
              className={cn(
                "w-52 flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-bold transition-all hover:bg-[#bb6b00] hover:text-white",
                "sm:w-auto",
              )}
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

        {/* Vertical Bio Stamp (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute -left-24 bottom-50 -translate-y-1/2 hidden lg:flex flex-row-reverse items-center gap-4 rotate-90 origin-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground whitespace-nowrap">
            Based in India
          </span>
          <div className="w-12 h-px bg-[#bb6b00]" />
        </motion.div>
      </Container>
    </AnimatedWrapper>
  );
};

export { Hero };
