import cn from "@/utils/cn";
import { ComponentProps } from "react";

type SectionProps = ComponentProps<"div"> & {
  container?: boolean;
};

export default function Section({ className, children, container, ...props }: SectionProps) {
  return (
    <section className={cn("my-16 space-y-4", container ? "container" : "", className)} {...props}>
      {children}
    </section>
  );
}
