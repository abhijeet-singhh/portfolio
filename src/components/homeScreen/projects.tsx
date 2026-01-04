import { projects } from "@/data/portfolio";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { ProjectCard } from "../core/project-card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Projects = () => {
  return (
    <Container className={cn("my-20 px-6", "lg:px-0")}>
      <SectionHeading subHeading="Featured" heading="Projects" />
      <div
        className={cn(
          "grid grid-cols-1 mt-10",
          "md:grid-cols-2 gap-5",
          "gap-11",
        )}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button variant="outline">Show all projects</Button>{" "}
      </div>
    </Container>
  );
};

export { Projects };
