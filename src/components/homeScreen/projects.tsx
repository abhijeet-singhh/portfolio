import { projects } from "@/data/portfolio";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { ProjectCard } from "../core/project-card";

const Projects = () => {
  return (
    <Container className="my-20">
      <SectionHeading subHeading="Featured" heading="Projects" />
      <div className="grid grid-cols-2 gap-11 px-1">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Container>
  );
};

export { Projects };
