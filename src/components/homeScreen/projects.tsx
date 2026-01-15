import { projects } from "@/data/portfolio";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { ProjectCard } from "../core/project-card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatedWrapper } from "@/lib/animated-wrapper";

const Projects = () => {
  return (
    <AnimatedWrapper>
      <Container className={cn("mt-15 px-6", "md:mt-20", "lg:px-0")}>
        <SectionHeading subHeading="Featured" heading="Projects" />
        <div
          className={cn(
            "grid grid-cols-1 mt-10 gap-10",
            "md:grid-cols-2",
            "lg:gap-12",
          )}
        >
          {projects.map((project) => (
            <AnimatedWrapper key={project.id}>
              <ProjectCard {...project} />
            </AnimatedWrapper>
          ))}
        </div>
        <Link
          href="/projects"
          className="flex justify-center items-center mt-10"
        >
          <Button variant="outline">Show all projects</Button>
        </Link>
      </Container>
    </AnimatedWrapper>
  );
};

export { Projects };
