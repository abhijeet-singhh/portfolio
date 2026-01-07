import { cn } from "@/lib/utils";
import { Container } from "../core/Container";
import { SectionHeading } from "../core/section-heading";
import { blogs } from "@/data/portfolio";
import { BlogCard } from "../core/blog-card";
import { Button } from "../ui/button";

const Blogs = () => {
  return (
    <Container className={cn("mt-20 px-6", "lg:px-0")}>
      <SectionHeading subHeading="Featured" heading="Blogs" />
      <div
        className={cn(
          "grid grid-cols-1 mt-10 gap-10",
          "md:grid-cols-2",
          "lg:gap-23",
        )}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Button variant="outline">Show all blogs</Button>{" "}
      </div>
    </Container>
  );
};

export { Blogs };
