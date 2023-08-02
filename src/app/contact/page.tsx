import Button from "@/components/Button";
import Input from "@/components/Input";
import Section from "@/components/Section";
import { GithubIcon, LinkedinIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-stretch gap-4">
          <h2 className="w-fit border-b-2 border-black pb-2 text-3xl font-semibold">Contact me</h2>
          <Input placeholder="Email" id="email" />
          <Input placeholder="Name" id="name" />
          <textarea className="scrollbar-rounded-md min-h-[200px] resize-none rounded-md border-none outline-none !ring-2 ring-black/50 scrollbar-thin focus:ring-black" />
          <Button className="w-32">Send</Button>
        </div>
        <div className="space-y-4">
          <h2 className="w-fit border-b-2 border-black pb-2 text-3xl font-semibold">Links</h2>
          <ul className="flex flex-col items-start justify-center gap-8">
            <li>
              <Link
                className="group flex items-center gap-2"
                target="_blank"
                href="https://wa.me/+963959953032"
              >
                <PhoneCallIcon className="box-content inline h-5 w-5 rounded-full bg-black/80 fill-current p-3 text-gray-500 transition group-hover:text-green-500" />
                +963959953032
              </Link>
            </li>
            <li>
              <Link
                className="group flex items-center gap-2"
                target="_blank"
                href="https://github.com/MohamadTaky"
              >
                <GithubIcon className="box-content inline h-5 w-5 rounded-full bg-black/80 fill-current p-3 text-gray-500 transition group-hover:text-white" />
                Github
              </Link>
            </li>
            <li>
              <Link
                className="group flex items-center gap-2"
                target="_blank"
                href="https://www.instagram.com/mohamad__taky/"
              >
                <div className="box-content inline rounded-full bg-black/80 p-3">
                  <LinkedinIcon className="h-5 w-5 fill-current text-gray-500 transition group-hover:text-blue-700" />
                </div>
                Linked in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
