import Section from "@/components/shared/Section";
import Project from "../../components/projects/Project";
import projects from "public/projects.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  return (
    <Section className="p-4">
      <h2 className="text-3xl font-semibold">Here is a list of some of my projects :</h2>
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, ...props }) => (
          <Project key={id} {...props} />
        ))}
      </div>
    </Section>
  );
}