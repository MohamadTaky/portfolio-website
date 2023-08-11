import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Section className="w-fit space-y-4 leading-7">
      <h2 className="text-3xl font-semibold">Hi there !</h2>
      <p className="max-w-[70ch]">
        My name is Mohamad, I am a 21 years old computer engineering student and self taught web developer
        based in Hama, Syria.
      </p>
      <article className="space-y-2">
        <h2 className="w-fit border-b-2 border-black text-xl font-semibold">Technical details</h2>
        <p className="max-w-[70ch]">
          I've been learning web development for about two years
          <br />I feel confident in HTML, CSS, Javascript and I use React for my personal projects
          <br />
          in addition to my expertise with React, I have recently stumbled upon <b>Next.js 13</b> (the react
          framework as they call themselves) which brings significant improvements to my development workflow
          and codebase with the help of its new intuitive routing system and performance capabilities and I've
          been using it to build my latest project which you can find <b>here</b>.
        </p>
      </article>
      <article className="space-y-2">
        <h2 className="w-fit border-b-2 border-black text-xl font-semibold">Education</h2>
        <p className="max-w-[70ch]">
          I am currently a third-year computer engineering student at Al-Wataniya Private University (WPU)
          maintaining a GPA of 3.75 placing me as the top-ranking student among my colleagues.
        </p>
      </article>
      <article className="space-y-2">
        <h2 className="w-fit border-b-2 border-black text-xl font-semibold">Personal Interests</h2>
        <h3 className="text-lg font-semibold">Problem solving :</h3>
        <p className="max-w-[70ch]">
          I'm interested in problem solving on platforms like <b>Codeforces</b>.<br />
          Although I am currently not that great at it, I keep working on improving my skills and I'm
          constantly trying to strike a balance between web-development, problem solving and university
          studies and I invest time in programming contests, algorithms and data structures to enhance my
          problem solving abilities.
        </p>
        <p className="max-w-[70ch]">
          In the future, I aspire to participate in the International Collegiate Programming Contest{" "}
          <b>(ICPC)</b>, maybe in the coming year. This goal drives me to further develop my problem solving
          skills.
        </p>
      </article>
    </Section>
  );
}
