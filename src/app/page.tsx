import { Container } from "@/components/core/Container";
import { Navbar } from "@/components/core/navbar";
import { StarButton } from "@/components/core/star-button";
import { Hero } from "@/components/homeScreen/hero";
import { Projects } from "@/components/homeScreen/projects";
import { Skills } from "@/components/homeScreen/skills";

export default function HomePage() {
  return (
    <Container className="bg-background">
      <StarButton />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </Container>
  );
}
