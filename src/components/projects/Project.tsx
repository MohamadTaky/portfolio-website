import { GithubIcon, PlayIcon } from "lucide-react";
import Tooltip from "@/components/shared/Tooltip";
import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";

type ProjectProps = {
  name: string;
  description: string;
  tags?: { name: string; link: string }[];
  homepage: string;
  githubRepo: string;
  screenshots: string[];
};

export default function Project({ name, description, tags, homepage, githubRepo, screenshots }: ProjectProps) {
  return (
    <article className="flex flex-col gap-4 rounded-md border p-4 shadow-md">
      <div className="flex items-center gap-4">
        <h3 className="mr-auto text-xl font-semibold">{name}</h3>
        <Tooltip tooltip="Live demo">
          <Link target="_blank" href={homepage}>
            <PlayIcon className="box-content rounded-full border fill-black p-2 shadow-sm" />
          </Link>
        </Tooltip>
        <Tooltip tooltip="Github repo">
          <Link target="_blank" href={githubRepo}>
            <GithubIcon className="box-content rounded-full border fill-black p-2 shadow-sm" />
          </Link>
        </Tooltip>
      </div>
      <figure className="relative -mx-4 aspect-video overflow-hidden">
        <Image
          sizes="100vw, (min-width: 768px) 50vw, (min-width: 1200px) 33vw"
          className="object-contain"
          fill
          src={screenshots[0]}
          alt={screenshots[0]}
        />
      </figure>
      <p className="max-w-[70ch] leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
      <ul className="mt-auto">
        {tags?.map(({ name, link }) => (
          <li key={name} className="mr-2 mt-2 inline-block">
            <Button size="sm" asChild>
              <Link target="_blank" href={link}>
                {name}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </article>
  );
}
