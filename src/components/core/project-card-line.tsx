// "use client";
//
// import { ProjectsProps } from "@/data/portfolio";
// import { GoDotFill } from "react-icons/go";
// import Link from "next/link";
// import { MdArrowRightAlt } from "react-icons/md";
// import {
//   ExportIcon,
//   GithubLogoIcon,
//   LinkIcon,
//   PlayCircleIcon,
// } from "@phosphor-icons/react";
// import { AnimatePresence, motion } from "motion/react";
// import { useEffect, useRef, useState } from "react";
// import { cn } from "@/lib/utils";
// import { Dialog, DialogPopup, DialogTrigger } from "../ui/dialog";
// import Image from "next/image";
// import { CustomTooltip } from "./custom-tooltip";
//
// const ICONS: Record<string, React.ElementType> = {
//   GithubLogoIcon,
//   LinkIcon,
//   ExportIcon,
// };
//
// const IconComponent = ({ icon }: { icon: string }) => {
//   const Icon = ICONS[icon];
//   return Icon ? <Icon weight="bold" className="size-4" /> : null;
// };
//
// const ProjectCard = ({
//   img,
//   title,
//   content,
//   isLive,
//   skills,
//   links,
//   preview,
//   slug,
//   className,
// }: ProjectsProps) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//
//   useEffect(() => {
//     if (!isDialogOpen && videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   }, [isDialogOpen]);
//
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.3 }}
//       className={cn(
//         "group relative flex flex-col mb-8 bg-background font-mono select-none",
//         "w-full max-w-md border border-border/80 rounded-none",
//         className,
//       )}
//     >
//       {/* Sharp Linear Offset Accent on Hover */}
//       <div className="absolute inset-0 border border-[#bb6b00]/60 translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-0" />
//
//       {/* Main Container Core */}
//       <div className="relative bg-background p-4 flex flex-col h-full z-10 space-y-4">
//         {/* MEDIA CONTAINER BOX */}
//         <div className="relative w-full aspect-video border border-border/80 bg-secondary/10 overflow-hidden rounded-none">
//           <Image
//             src={img}
//             alt={title}
//             fill
//             className="object-cover grayscale contrast-[1.10] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
//           />
//
//           {/* Clean Status Badge */}
//           <div className="absolute top-2.5 right-2.5 z-20">
//             <div
//               className={cn(
//                 "px-2 py-1 text-[9px] font-bold uppercase tracking-wider bg-background border rounded-none flex items-center gap-1.5",
//                 isLive
//                   ? "border-green-500/30 text-green-600"
//                   : "border-border text-muted-foreground",
//               )}
//             >
//               <span className="relative flex h-1.5 w-1.5">
//                 {isLive && (
//                   <span className="animate-ping absolute inline-flex h-full w-full bg-green-500 opacity-75 rounded-none"></span>
//                 )}
//                 <span
//                   className={cn(
//                     "relative inline-flex h-1.5 w-1.5 rounded-none",
//                     isLive ? "bg-green-500" : "bg-muted-foreground/60",
//                   )}
//                 ></span>
//               </span>
//               {isLive ? "LIVE" : "BUILDING"}
//             </div>
//           </div>
//
//           {/* Video Dialog Trigger Area */}
//           {preview && (
//             <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//               <DialogTrigger className="absolute inset-0 flex items-center justify-center bg-background/10 opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-[1px] cursor-pointer rounded-none">
//                 <div className="p-2.5 bg-background border border-foreground text-foreground hover:bg-[#bb6b00] hover:text-white hover:border-[#bb6b00] transition-colors rounded-none">
//                   <PlayCircleIcon size={24} weight="bold" />
//                 </div>
//               </DialogTrigger>
//               <DialogPopup className="max-w-4xl p-2 border border-foreground bg-background rounded-none shadow-2xl">
//                 <video
//                   ref={videoRef}
//                   src={preview}
//                   autoPlay
//                   loop
//                   controls
//                   className="w-full aspect-video rounded-none border border-border/60"
//                 />
//               </DialogPopup>
//             </Dialog>
//           )}
//         </div>
//
//         {/* DETAILS AND TYPOGRAPHY CONTENT */}
//         <div className="flex flex-col flex-1 space-y-3">
//           {/* Header Track */}
//           <div className="border-b border-border/40 pb-2">
//             <h3 className="text-xl font-black text-foreground uppercase tracking-tight truncate">
//               {title}
//             </h3>
//           </div>
//
//           {/* Balanced Project Description */}
//           <p className="text-xs text-muted-foreground font-sans leading-relaxed tracking-wide line-clamp-2">
//             {content}
//           </p>
//
//           {/* Clean Tag Layout */}
//           <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-1">
//             {skills.map((skill, i) => (
//               <span
//                 key={i}
//                 className="text-[9px] font-bold uppercase tracking-widest text-[#bb6b00]/80"
//               >
//                 //{skill}
//               </span>
//             ))}
//           </div>
//
//           {/* CARD ACTION CONTAINER */}
//           <div className="pt-4 border-t border-border/40 mt-auto flex items-center justify-between">
//             {/* Inline Social Handles Link Bar */}
//             <div className="flex items-center bg-background border border-border p-0.5 rounded-none">
//               {links.map((link, index) => (
//                 <div
//                   key={index}
//                   className="relative flex flex-col items-center"
//                   onMouseEnter={() => setHoveredIndex(index)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   <a
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 flex border border-transparent hover:border-border/60 hover:bg-secondary/40 hover:text-[#bb6b00] transition-all rounded-none"
//                   >
//                     <IconComponent icon={link.icon} />
//                   </a>
//                   <AnimatePresence>
//                     {hoveredIndex === index && (
//                       <CustomTooltip label={link.label} />
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//
//             {/* Case Study Forward Link */}
//             <Link
//               href={`/projects/${slug}`}
//               className="group/link flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:text-[#bb6b00] transition-colors"
//             >
//               VIEW_CASE_STUDY
//               <MdArrowRightAlt className="size-4 group-hover/link:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
//
// export { ProjectCard };

// Horizontal Card

"use client";

import { ProjectsProps } from "@/data/portfolio";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import {
  ExportIcon,
  GithubLogoIcon,
  LinkIcon,
  PlayCircleIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogPopup, DialogTrigger } from "../ui/dialog";
import Image from "next/image";
import { CustomTooltip } from "./custom-tooltip";

const ICONS: Record<string, React.ElementType> = {
  GithubLogoIcon,
  LinkIcon,
  ExportIcon,
};

const IconComponent = ({ icon }: { icon: string }) => {
  const Icon = ICONS[icon];
  return Icon ? <Icon weight="bold" className="size-4" /> : null;
};

const ProjectCard = ({
  img,
  title,
  content,
  isLive,
  skills,
  links,
  preview,
  slug,
  className,
}: ProjectsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isDialogOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isDialogOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative w-full bg-background font-mono select-none border border-border/80 rounded-none",
        className,
      )}
    >
      {/* Sharp Linear Offset Accent on Hover */}
      <div className="absolute inset-0 border border-[#bb6b00]/60 translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-0" />

      {/* Responsive Horizontal Layout Core */}
      <div className="relative bg-background p-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full z-10">
        {/* LEFT COMPONENT: Media Box Track (Occupies 5 columns on desktop) */}
        <div className="relative col-span-1 md:col-span-5 w-full aspect-video border border-border/20 bg-secondary/10 overflow-hidden rounded-none">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover grayscale contrast-[1.10] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
          />

          {/* Clean Status Badge */}
          <div className="absolute top-2.5 right-2.5 z-20">
            <div
              className={cn(
                "px-2 py-1 text-[9px] font-bold uppercase tracking-wider bg-background border rounded-none flex items-center gap-1.5",
                isLive
                  ? "border-green-500/30 text-green-600"
                  : "border-border text-muted-foreground",
              )}
            >
              <span className="relative flex h-1.5 w-1.5">
                {isLive && (
                  <span className="animate-ping absolute inline-flex h-full w-full bg-green-500 opacity-75 rounded-none"></span>
                )}
                <span
                  className={cn(
                    "relative inline-flex h-1.5 w-1.5 rounded-none",
                    isLive ? "bg-green-500" : "bg-muted-foreground/60",
                  )}
                ></span>
              </span>
              {isLive ? "LIVE" : "BUILDING"}
            </div>
          </div>

          {/* Video Dialog Trigger Area */}
          {preview && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger className="absolute inset-0 flex items-center justify-center bg-background/10 opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-[1px] cursor-pointer rounded-none">
                <div className="p-2.5 bg-background border border-foreground text-foreground hover:bg-[#bb6b00] hover:text-white hover:border-[#bb6b00] transition-colors rounded-none">
                  <PlayCircleIcon size={24} weight="bold" />
                </div>
              </DialogTrigger>
              <DialogPopup className="max-w-4xl p-2 border border-foreground bg-background rounded-none shadow-2xl">
                <video
                  ref={videoRef}
                  src={preview}
                  autoPlay
                  loop
                  controls
                  className="w-full aspect-video rounded-none border border-border/60"
                />
              </DialogPopup>
            </Dialog>
          )}
        </div>

        {/* RIGHT COMPONENT: Title, Description, Skills & Action row (Occupies 7 columns on desktop) */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-between h-full space-y-4 md:space-y-0 min-h-[160px]">
          {/* Header Track */}
          <div className="border-b border-border/40 pb-2">
            <h3 className="text-xl font-black text-foreground uppercase tracking-tight truncate">
              {title}
            </h3>
          </div>

          {/* Project Summary Description */}
          <p className="text-xs text-muted-foreground font-sans leading-relaxed tracking-wide line-clamp-2 md:my-2">
            {content}
          </p>

          {/* Clean Tech Stack Tags Layout */}
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="text-[9px] font-bold uppercase tracking-widest text-[#bb6b00]/80"
              >
                //{skill}
              </span>
            ))}
          </div>

          {/* Footer Interactive Actions Section */}
          <div className="pt-4 border-t border-border/40 flex items-center justify-between">
            {/* Action Bar Links */}
            <div className="flex items-center bg-background p-0.5 rounded-none">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 flex border border-transparent hover:border-border/60 hover:bg-secondary/40 hover:text-[#bb6b00] transition-all rounded-none"
                  >
                    <IconComponent icon={link.icon} />
                  </a>
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <CustomTooltip label={link.label} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* View Case Study Trigger Link */}
            <Link
              href={`/projects/${slug}`}
              className="group/link flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:text-[#bb6b00] transition-colors"
            >
              VIEW_CASE_STUDY
              <MdArrowRightAlt className="size-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { ProjectCard };
