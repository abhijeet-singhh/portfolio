import { cn } from "@/lib/utils";
import { Container } from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className={cn("px-6 mb-10", "md:mb-0", "lg:px-0")}>
      <footer className="relative w-full border-t border-border/40 bg-background/50 backdrop-blur-sm">
        {/* Top Gradient Line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

        <div
          className={cn(
            "flex flex-col md:flex-row items-center justify-between",
            "py-10 font-hanken",
          )}
        >
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start text-[14px] text-muted-foreground gap-1.5 opacity-90">
            <span>
              Designed & Developed by{" "}
              <span className="font-bold text-foreground hover:text-primary transition-colors cursor-default">
                Abhijeet Singh
              </span>
            </span>

            <span className="text-[12px] opacity-70 tracking-wide font-medium">
              Building premium digital experiences
            </span>
          </div>

          {/* Right Section */}
          <div className="mt-4 md:mt-0 text-[13px] text-muted-foreground font-medium opacity-80">
            © {currentYear}. All rights reserved.
          </div>
        </div>
      </footer>
    </Container>
  );
};

export { Footer };
