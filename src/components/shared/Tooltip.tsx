"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TooltipProps = {
  tooltip: ReactNode;
  children: ReactNode;
};

export default function Tooltip({ children, tooltip }: TooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root open={open} onOpenChange={setOpen}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <AnimatePresence>
          {open && (
            <RadixTooltip.Portal forceMount>
              <RadixTooltip.Content sideOffset={5}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-md border border-gray-300 bg-white p-2 text-sm"
                >
                  {tooltip}
                  <RadixTooltip.Arrow width={20} height={10} className="relative top-[5px] fill-gray-300" />
                </motion.span>
              </RadixTooltip.Content>
            </RadixTooltip.Portal>
          )}
        </AnimatePresence>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
