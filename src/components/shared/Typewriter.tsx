"use client";
import { stagger, useAnimate } from "framer-motion";
import { HTMLAttributes, useEffect } from "react";

type TypeWriterProps = HTMLAttributes<HTMLParagraphElement> & {
  text: string;
  interval?: number;
};
export default function TypeWriter({ text, interval = 0.1, ...props }: TypeWriterProps) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const f = async () => {
      await animate(".char", { opacity: [0, 1] }, { delay: stagger(interval) });
      animate(".caret", { opacity: [0, 1, 0], visibility: "visible" }, { duration: 0.5, repeat: 4 });
    };
    f();
  }, [animate, interval]);
  return (
    <p ref={scope} {...props}>
      {text.split("").map((c, i) => (
        <span className="char" key={i}>
          {c}
        </span>
      ))}
      <span className="caret invisible relative left-2">|</span>
    </p>
  );
}
