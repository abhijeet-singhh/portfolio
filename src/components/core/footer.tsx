import { cn } from "@/lib/utils";
import { Container } from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container
      className={cn(
        "flex flex-col items-center px-6 font-hanken mb-20",
        "lg:px-0 lg:mb-20 lg:mt-10",
      )}
    >
      <div className="text-[13px] text-muted-custom">
        Designed & Developed by{" "}
        <span className="font-bold">Abhijeet Singh</span>
      </div>
      <div className="text-[13px] text-muted-custom">
        © {currentYear}. All rights reserved.
      </div>
    </Container>
  );
};
export { Footer };
