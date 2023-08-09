import Section from "@/components/Section";
import projects from "public/projects.json";
import Project from "@/app/projects/components/Project";

export default function RecentProjects() {
  return (
    <Section>
      <Project {...projects[0]} />
    </Section>
  );
}
