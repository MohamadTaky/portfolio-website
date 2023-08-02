import HtmlLogo from "public/html-logo.svg";
import CssLogo from "public/css-logo.svg";
import JavascriptLogo from "public/javascript-logo.svg";
import ReactLogo from "public/react-logo.svg";
import NextjsLogo from "public/nextjs-logo.svg";
import TailwindcssLogo from "public/tailwindcss-logo.svg";
import TypescriptLogo from "public/typescript-logo.svg";
import Section from "@/components/Section";

export default function MySkills() {
  return (
    <Section className="mt-0 pt-8" id="skills">
      <h2 className="mx-auto w-fit border-b-2 border-black pb-2 text-3xl font-semibold">My skills</h2>
      <ul className="mx-auto grid w-fit grid-cols-1 justify-items-center gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <li className="flex aspect-square w-36 flex-col items-center justify-between rounded-lg border p-2 shadow-md">
          <HtmlLogo className="h-20 w-20" />
          HTML
        </li>
        <li className="flex aspect-square w-36 flex-col items-center justify-between rounded-lg border p-2 shadow-md">
          <CssLogo className="h-20 w-20" />
          CSS
        </li>
        <li className="flex aspect-square w-36 flex-col items-center justify-between rounded-lg border p-2 shadow-md">
          <JavascriptLogo className="h-20 w-20" />
          JavaScript
        </li>
        <li className="flex aspect-square w-36 flex-col items-center justify-between rounded-lg border p-2 shadow-md">
          <TailwindcssLogo className="h-20 w-20" />
          Tailwind CSS
        </li>
        <li className="flex aspect-square w-36 flex-col items-center justify-between rounded-lg border p-2 shadow-md">
          <ReactLogo className="h-20 w-20" />
          React
        </li>
        <li className="flex aspect-square w-36 flex-col items-center justify-between rounded-lg border p-2 shadow-md">
          <NextjsLogo className="h-20 w-20" />
          Next.js 13
        </li>
        <li className="flex aspect-square w-36 flex-col items-center justify-between rounded-lg border p-2 shadow-md">
          <TypescriptLogo className="h-20 w-20" />
          Typescript
        </li>
      </ul>
    </Section>
  );
}
