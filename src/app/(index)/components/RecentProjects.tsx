import Button from "@/components/Button";
import Section from "@/components/Section";
import Link from "next/link";

export default function RecentProjects() {
  return (
    <Section>
      <h2 className="mx-auto w-fit border-b-2 border-black pb-2 text-3xl font-semibold">Recent projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Type fusion</h3>
          <p className="max-w-[60ch]">
            TypeFusion is a web application that tests your typing speed and accuracy and gives you an
            overview about your performance, the app also features a simple leaderboard that lists the top ten
            users based on the score of their latest performed test.
          </p>
          <p className="font-semibold">Technologies used:</p>
          <ul className="list-disc space-y-2">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Mongodb</li>
          </ul>
        </div>
        <div className="flex flex-col items-center rounded-md border-b-2 bg-red-500 p-2">
          <div className="m-auto">placeholder (screenshot)</div>
          <Button asChild>
            <Link href="/projects">View all</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
