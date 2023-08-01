import cn from "@/utils/cn";
import { ComponentProps } from "react";

type SectionProps = ComponentProps<"div">;

export default function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("container my-8 space-y-4", className)} {...props}>
      {children}
    </section>
  );
}
