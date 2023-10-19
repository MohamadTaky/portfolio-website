import Button from "@/components/shared/Button";
import Section from "@/components/shared/Section";
import Image from "next/image";
import DeveloperIllustration from "public/images/developer-illustration.jpg";
import Link from "next/link";

export default function AboutMe() {
  return (
    <Section container>
      <h2 className="mx-auto w-fit border-b-2 border-black pb-2 text-3xl font-semibold">About me</h2>
      <div className="grid items-center gap-4 md:grid-cols-2">
        <article className="relative mx-auto max-w-[60ch] space-y-4 leading-relaxed">
          <p>
            Hi There ! I am Mohamad, a Syrian computer engineering student at Al&#8209;Wataniya Private University (WPU) with a
            strong passion for web development.
          </p>
          <p>
            I&apos;ve been teaching myself web development for about two years and I mainly work with HTML, CSS, JavaScript
            (TypeScript to be more precise) and React.
          </p>
          <p>I enjoy building web applications that are both interactive and user-friendly.</p>
          <div className="flex items-center gap-2">
            <Button className="max-md:mx-auto" asChild>
              <Link href="/about">Read more</Link>
            </Button>
            <span>or</span>
            <Button className="max-md:mx-auto" asChild>
              <a href="images/developer-illustration.jpg" download>
                Download resume
              </a>
            </Button>
          </div>
        </article>
        <Image className="rounded-md" src={DeveloperIllustration} alt="" />
      </div>
    </Section>
  );
}
