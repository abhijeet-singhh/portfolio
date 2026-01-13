import { Container } from "@/components/core/Container";
import { AboutMe } from "@/components/homeScreen/about-me";
import { Blogs } from "@/components/homeScreen/blogs";
import { Hero } from "@/components/homeScreen/hero";
import { Projects } from "@/components/homeScreen/projects";
import { Quotes } from "@/components/homeScreen/quotes";
import { Skills } from "@/components/homeScreen/skills";

export default function HomePage() {
  return (
    <Container className="bg-background pt-10 pb-30 md:py-30">
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Blogs />
      <Quotes />
    </Container>
  );
}
