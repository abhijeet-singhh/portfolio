import { skills } from "@/data/portfolio";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { Button } from "../ui/button";

const Skills = () => {
  return (
    <Container className="mt-20 max-w-4xl">
      <SectionHeading subHeading="Technologies &" heading="Skills" />
      <div className="flex items-center gap-4 flex-wrap mt-5">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <Button
              key={skill.id}
              variant="secondary"
              className="flex items-center border border-border"
            >
              <Icon aria-hidden className="size-4" />
              {skill.text}
            </Button>
          );
        })}
      </div>
    </Container>
  );
};

export { Skills };
