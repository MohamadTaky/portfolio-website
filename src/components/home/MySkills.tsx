import HtmlLogo from "public/images/html-logo.svg";
import CssLogo from "public/images/css-logo.svg";
import JavascriptLogo from "public/images/javascript-logo.svg";
import ReactLogo from "public/images/react-logo.svg";
import NextjsLogo from "public/images/nextjs-logo.svg";
import TailwindcssLogo from "public/images/tailwindcss-logo.svg";
import TypescriptLogo from "public/images/typescript-logo.svg";
import Section from "@/components/shared/Section";

export default function MySkills() {
  return (
    <Section container className="mt-0 pt-8" id="skills">
      <h2 className="mx-auto w-fit border-b-2 border-black pb-2 text-3xl font-semibold">My skills</h2>
      <ul className="mx-auto grid w-fit grid-cols-2 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border p-2 shadow-md sm:w-36">
          <HtmlLogo className="h-20 w-20" />
          HTML
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border p-2 shadow-md sm:w-36">
          <CssLogo className="h-20 w-20" />
          CSS
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border p-2 shadow-md sm:w-36">
          <JavascriptLogo className="h-20 w-20" />
          JavaScript
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border p-2 shadow-md sm:w-36">
          <TailwindcssLogo className="h-20 w-20" />
          Tailwind CSS
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border p-2 shadow-md sm:w-36">
          <ReactLogo className="h-20 w-20" />
          React
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border p-2 shadow-md sm:w-36">
          <NextjsLogo className="h-20 w-20" />
          Next.js 13
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border p-2 shadow-md sm:w-36">
          <TypescriptLogo className="h-20 w-20" />
          Typescript
        </li>
      </ul>
    </Section>
  );
}
