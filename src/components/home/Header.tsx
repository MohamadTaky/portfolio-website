"use client";
import { motion, AnimatePresence } from "framer-motion";
import ActiveLink from "./ActiveLink";
import * as DropDown from "@radix-ui/react-dropdown-menu";
import Button from "@/components/shared/Button";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="z-50 font-semibold shadow-lg">
      <div className="container">
        <DropDown.Root open={open} onOpenChange={setOpen}>
          <DropDown.Trigger asChild id="dropdown">
            <Button variant="ghost" className="gap-0 text-lg md:hidden">
              M<span className="relative top-1">T</span>
            </Button>
          </DropDown.Trigger>
          <AnimatePresence>
            {open && (
              <DropDown.Portal forceMount>
                <DropDown.Content
                  asChild
                  className="z-50 flex flex-col overflow-hidden rounded-b-md bg-white border md:hidden"
                  loop
                >
                  <motion.nav
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <DropDown.Item asChild className="data-[highlighted]:text-black/80">
                      <ActiveLink mobile href="/">
                        Home
                      </ActiveLink>
                    </DropDown.Item>
                    <DropDown.Item asChild className="data-[highlighted]:text-black/80">
                      <ActiveLink mobile href="/projects">
                        My work
                      </ActiveLink>
                    </DropDown.Item>
                    <DropDown.Item asChild className="data-[highlighted]:text-black/80">
                      <ActiveLink mobile href="/about">
                        About
                      </ActiveLink>
                    </DropDown.Item>
                    <DropDown.Item asChild className="data-[highlighted]:text-black/80">
                      <ActiveLink mobile href="/contact">
                        Contact
                      </ActiveLink>
                    </DropDown.Item>
                  </motion.nav>
                </DropDown.Content>
              </DropDown.Portal>
            )}
          </AnimatePresence>
        </DropDown.Root>
        <nav className="hidden md:flex">
          <span className="mr-auto px-4 py-2 text-lg">
            M<span className="relative top-1">T</span>
          </span>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/projects">My work</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
        </nav>
      </div>
    </header>
  );
}
