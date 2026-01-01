import { Container } from "@/components/core/Container";
import { Navbar } from "@/components/core/navbar";
import { StarButton } from "@/components/core/star-button";
import { Hero } from "@/components/homeScreen/hero";
import { Skills } from "@/components/homeScreen/skills";

export default function HomePage() {
  return (
    <Container className="bg-background">
      <StarButton />
      <Navbar />
      <Hero />
      <Skills />
    </Container>
  );
}
