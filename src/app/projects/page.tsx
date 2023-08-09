import Section from "@/components/Section";
import Project from "./components/Project";
import projects from "public/projects.json";

export default async function ProjectsPage() {
  return (
    <Section className="space-y-16">
      <h2 className="mx-auto w-fit border-b-2 border-black pb-2 text-3xl font-semibold">My projects</h2>
      {projects.map(({ id, ...props }) => (
        <Project key={id} {...props} />
      ))}
    </Section>
  );
}
