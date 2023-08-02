import Button from "@/components/Button";
import Section from "@/components/Section";
import Link from "next/link";

export default function ContactMe() {
  return (
    <Section>
      <h2 className="mx-auto w-fit border-b-2 border-black pb-2 text-3xl font-semibold">Contact me</h2>
      <div className="w-fit space-y-4">
        <h3 className="text-2xl">
          I would love to hear from you, <br />
          get in touch
        </h3>
        <Button className="mx-auto" asChild>
          <Link href="/contact">Contact me</Link>
        </Button>
      </div>
    </Section>
  );
}
