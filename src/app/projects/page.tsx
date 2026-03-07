import { Container } from "@/components/core/Container";
import { ProjectCard } from "@/components/core/project-card";
import { projects } from "@/data/portfolio";
import { AnimatedWrapper } from "@/lib/animated-wrapper";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <AnimatedWrapper>
      <Container
        className={cn("px-6 pt-10 pb-30", "md:py-30", "lg:px-0", "relative")}
      >
        <span
          className="absolute top-14 md:top-20 left-1/2 -translate-x-1/2 
             text-[10vw] lg:text-[8vw] font-black text-foreground/5 leading-none 
             uppercase select-none -z-10 text-center"
        >
          PROJECTS
        </span>
        <div
          className={cn(
            "grid grid-cols-1 mt-28 gap-10",
            "md:grid-cols-2 md:mt-30",
            "lg:gap-12 lg:mt-36",
          )}
        >
          {projects.map((project) => (
            <AnimatedWrapper key={project.id} delay={0.15}>
              <ProjectCard {...project} />
            </AnimatedWrapper>
          ))}
        </div>
      </Container>
    </AnimatedWrapper>
  );
}
