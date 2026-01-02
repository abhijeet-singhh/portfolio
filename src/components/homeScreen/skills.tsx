import { skills } from "@/data/portfolio";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Skills = () => {
  return (
    <Container
      className={cn("flex flex-col justify-center mt-20 px-6", "lg:px-0")}
    >
      <SectionHeading subHeading="Technologies &" heading="Skills" />
      <div className={cn("flex items-center gap-2 flex-wrap mt-5", "lg:gap-3")}>
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <Button
              key={skill.id}
              variant="secondary"
              className={cn(
                "flex items-center border border-border text-xs",
                "lg:text-sm",
              )}
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
