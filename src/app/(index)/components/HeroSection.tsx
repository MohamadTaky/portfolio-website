import Button from "@/components/Button";
import Link from "next/link";
import GoogleLogo from "public/google-logo.svg";
import { TriangleIcon, GithubIcon, InstagramIcon, FacebookIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex h-full w-fit flex-col items-center gap-4">
      <h1 className="mt-12 text-4xl font-bold leading-relaxed">
        Hello world :&#41; <br />
        I'm Mohamad Taky, <br />
        Front end web developer.
      </h1>
      <Button className="group mx-auto flex">
        View more{" "}
        <TriangleIcon
          size="10"
          className="rotate-180 fill-current transition-transform group-hover:translate-y-0.5"
        />
      </Button>
      <div className="mt-auto flex justify-between gap-4">
        <Link target="_blank" href="https://github.com/MohamadTaky">
          <GithubIcon className="fill-gray-400 stroke-none transition hover:fill-gray-200 " />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/mohamad__taky">
          <InstagramIcon className="text-gray-400 transition hover:text-orange-400" />
        </Link>
        <Link target="_blank" href="https://www.facebook.com/mohamadtaky">
          <FacebookIcon className="fill-gray-400 stroke-none transition hover:fill-blue-400" />
        </Link>
        <Link target="_blank" href="https://www.facebook.com/mohamadtaky">
          <GoogleLogo className="h-6 w-6 fill-gray-400 stroke-none transition hover:fill-red-400" />
        </Link>
      </div>
    </section>
  );
}
