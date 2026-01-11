import { skills } from "@/data/portfolio";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Skills = () => {
  return (
    <Container
      className={cn(
        "flex flex-col justify-center mt-7 px-6",
        "md:mt-10",
        "lg:px-0 lg:mt-20",
      )}
    >
      <SectionHeading subHeading="Technologies &" heading="Skills" />
      <div className={cn("flex items-center gap-2 flex-wrap mt-5", "lg:gap-3")}>
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <a
              key={skill.id}
              href={`https://www.google.com/search?q=${skill.text}`}
              target="_blank"
              rel="noopener noreferer"
            >
              <Button
                variant="secondary"
                className={cn(
                  "flex items-center border border-border text-xs hover:border-zinc-500 transition-colors duration-200",
                  "lg:text-sm",
                )}
              >
                <Icon aria-hidden className="size-4" />
                {skill.text}
              </Button>
            </a>
          );
        })}
      </div>
    </Container>
  );
};

export { Skills };
