import ContactForm from "../../components/contact/ContactForm";
import Section from "@/components/shared/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Section className="mt-0 p-0 md:mt-16 md:p-4">
      <ContactForm />
    </Section>
  );
}
