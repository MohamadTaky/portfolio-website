"use client";
import cn from "@/utils/cn";
import { HTMLAttributes, useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
export default function Loader() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(scope.current, { opacity: [0.5, 1] }, { repeat: Infinity, duration: 1, repeatType: "reverse" });
    animate(".cell", { scaleX: [0, 1] }, { duration: 0.07, delay: stagger(0.07) });
  }, [animate, scope]);
  return (
    <div ref={scope} className="parent parent container mx-auto my-8 max-w-fit space-y-1">
      {/* 1 */}
      <Cell className="w-28 bg-red-500" />
      {/* 2 */}
      <Row>
        <Cell className="w-12 bg-indigo-500" />
        <Cell className="w-12 bg-green-500" />
        <Cell className="w-4 bg-orange-500" />
      </Row>
      {/* 3 */}
      <Cell className="w-12 bg-indigo-500" />
      {/* 4 */}
      <Row>
        <Cell className="ml-2 w-12 bg-indigo-500" />
        <Cell className="w-16 bg-green-500" />
        <Cell className="w-12 bg-orange-500" />
      </Row>
      {/* 5 */}
      <Row>
        <Cell className="ml-2 w-10 bg-indigo-500" />
        <Cell className="w-20 bg-black" />
        <Cell className="w-10 bg-indigo-500" />
      </Row>
      {/* 6 */}
      <Cell className="w-12 bg-indigo-500" />
      {/* 7 */}
      <Cell className="ml-2 w-14 bg-indigo-500" />
      {/* 8 */}
      <Cell className="ml-4 w-14 bg-indigo-500" />
      {/* 9 */}
      <Cell className="ml-6 w-16 bg-indigo-500" />
      {/* 10 */}
      <Row>
        <Cell className="ml-8 w-10 bg-indigo-500" />
        <Cell className="w-12 bg-green-500" />
        <Cell className="w-16 bg-orange-500" />
      </Row>
      {/* 11 */}
      <Row>
        <Cell className="ml-10 w-10 bg-indigo-500" />
        <Cell className="w-10 bg-green-500" />
        <Cell className="w-4 bg-orange-500" />
        <Cell className="w-12 bg-green-500" />
        <Cell className="w-16 bg-orange-500" />
      </Row>
      {/* 12 */}
      <Row>
        <Cell className="ml-10 w-8 bg-indigo-500" />
        <Cell className="w-12 bg-green-500" />
        <Cell className="w-16 bg-orange-500" />
        <Cell className="w-16 bg-black" />
        <Cell className="w-8 bg-indigo-500" />
      </Row>
      {/* 13 */}
      <Row>
        <Cell className="ml-10 w-8 bg-indigo-500" />
        <Cell className="w-40 bg-black" />
        <Cell className="w-8 bg-indigo-500" />
      </Row>
      {/* 14 */}
      <Row>
        <Cell className="ml-8 w-10 bg-indigo-500" />
      </Row>
      {/* 15 */}
      <Row>
        <Cell className="ml-8 w-10 bg-indigo-500" />
        <Cell className="w-12 bg-green-500" />
        <Cell className="w-16 bg-orange-500" />
      </Row>
      {/* 16 */}
      <Row>
        <Cell className="ml-10 w-10 bg-indigo-500" />
        <Cell className="w-10 bg-green-500" />
        <Cell className="w-4 bg-orange-500" />
        <Cell className="w-12 bg-green-500" />
        <Cell className="w-16 bg-orange-500" />
      </Row>
      {/* 17 */}
      <Row>
        <Cell className="ml-10 w-4 bg-indigo-500" />
        <Cell className="w-10 bg-green-500" />
        <Cell className="w-16 bg-orange-500" />
        <Cell className="w-10 bg-black" />
        <Cell className="w-4 bg-indigo-500" />
      </Row>
      {/* 18 */}
      <Row>
        <Cell className="ml-10 w-4 bg-indigo-500" />
        <Cell className="w-24 bg-black" />
        <Cell className="w-4 bg-indigo-500" />
      </Row>
      {/* 19 */}
      <Row>
        <Cell className="ml-8 w-10 bg-indigo-500" />
      </Row>
      {/* 21 */}
      <Row>
        <Cell className="ml-8 w-10 bg-indigo-500" />
      </Row>
      {/* 22 */}
      <Row>
        <Cell className="ml-10 w-10 bg-indigo-500" />
        <Cell className="w-10 bg-green-500" />
        <Cell className="w-4 bg-orange-500" />
        <Cell className="w-12 bg-green-500" />
        <Cell className="w-16 bg-orange-500" />
      </Row>
      {/* 23 */}
      <Row>
        <Cell className="ml-10 w-4 bg-indigo-500" />
        <Cell className="w-10 bg-green-500" />
        <Cell className="w-16 bg-orange-500" />
        <Cell className="w-16 bg-black" />
        <Cell className="w-4 bg-indigo-500" />
      </Row>
      {/* 24 */}
      <Row>
        <Cell className="ml-10 w-4 bg-indigo-500" />
        <Cell className="w-24 bg-black" />
      </Row>
      {/* 25 */}
      <Row>
        <Cell className="ml-10 w-24 bg-black" />
        <Cell className="w-4 bg-indigo-500" />
      </Row>
      {/* 26 */}
      <Cell className="ml-8 w-10 bg-indigo-500" />
      {/* 27 */}
      <Cell className="ml-6 w-16 bg-indigo-500" />
      {/* 28 */}
      <Cell className="ml-4 w-14 bg-indigo-500" />
      {/* 29 */}
      <Cell className="ml-2 w-14 bg-indigo-500" />
      {/* 30 */}
      <Cell className="w-12 bg-indigo-500" />
    </div>
  );
}
//13

function Row({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex gap-1" {...props}>
      {children}
    </div>
  );
}

function Cell({ className }: { className?: string }) {
  return <div className={cn("cell h-2.5 origin-left rounded-md", className)} />;
}
