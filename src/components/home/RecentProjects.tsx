import Project from "@/components/projects/Project";
import Button from "@/components/shared/Button";
import Link from "next/link";
import projects from "public/projects.json";

export default function RecentProjects() {
  return (
    <section className="my-20">
      <h2 className="mx-auto w-fit border-b-2 border-black pb-2 text-3xl font-semibold">Recent Projects</h2>
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map(({ id, ...project }) => (
          <Project key={id} {...project} />
        ))}
      </div>
      <Button asChild className="mx-auto mt-8">
        <Link href="/projects">View all</Link>
      </Button>
    </section>
  );
}
