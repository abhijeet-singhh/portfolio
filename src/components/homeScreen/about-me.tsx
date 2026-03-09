"use client";

import { cn } from "@/lib/utils";
import { Container } from "../core/Container";
import { motion } from "motion/react";
import { aboutMe } from "@/data/personal";
import { AnimatedWrapper } from "@/lib/animated-wrapper";
import Image from "next/image";
import { Terminal } from "lucide-react";

interface AboutMeProps {
  wakaComponent: React.ReactNode; // Pass the Server Component as a prop
}

const AboutMe = ({ wakaComponent }: AboutMeProps) => {
  return (
    <AnimatedWrapper>
      <Container className="relative py-20">
        {/* decorative background text */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={cn("absolute top-5 left-0 text-[18vw] font-black text-foreground/5 leading-none uppercase select-none z-0", "md:text-[130px]")}
        >
          STORY
        </motion.h2>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* image side */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#bb6b00]/85 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
              viewport={{ once: true }}
              className="relative w-64 h-80 overflow-hidden rounded-[3rem] border-[6px] border-background shadow-2xl bg-secondary md:w-72 md:h-96"
            >
              <Image
                fill
                src="/assets/about-me.jpeg"
                alt="About Me"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* handwritten quote stamp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{duration: 0.3}}
              className="absolute -bottom-4 -right-4 bg-[#bb6b00] text-white p-4 rounded-2xl rotate-8 md:rotate-12 shadow-lg"
            >
              <p className="font-caveat text-2xl whitespace-nowrap">
                Passion for UI
              </p>
            </motion.div>
          </div>

          {/* content side */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="text-[11px] font-bold text-[#bb6b00] uppercase tracking-[0.3em]"
              >
                01 / Get to know me
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
              >
                Beyond the <span className="text-muted-foreground">Code</span>
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center gap-3 group/terminal border-b border-border/50 pb-2 mt-4"
              >
                <Terminal className="w-4 h-4 text-[#bb6b00]" />
                <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs">
                  <span className="text-muted-foreground/60">~/abhijeet</span>
                  <span className="text-[#bb6b00]">$</span>
                  <span className="text-foreground animate-pulse-slow">whoami.sh</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{duration: 0.3}}
              className="relative group"
            >
              <div className="absolute -left-6 top-2 bottom-2 w-0.75 bg-linear-to-b from-[#bb6b00] to-transparent hidden md:block opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-muted-foreground text-2xl leading-snug font-caveat">
                {aboutMe}
              </div>
            </motion.div>

            {/* wakaTime integration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mt-4"
            >
              {wakaComponent}
            </motion.div>
          </div>
        </div>
      </Container>
    </AnimatedWrapper>
  );
};

export { AboutMe };