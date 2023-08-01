import HtmlLogo from "public/html-logo.svg";
import CssLogo from "public/css-logo.svg";
import JavascriptLogo from "public/javascript-logo.svg";
import ReactLogo from "public/react-logo.svg";
import NextjsLogo from "public/nextjs-logo.svg";
import TailwindcssLogo from "public/tailwindcss-logo.svg";
import TypescriptLogo from "public/typescript-logo.svg";

export default function MySkills() {
  return (
    <>
      <h2 className="mx-auto mb-4 mt-32 w-fit border-b-2 pb-2 text-3xl font-semibold">My Skills</h2>
      <ul className="mx-auto grid w-fit grid-cols-4 justify-items-center gap-4">
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-2">
          <HtmlLogo className="h-20 w-20" />
          HTML
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-2">
          <CssLogo className="h-20 w-20" />
          CSS
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-2">
          <JavascriptLogo className="h-20 w-20" />
          JavaScript
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-2">
          <TailwindcssLogo className="h-20 w-20" />
          Tailwind CSS
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-2">
          <ReactLogo className="h-20 w-20" />
          React
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-2">
          <NextjsLogo className="h-20 w-20 invert" />
          Next.js 13
        </li>
        <li className="flex aspect-square w-32 flex-col items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-2">
          <TypescriptLogo className="h-20 w-20" />
          Typescript
        </li>
      </ul>
    </>
  );
}
