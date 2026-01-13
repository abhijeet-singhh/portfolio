import { Container } from "@/components/core/Container";
import { HoverGroup } from "@/components/core/hover-group";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import {
  GithubLogoIcon,
  ExportIcon,
  LinkIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GoDotFill } from "react-icons/go";

// 1️⃣ Static params
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.content,
    openGraph: {
      title: project.title,
      description: project.content,
      images: [
        {
          url: project.img || "/assets/seven.png",
        },
      ],
    },
  };
}

// map string names to actual components
const ICONS: Record<string, React.ElementType> = {
  GithubLogoIcon,
  LinkIcon,
  ExportIcon,
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();
  const {
    img,
    title,
    isLive,
    content,
    detailedContent,
    skills,
    links,
    preview,
  } = project;

  return (
    <Container
      className={cn(
        "flex flex-col gap-5 pt-10 pb-30 font-hanken text-foreground px-6",
        "md:py-30",
        "lg:px-0",
      )}
    >
      {/* Preview */}
      <div className="aspect-video w-full">
        {preview ? (
          <video
            className="h-full w-full object-cover"
            src={preview}
            autoPlay
            loop
            controls
          />
        ) : (
          <img
            src={img}
            className="object-cover object-center w-full h-full border border-border"
          />
        )}
      </div>

      {/* Links */}
      <div className="flex w-full h-fit border-b border-dashed border-border overflow-hidden">
        <HoverGroup
          className="w-full border-b border-dashed border-border"
          itemClassName="flex-1"
          hoverClassName="bg-muted"
        >
          {links?.map((link, index) => {
            const Icon = ICONS[link.icon];

            return link.type === "link" && link.href ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center gap-1 flex-1 text-sm p-3 border-r border-dashed border-border",
                  "md:p-4 md:gap-2 md:text-[16px]",
                )}
              >
                <Icon weight="bold" className="size-4 text-muted-custom" />
                {link.label}
              </a>
            ) : (
              <button
                key={index}
                className={cn(
                  "flex items-center justify-center gap-1 flex-1 text-sm mx-auto p-3 cursor-pointer",
                  "md:p-4 md:gap-2 md:text-[16px]",
                )}
              >
                <Icon weight="bold" className="size-4 text-muted-custom" />
                {link.label}
              </button>
            );
          })}
        </HoverGroup>
      </div>

      {/* Description */}
      <div className="flex flex-col">
        {/* Title */}
        <div className={cn("flex items-center gap-4 mt-3", "md:gap-6 md:mt-5")}>
          <span className="text-3xl font-bold">{title}</span>
          {isLive ? (
            <div className="select-none font-medium text-xs w-fit pl-1.5 pr-2.5 py-0.5 gap-0.5 rounded-md flex items-center bg-green-500/15">
              <span className="animate-pulse">
                <GoDotFill className="text-green-500" />
              </span>
              Live
            </div>
          ) : (
            <div className="select-none font-medium text-xs w-fit pl-1.5 pr-2.5 py-0.5 gap-0.5 rounded-md flex items-center bg-amber-500/17">
              <span className="animate-pulse">
                <GoDotFill className="text-amber-500" />
              </span>
              Building
            </div>
          )}
        </div>
        {/* Content */}
        <div
          dangerouslySetInnerHTML={{
            __html: detailedContent || content,
          }}
          className="mt-5 text-muted-custom text-[16px] md:tracking-wide"
        />

        {/* Technologies */}
        <div className={cn("flex flex-col gap-5 mt-7", "md:mt-10")}>
          <span className="text-xl font-bold">Stacks used</span>
          <div className={cn("flex items-center flex-wrap gap-3", "lg:gap-5")}>
            {skills?.map((skill, index) => (
              <a
                key={index}
                href={`https://www.google.com/search?q=${skill}`}
                target="_blank"
                rel="noopener noreferer"
              >
                <Button
                  variant="secondary"
                  className="flex items-center border border-muted text-sm text-muted-custom hover:border-zinc-500 transition-colors duration-200"
                >
                  {skill}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
