// "use client";
//
// import { personalInfo } from "@/data/personal";
// import { Container } from "../core/Container";
// import { SectionHeading } from "../core/section-heading";
// import { cn } from "@/lib/utils";
// import { motion } from "motion/react";
// import Image from "next/image";
//
// const About = () => {
//   return (
//     <section className="relative border-b border-border/40 bg-background font-mono select-none">
//       <Container className="border-x border-border/40 py-16 px-6 sm:px-12">
//         {/* Section Header with Line Art Crosshair */}
//         <div className="relative border-b border-border/40 pb-4 mb-12">
//           <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#bb6b00] translate-x-[-1px] translate-y-[1px]" />
//           <SectionHeading subHeading="OVERVIEW" heading="ABOUT ME" />
//         </div>
//
//         {/* Structural Blueprint Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
//           {/* LEFT COMPONENT: Secondary Profile Framing (Occupies 4 columns) */}
//           <div className="col-span-1 lg:col-span-4 flex justify-center lg:justify-start w-full">
//             <div className="relative group w-full max-w-[280px] aspect-[1/1]">
//               {/* Outer Dashed Blueprint Frame Accents */}
//               <div className="absolute -inset-2.5 border border-dashed border-border/30 pointer-events-none" />
//
//               {/* Sharp Geometric Color Offset Box */}
//               <div className="absolute inset-0 border border-[#bb6b00]/60 translate-x-2.5 translate-y-2.5 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-200" />
//
//               <div className="relative w-full h-full bg-background border border-foreground p-2 flex flex-col justify-between shadow-xl">
//                 {/* Image Cropping Window */}
//                 <div className="relative w-full h-full overflow-hidden border border-border/80 bg-secondary/10">
//                   <Image
//                     fill
//                     priority
//                     src={personalInfo.image}
//                     alt={personalInfo.name}
//                     className="w-full h-full object-cover grayscale contrast-[1.10] brightness-95 hover:grayscale-0 transition-all duration-500"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//
//           {/* RIGHT COMPONENT: Narrative & Technical Metrics (Occupies 8 columns) */}
//           <div className="col-span-1 lg:col-span-8 flex flex-col justify-between space-y-6">
//             {/* Header Track */}
//             <div className="border-b border-border/40 pb-2">
//               <h3 className="text-xl font-black text-foreground uppercase tracking-tight">
//                 {personalInfo.name}
//               </h3>
//             </div>
//
//             {/* Profile Narrative Description */}
//             <div className="space-y-4">
//               <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed tracking-wide">
//                 {personalInfo.bio}
//               </p>
//             </div>
//
//             {/* Structured Core Pillars Row (No meaningless text fillers) */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
//               <div className="border border-border/80 p-4 bg-secondary/5 relative group">
//                 <div className="absolute inset-0 border border-[#bb6b00]/40 translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none" />
//                 <span className="text-[9px] font-bold text-[#bb6b00] tracking-widest block mb-1">
//                   // CORE_OBJECTIVE
//                 </span>
//                 <p className="text-xs font-sans text-muted-foreground leading-relaxed">
//                   Building highly structured backend architectures coupled with
//                   pixel-perfect, high-performance interface art.
//                 </p>
//               </div>
//
//               <div className="border border-border/80 p-4 bg-secondary/5 relative group">
//                 <div className="absolute inset-0 border border-[#bb6b00]/40 translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none" />
//                 <span className="text-[9px] font-bold text-[#bb6b00] tracking-widest block mb-1">
//                   // METHODOLOGY
//                 </span>
//                 <p className="text-xs font-sans text-muted-foreground leading-relaxed">
//                   Emphasizing strict typing, modular component ecosystems,
//                   linear layouts, and physics-driven micro-interactions.
//                 </p>
//               </div>
//             </div>
//
//             {/* Bottom Status Layout Tracker */}
//             <div className="pt-4 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold text-muted-foreground/80">
//               <div>
//                 LOCATION: <span className="text-foreground">INDIA</span>
//               </div>
//               <div className="hidden sm:block text-border/60">|</div>
//               <div>
//                 ENGAGEMENT:{" "}
//                 <span className="text-foreground">REMOTE / FULL-TIME</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };
//
// export { About };

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
      <section className="relative border-b border-border/40 bg-background font-mono select-none">
        <Container className="relative border-x border-border/40 py-16 px-6 sm:px-12 max-w-7xl mx-auto z-10">
          {/* Synchronized Section Header Track with absolute crosshairs */}
          <div className="relative border-b border-border/40 pb-4 mb-12">
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#bb6b00] translate-x-[-1px] translate-y-[1px]" />
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-bold text-[#bb6b00] uppercase tracking-[0.25em]">
                // BIOGRAPHY
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-foreground">
                ABOUT ME
              </h3>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN: Structural Image Showcase Container (Occupies 4 columns) */}
            <div className="col-span-1 lg:col-span-4 flex justify-center lg:justify-start w-full">
              <div className="relative group w-full max-w-[280px] sm:max-w-[300px] aspect-[3/4]">
                {/* Tech Line-Art Blueprint Accents */}
                <div className="absolute -inset-3 border border-dashed border-border/30 pointer-events-none" />
                <div className="absolute top-0 right-0 translate-y-[-20px] text-[9px] text-muted-foreground/60 tracking-wider uppercase">
                  DET_IMG_REF // PROFILE
                </div>

                {/* Sharp Geometric Color Block Offset */}
                <div className="absolute inset-0 border border-[#bb6b00]/60 translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />

                <div className="relative w-full h-full bg-background border border-foreground p-3 flex flex-col justify-between shadow-xl">
                  <div className="relative w-full h-[90%] overflow-hidden border border-border/80 bg-secondary/10">
                    <Image
                      fill
                      priority
                      src="/assets/about-me.jpeg"
                      alt="About Me"
                      className="w-full h-full object-cover grayscale contrast-[1.15] brightness-95 hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-bold text-muted-foreground/80 pt-2 px-0.5">
                    <span className="tracking-widest">FRAME // 002</span>
                    <span className="text-[#bb6b00] tracking-wider">
                      PERS_REFC
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Terminal Shell, Bio Copy & Metrics Tracking (Occupies 8 columns) */}
            <div className="col-span-1 lg:col-span-8 flex flex-col space-y-6">
              {/* Clean Mock Terminal Interactive Bar */}
              <div className="w-full">
                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <span className="text-muted-foreground/60">~</span>
                  <span className="text-[#bb6b00] font-bold">$</span>
                  <span className="text-foreground tracking-wide font-bold">
                    whoami
                  </span>
                  <span className="text-[9px] font-bold text-muted-foreground/50 tracking-widest">
                    SHELL // BASH
                  </span>
                </div>
              </div>

              {/* Proportional Profile Summary Field Block */}
              <div className="border border-border/60 p-5 bg-background rounded-none w-full">
                <p className="text-xs sm:text-[15px] text-muted-foreground font-sans leading-relaxed tracking-wide">
                  {aboutMe}
                </p>
              </div>

              {/* WakaTime System Component Container Integration */}
              <div className="relative border-t border-border/40 p-4 bg-secondary/5 rounded-none w-full">
                <div className="absolute top-0 left-4 translate-y-[-50%] bg-background px-2 text-[9px] font-black text-[#bb6b00] tracking-widest uppercase">
                  // METRICS_MONITOR
                </div>
                <div className="w-full overflow-hidden">{wakaComponent}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </AnimatedWrapper>
  );
};

export { AboutMe };
