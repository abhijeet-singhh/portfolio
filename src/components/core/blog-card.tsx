import { BlogsProps } from "@/data/portfolio";
import { MdArrowRightAlt } from "react-icons/md";
import { cn } from "@/lib/utils";
import { CalendarDotsIcon } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./Container";

const BlogCard = ({
  img,
  title,
  content,
  tags,
  date,
  link,
  className,
}: BlogsProps) => {
  return (
    <Container>
      <div
        className={cn(
          "flex flex-col bg-card-custom border border-accent box-border rounded-xl project-card-shadow",
          "lg:w-[400px] lg:h-[430px]",
          className,
        )}
      >
        {/* Image section */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferer"
          className="block relative w-full h-52 rounded-t-xl overflow-hidden"
        >
          {/* Image */}
          <img src={img} alt={title} className="w-full h-full object-cover" />
          {/* Gradient Overlay */}
          {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-950/70 via-zinc-950/30 to-transparent z-10"></div> */}
        </a>

        <div className="px-4 flex-1">
          {/* Title */}
          <div className="flex items-center justify-between mt-4">
            <h3 className="font-semibold text-2xl text-foreground">{title}</h3>
          </div>

          {/* Content */}
          <div className="text-muted-custom mt-4">{content}</div>

          {/* Tags */}
          <div className="flex items-center gap-1 mt-4 pb-5 select-none">
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="bg-muted px-2 py-0.5 rounded-md text-xs text-muted-custom w-fit"
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center my-2">
            {/* Left section Date */}
            <span className="flex items-center gap-1 text-muted-custom text-sm">
              <CalendarDotsIcon className="size-4" /> {date}
            </span>
            {/* Right section link */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferer"
              className="text-sm text-muted-custom flex items-center gap-0.5 w-fit ml-1"
            >
              Read More
              <MdArrowRightAlt className="size-5 mt-0.5" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { BlogCard };
