import { cn } from "@/lib/utils";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { WakaTime } from "../core/waka-time";

const AboutMe = () => {
  return (
    <Container className={cn("my-20 px-6", "lg:px-0")}>
      <SectionHeading subHeading="About" heading="Me" />
      <div className="flex flex-col md:flex-row md:items-center gap-5 mt-5 md:mt-10">
        <img
          src="/assets/about-me.jpeg"
          className="rounded-md w-50 h-50 object-cover object-center"
        />
        <div className="flex flex-col gap-5">
          <div className="md:hidden">
            <WakaTime />
          </div>
          <div className="text-muted-custom text-[17px] tracking-wide">
            I am an undergraduate and a full-stack developer. I spend my time
            working on web apps and learning how to make them work better, both
            on the front end and the back end. I like understanding how things
            are built instead of just using them, and most of what I know comes
            from sitting down and actually working on projects.
          </div>
          <div className="hidden md:block">
            <WakaTime />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { AboutMe };
