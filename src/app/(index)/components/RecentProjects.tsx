import Section from "@/components/Section";
import projects from "public/projects.json";
import Project from "@/app/projects/components/Project";
import Button from "@/components/Button";
import Link from "next/link";

export default function RecentProjects() {
  return (
    <Section>
      <Project {...projects[0]} />
      <Button className="mx-auto">
        <Link href="/projects">View all</Link>
      </Button>
    </Section>
  );
}
