import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import CustomLink from "@/components/shared/CustomLink";

export default function Footer() {
  return (
    <footer className="grid gap-4 bg-black p-4 pt-8 text-white md:grid-cols-2 md:justify-items-center">
      <div>
        <h3 className="mb-4 text-xl">Navigation</h3>
        <ul className="space-y-4 pl-4 text-gray-400">
          <li>
            <CustomLink className="text-current hover:text-white" href="/">
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink className="text-current hover:text-white" href="/projects">
              Projects
            </CustomLink>
          </li>
          <li>
            <CustomLink className="text-current hover:text-white" href="/about">
              About
            </CustomLink>
          </li>
          <li className="text-current transition hover:text-white">
            <CustomLink href="/contact">Contact</CustomLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-4 text-xl">Contact Info</h3>
        <ul className="space-y-4 text-gray-400">
          <li>
            <CustomLink
              target="_blank"
              className="text-current hover:text-white"
              href="https://github.com/MohamadTaky"
            >
              <GithubIcon className="mb-1 mr-2 inline-block fill-current stroke-current" />
              Github
            </CustomLink>
          </li>
          <li>
            <CustomLink
              target="_blank"
              className="text-current hover:text-white"
              href="https://linkedin.com/in/mohamad-taky"
            >
              <LinkedinIcon className="mb-1 mr-2 inline-block fill-current stroke-current group-hover:text-blue-500" />
              Linkedin
            </CustomLink>
          </li>
          <li>
            <CustomLink
              target="_blank"
              className="text-current hover:text-white"
              href="mailto:mohamadtaky2002@gmail.com"
            >
              <MailIcon className="mb-1 mr-2 inline-block stroke-current group-hover:text-red-500" />
              mohamadtaky2002@gmail.com
            </CustomLink>
          </li>
          <li>
            <CustomLink
              target="_blank"
              className="text-current hover:text-white"
              href="https://wa.me/+963959953032"
            >
              <PhoneIcon className="mb-1 mr-2 inline-block fill-current stroke-current group-hover:text-green-500" />
              +963959953032
            </CustomLink>
          </li>
        </ul>
      </div>
      <div className="relative mx-auto h-1 w-3/4 rounded-sm bg-indigo-700 md:col-span-2 md:w-1/2">
        <div className="absolute left-1/2 top-1/2 box-content h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-black bg-indigo-700" />
      </div>
      <p className="text-center md:col-span-2">&copy; 2023 Mohamad Taky</p>
    </footer>
  );
}
