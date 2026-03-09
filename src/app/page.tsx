import { Container } from "@/components/core/Container";
import { WakaTime } from "@/components/core/waka-time";
import { AboutMe } from "@/components/homeScreen/about-me";
import { Blogs } from "@/components/homeScreen/blogs";
import { Hero } from "@/components/homeScreen/hero";
import { Projects } from "@/components/homeScreen/projects";
import { Quotes } from "@/components/homeScreen/quotes";
import { Skills } from "@/components/homeScreen/skills";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <Container
      className={cn(
        "bg-background pb-20 flex flex-col gap-14 px-6",
        "md:gap-20 md:mt-16",
        "lg:px-0 lg:gap-30",
      )}
    >
      <Hero />
      <Skills />
      <Projects />
      <AboutMe wakaComponent={<WakaTime />} />
      {/* <Blogs /> */}
      {/* <Quotes /> */}
    </Container>
  );
}
