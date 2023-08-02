import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import GoogleLogo from "public/google-logo.svg";
import { TriangleIcon, GithubIcon, InstagramIcon, FacebookIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative grid h-4/5 grid-cols-1 justify-items-center border-b-2 border-gray-400 md:grid-cols-[auto_1fr]">
      <Image
        priority
        src="/hero-background.png"
        alt="background"
        fill
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="flex flex-col gap-4 p-4">
        <h1 className="p-4 text-xl font-bold !leading-loose text-white sm:text-2xl md:text-3xl">
          Hello world :&#41; <br />
          I'm Mohamad Taky, <br />
          Front end web developer.
        </h1>
        <Button asChild variant="inverted" className="group mx-auto mt-4">
          <Link href="/#skills">
            View more
            <TriangleIcon
              size="10"
              className="rotate-180 fill-current transition-transform group-hover:translate-y-0.5"
            />
          </Link>
        </Button>
        <div className="m-auto mb-0 flex justify-between gap-4">
          <Link target="_blank" href="https://github.com/MohamadTaky">
            <GithubIcon className="fill-gray-300 stroke-none transition hover:fill-white" />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/mohamad__taky">
            <InstagramIcon className="text-gray-300 transition hover:text-orange-500" />
          </Link>
          <Link target="_blank" href="https://www.facebook.com/mohamadtaky">
            <FacebookIcon className="fill-gray-300 stroke-none transition hover:fill-blue-500" />
          </Link>
          <Link target="_blank" href="https://www.facebook.com/mohamadtaky">
            <GoogleLogo className="h-6 w-6 fill-gray-300 stroke-none transition hover:fill-red-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
