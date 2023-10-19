import Section from "@/components/shared/Section";
import CustomLink from "@/components/shared/CustomLink";
import { Metadata } from "next";
import { differenceInYears } from "date-fns";

export const metadata: Metadata = {
  title: "About",
};
export default function AboutPage() {
  const age = differenceInYears(Date.now(), new Date("2002-2-6Z"));
  return (
    <Section container className="w-fit leading-7">
      <h2 className="text-3xl font-semibold">Hi there !</h2>
      <p className="max-w-[70ch]">
        Here is some additional information about who I am and what I like to do;
        <br />
        some of these details include personal information and interests.
      </p>
      <p className="max-w-[70ch]">
        If you just want to view my resume, you can download it from{" "}
        <CustomLink className="text-blue-700" href="images/developer-illustration.jpg" download>
          here.
        </CustomLink>
      </p>
      <p className="max-w-[70ch]">
        My name is Mohamad, I am a {age} years old computer engineering student and self taught web developer based in Hama,
        Syria.
      </p>
      <article className="space-y-2">
        <h2 className="w-fit border-b-2 border-black text-xl font-semibold">Technical details</h2>
        <p className="max-w-[70ch]">
          I&apos;ve been learning web development for about two years
          <br />I feel confident in HTML, CSS and Javascript, and I use React for my personal projects
          <br />
          in addition to my experience with React, I have come across{" "}
          <CustomLink target="_blank" className="text-blue-700" href="https://nextjs.org">
            Next.js 13
          </CustomLink>{" "}
          (the React framework as they call themselves) which brings significant improvements to the development workflow and
          codebase with the help of its intuitive routing system and performance capabilities and I&apos;ve been using it to build
          my latest project which you can find{" "}
          <CustomLink target="_blank" className="text-blue-700" href="https://taky-chess.vercel.app">
            here
          </CustomLink>
          .
        </p>
      </article>
      <article className="space-y-2">
        <h2 className="w-fit border-b-2 border-black text-xl font-semibold">Education</h2>
        <p className="max-w-[70ch]">
          I am currently a third-year computer engineering student at Al-Wataniya Private University{" "}
          <CustomLink target="_blank" className="text-blue-700" href="https://wpu.edu.sy">
            WPU
          </CustomLink>{" "}
          maintaining a GPA of 3.75 placing me as the top-ranking student among my colleagues.
        </p>
      </article>
      <h2 className="w-fit border-b-2 border-black text-xl font-semibold">Personal Interests</h2>
      <article className="space-y-2">
        <h3 className="text-lg font-semibold">Problem solving</h3>
        <p className="max-w-[70ch]">
          I&apos;ve recently started focusing more on problem solving on platforms like{" "}
          <CustomLink target="_blank" className="text-blue-700" href="https://codeforces.com/profile/Mohamad_Taky">
            Codeforces
          </CustomLink>
          and{" "}
          <CustomLink target="_blank" className="text-blue-700" href="https://leetcode.com/mohamadtaky2002">
            Leet code
          </CustomLink>{" "}
          and I&apos;m enjoying it.
          <br />
          Although I am currently not that great, I keep working on improving my skills and I&apos;m constantly trying to strike a
          balance between web-development, problem solving and university studies and I invest time learning algorithms and data
          structures to enhance my abilities.
        </p>
        <p className="max-w-[70ch]">
          In the future, I aspire to participate in the International Collegiate Programming Contest - ICPC, maybe in the coming
          year. This goal drives me to further develop my problem solving skills.
        </p>
      </article>
    </Section>
  );
}
