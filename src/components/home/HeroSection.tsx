import Button from "@/components/shared/Button";
import { GithubIcon, LinkedinIcon, TriangleIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import HeroImage from "public/images/hero-background.jpg";
import Link from "next/link";
import TypeWriter from "@/components/shared/Typewriter";

export default function HeroSection() {
  return (
    <section className="relative flex h-[80vh] flex-col place-items-center items-center justify-center border-b-2 border-indigo-600">
      <Image priority src={HeroImage} alt="" className="absolute -z-20 h-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/70" />
      <div className="my-auto space-y-4 text-center text-white">
        <h1 className="text-2xl md:text-4xl">
          <TypeWriter
            className="block p-2 text-start text-xl text-indigo-600 md:text-2xl"
            interval={0.07}
            text="Hello world !"
          />
          I&apos;m <span className="text-indigo-600">Mohamad Taky</span>
          <br />
          Front-end web developer.
        </h1>
        <p className="text-indigo-600">
          <MapPinIcon className="mb-1 inline-block" /> Hama - Syria
        </p>
        <Button asChild variant="inverted" className="group mx-auto mt-auto">
          <Link href="/#skills">
            View more
            <TriangleIcon
              size="10"
              className="rotate-180 fill-current transition-transform group-hover:translate-y-0.5"
            />
          </Link>
        </Button>
      </div>
      <ul className="mb-2 flex justify-center gap-4">
        <li>
          <Link target="_blank" href="https://github.com/MohamadTaky">
            <GithubIcon size="28" className="fill-gray-300 stroke-none transition hover:fill-white" />
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://linkedin.com/in/mohamad-taky">
            <LinkedinIcon size="28" className="fill-gray-300 stroke-none transition hover:fill-blue-700" />
          </Link>
        </li>
      </ul>
    </section>
  );
}
