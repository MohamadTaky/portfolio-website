import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";
import Image from "next/image";

type ProjectProps = {
  name: string;
  description: string;
  tags: string[];
  homepage: string;
  screenshots: string[];
};

export default function Project({ name, description, tags, homepage, screenshots }: ProjectProps) {
  return (
    <div className="space-y-4">
      <h3>
        <Button size="lg" variant="ghost" asChild className="group items-start gap-1 p-0">
          <Link href={homepage} target="_blank">
            {name}
            <ArrowUpRight
              size="14"
              strokeWidth="3"
              className="mt-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </Button>
      </h3>
      {description && (
        <p className="max-w-[80ch] leading-7" dangerouslySetInnerHTML={{ __html: description }} />
      )}

      <ul className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <li className="rounded-full bg-black px-3 py-1.5 text-sm text-white" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {screenshots.map((screenshot) => (
          <li
            key={screenshot}
            className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md shadow-black/30"
          >
            <Image
              quality={90}
              className="max-w-full object-contain"
              fill
              src={screenshot}
              alt={screenshot.split("/").at(-1)!}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
