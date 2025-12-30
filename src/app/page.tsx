import { Container } from "@/components/core/Container";
import { Navbar } from "@/components/core/navbar";
import { Hero } from "@/components/homeScreen/hero";

export default function HomePage() {
  return (
    <Container className="bg-background">
      <Navbar />
      <Hero />
    </Container>
  );
}
