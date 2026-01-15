import { Container } from "@/components/core/Container";
import { ProjectCard } from "@/components/core/project-card";
import { projects } from "@/data/portfolio";
import { AnimatedWrapper } from "@/lib/animated-wrapper";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <AnimatedWrapper>
      <Container className={cn("px-6 pt-10 pb-30", "md:py-30", "lg:px-0")}>
        <div className="font-hanken text-4xl text-foreground font-bold text-center border-b border-dashed border-border pb-6">
          Projects
        </div>
        <div
          className={cn(
            "grid grid-cols-1 mt-10 gap-10",
            "md:grid-cols-2 md:mt-15",
            "lg:gap-12",
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
