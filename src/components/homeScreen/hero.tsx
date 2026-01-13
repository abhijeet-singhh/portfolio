"use client";

import { Container } from "../core/Container";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { CgNotes } from "react-icons/cg";
import { cn } from "@/lib/utils";
import { personalInfo, SocialLinkProps, socialLinks } from "@/data/personal";
import { CustomTooltip } from "../core/custom-tooltip";
import { MdEmail } from "react-icons/md";
import { XLogoIcon } from "@phosphor-icons/react";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container
      className={cn(
        "flex flex-col justify-center px-6 w-full",
        "lg:flex lg:flex-row lg:items-center lg:justify-between lg:border-b lg:border-border lg:pb-10 lg:px-0",
      )}
    >
      {/* Card */}
      <div
        className={cn(
          "h-fit relative overflow-hidden",
          "flex items-center gap-3",
          "lg:flex lg:flex-col lg:items-center lg:w-[310px] lg:py-[20px] lg:bg-background-card-custom lg:rounded-2xl",
        )}
      >
        <div
          className={cn(
            "w-fit h-36 overflow-hidden rounded-2xl border",
            "md:h-40",
            "lg:h-fit",
          )}
        >
          <img
            src={personalInfo.image}
            alt="ProfileImage"
            className={cn("w-36", "md:w-40", "lg:w-64")}
          />
        </div>
        <div className={cn("flex flex-col gap-3", "lg:items-center")}>
          <div
            className={cn(
              "font-caveat font-semibold text-[26px] text-foreground",
              "md:text-[36px]",
              "lg:text-gray-800",
            )}
          >
            {personalInfo.name}
          </div>
          <div
            className={cn(
              "flex items-center gap-2 border border-green-500 rounded-md px-2 py-1 w-fit",
              "md:px-3 md:py-2",
              "lg:border-green-600",
            )}
          >
            <span
              className={cn(
                "w-2 h-2 rounded-full bg-green-500 animate-pulse",
                "md:w-3 md:h-3",
                "lg:bg-green-600",
              )}
            ></span>
            <span
              className={cn(
                "md:hidden text-green-500 text-sm font-semibold leading-none mb-[2px]",
                "lg:text-green-600",
              )}
            >
              Available
            </span>
            <span
              className={cn(
                "hidden md:block text-green-500 text-sm font-semibold leading-none mb-[2px]",
                "lg:text-green-600",
              )}
            >
              Available for remote roles
            </span>
          </div>
          {/* Social Icons */}
          <div
            className={cn(
              "flex items-center justify-center text-[#bb6b00] gap-1 -ml-2",
              "md:gap-3",
              "lg:ml-0 lg:mt-6",
            )}
          >
            {socialLinks.map((item: SocialLinkProps, index: number) => {
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
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="hover:bg-background-alt p-2 rounded-lg cursor-pointer transition-colors duration-300"
                    aria-label={item.label}
                  >
                    <Icon weight="bold" className="size-6" />
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

      {/* Text Area */}
      <div className="flex flex-col -space-y-4 pb-8">
        <div
          className={cn(
            "flex flex-row gap-3 mt-5",
            "md:gap-6",
            "lg:gap-0 lg:flex-col lg:justify-center lg:-space-y-12",
          )}
        >
          <span
            className={cn(
              "font-bold text-[30px] text-shadow-muted-foreground tracking-tighter",
              "md:text-[60px]",
              "lg:text-[100px] lg:leading-none",
            )}
          >
            FULLSTACK
          </span>
          <span
            className={cn(
              "font-bold text-[30px] text-[#353334] tracking-tighter",
              "md:text-[60px]",
              "lg:text-[100px] lg:mt-5",
            )}
          >
            DEVELOPER
          </span>
        </div>
        <p
          className={cn(
            "font-hanken text-muted-foreground text-[18px] mt-5",
            "md:mt-2",
            "lg:w-[480px] lg:mt-0 lg:ml-2",
          )}
        >
          {personalInfo.bio}
        </p>
        <div
          className={cn(
            "flex justify-start items-center gap-4 mt-10",
            "md:gap-6",
            "lg:gap-8 lg:mt-15 lg:ml-4",
          )}
        >
          <button
            className={cn(
              "bg-secondary hover:bg-foreground/12 border border-border text-foreground/90 px-3 py-1 rounded-lg cursor-pointer",
              "md:px-4 md:py-1.5",
            )}
          >
            <a
              href="https://x.com/abhijeet_tw"
              target="_bland"
              rel="noopener noreferer"
              className="flex justify-center items-center gap-1"
            >
              {/* <CgNotes className={cn("size-3 rotate-20", "md:size-3.5")} /> */}
              {/* Resume */}
              <XLogoIcon weight="bold" className={cn("size-4")} />
              Twitter
            </a>
          </button>
          <button
            className={cn(
              "bg-[#bb6b00]/10 hover:bg-[#bb6b00]/20 text-[#bb6b00] border border-[#bb6b00]/50 px-3 py-1 rounded-lg cursor-pointer transition-colors duration-200",
              "md:px-4 md:py-1.5",
            )}
          >
            <a
              href="mailto:abhijeetxdev@gmail.com"
              className="flex justify-center items-center gap-2"
            >
              <MdEmail className={cn("size-4 mt-0.5", "md:size-4.5")} />
              Send an email
            </a>
          </button>
        </div>
      </div>
    </Container>
  );
};

export { Hero };
