import { Container } from "@/components/core/Container";
import { ProjectCard } from "@/components/core/project-card";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <Container className="pt-10 pb-30 md:py-30">
      <div className="font-hanken text-4xl text-foreground font-bold text-center border-b border-dashed border-border pb-6">
        Projects
      </div>
      <div
        className={cn(
          "grid grid-cols-1 mt-15 gap-10",
          "md:grid-cols-2",
          "lg:gap-12",
        )}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Container>
  );
}
