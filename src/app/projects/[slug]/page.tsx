import { Container } from "@/components/core/Container";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import {
  GithubLogoIcon,
  ExportIcon,
  LinkIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} | Case Study` };
}

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
    <Container className="relative pt-10 md:pt-26 pb-32 font-hanken max-w-5xl px-6">
      {/* Header with Back & Live Status */}
      <div className="flex justify-between items-start md:items-center mb-12 gap-4">
        <Link
          href="/projects"
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-[#bb6b00] transition-colors"
        >
          <ArrowLeftIcon className="size-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                isLive ? "bg-green-400" : "bg-orange-400",
              )}
            />
            <span
              className={cn(
                "relative inline-flex rounded-full h-2 w-2",
                isLive ? "bg-green-500" : "bg-[#bb6b00]",
              )}
            />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            {isLive ? "Live System" : "Internal Build"}
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 md:gap-24 lg:gap-12">
        {/* Left Column: Title on top, Video below */}
        <div className="flex flex-col h-full justify-between">
          <div className="mb-10 md:mb-16 lg:mb-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none uppercase text-foreground mb-4">
              {title}
            </h1>
            <div className="h-1.5 w-24 md:w-44 bg-[#bb6b00] rounded-full mt-2 md:mt-4 lg:mt-6" />
          </div>

          <div className="relative w-full aspect-video rounded-[2.5rem]">
            {/* Rotated background behind video */}
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-[2.5rem] -rotate-3 -z-10" />

            <div className="relative w-full h-full rounded-[2.5rem] border-4 border-background shadow-xl overflow-hidden">
              {preview ? (
                <video
                  src={preview}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[2.5rem]"
                  controls
                />
              ) : (
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover grayscale-30"
                />
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Tech stack and links, bottom aligned and grows upward */}
        <div className="flex flex-col justify-end gap-10 lg:min-h-100 pb-1">
          {/* Technical Stack */}
          <section>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bb6b00] mb-4">
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills?.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-secondary/50 border border-border text-sm font-medium hover:border-[#bb6b00]/50 transition-colors select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Project Links */}
          <section>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bb6b00] mb-4">
              Project Links
            </h3>
            <div
              className={cn(
                "flex flex-col gap-3 border",
                "md:flex-row md:w-full",
                "lg:flex-col",
              )}
            >
              {links?.map((link, index) => {
                const Icon = ICONS[link.icon];
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="flex items-center justify-between p-4 rounded-2xl bg-foreground text-background hover:bg-[#bb6b00] hover:text-white transition-all group/btn duration-200 flex-1"
                  >
                    <div className="flex items-center gap-3">
                      <Icon weight="bold" className="size-5" />
                      <span className="font-bold uppercase text-xs tracking-widest">
                        {link.label}
                      </span>
                    </div>
                    <ExportIcon className="size-4 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Description full width */}
      <article
        className="mt-20 prose prose-invert max-w-none
        prose-p:text-muted-foreground prose-p:text-lg prose-p:leading-relaxed
        prose-headings:text-foreground prose-headings:font-black prose-headings:uppercase
        prose-strong:text-[#bb6b00] prose-strong:font-bold"
        dangerouslySetInnerHTML={{ __html: detailedContent || content }}
      />
    </Container>
  );
}
