import { Container } from "@/components/core/Container";
import { AboutMe } from "@/components/homeScreen/about-me";
import { Blogs } from "@/components/homeScreen/blogs";
import { Hero } from "@/components/homeScreen/hero";
import { Projects } from "@/components/homeScreen/projects";
import { Skills } from "@/components/homeScreen/skills";

export default function HomePage() {
  return (
    <Container className="bg-background pb-20">
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Blogs />
    </Container>
  );
}
