import Button from "@/components/Button";
import Section from "@/components/Section";

export default function AboutMe() {
  return (
    <Section className="container my-8 space-y-4">
      <h2 className="mx-auto w-fit border-b-2 border-black pb-2 text-3xl font-semibold">About me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde laudantium corporis possimus
          ipsum officiis eligendi dolore consectetur deleniti fugiat, delectus dolorum. Asperiores nemo
          adipisci vero ea nostrum nesciunt eveniet.
        </div>
        <div className="space-y-4">
          <p className="max-w-[60ch] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio natus commodi itaque sit illo
            hic. Nulla possimus soluta repellendus cupiditate aliquam voluptatem nisi, dolor perspiciatis
            omnis deserunt qui, voluptate repudiandae excepturi doloremque suscipit quasi, nihil hic assumenda
            facere! Nulla ipsa ex, dicta sed vitae at corporis cumque rerum minus placeat! Ullam tenetur eos
            eum accusamus suscipit deserunt eveniet repellat. Incidunt inventore quasi est facilis sint
            cupiditate, dolore quae nisi, eligendi, aliquid earum officiis reiciendis fugit necessitatibus
            suscipit fugiat temporibus nihil dolor? Doloremque cumque, qui incidunt natus aliquid dolor magni
            eos, illo recusandae debitis accusamus nulla odit excepturi alias maxime?
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button>Read more</Button>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-black/80 p-1 text-white">
              or
            </span>
            <Button>Download my cv</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
