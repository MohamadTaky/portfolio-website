import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";

type ProjectProps = {
  name: string;
  description: string;
  tags: string[];
  homepage: string;
};

export default function Project({ name, description, tags, homepage }: ProjectProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="space-y-4">
        <h3>
          {homepage ? (
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
          ) : (
            name
          )}
        </h3>
        {description && <p className="max-w-[60ch]" dangerouslySetInnerHTML={{ __html: description }} />}
        <hr className="w-3/4 pb-4" />
        <ul className="flex max-w-sm flex-wrap items-center gap-3">
          {tags.map((tag) => (
            <li className="rounded-full bg-black px-3 py-1.5 text-sm text-white" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-auto flex aspect-video w-full flex-col items-center rounded-md bg-red-500 p-2 shadow-lg shadow-black/30">
        <div className="m-auto">placeholder (screenshot)</div>
      </div>
    </div>
  );
}
