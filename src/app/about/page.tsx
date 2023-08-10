import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Section>
      <h2 className="mx-auto w-fit border-b-2 border-black pb-2 text-3xl font-semibold">About me</h2>
    </Section>
  );
}
