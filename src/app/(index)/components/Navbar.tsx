import ActiveLink from "./ActiveLink";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="shadow-lg">
      <div className="container hidden font-semibold sm:flex">
        <p className="mr-auto px-4 py-2 text-lg">
          M<span className="relative top-1">T</span>
        </p>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/projects">My work</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </div>
      <div className="group relative w-fit p-2 sm:hidden">
        <MenuIcon />
        <div className="absolute top-full hidden flex-col rounded-md border bg-white group-hover:flex">
          <ActiveLink mobile href="/">
            Home
          </ActiveLink>
          <ActiveLink mobile href="/projects">
            My work
          </ActiveLink>
          <ActiveLink mobile href="/about">
            About
          </ActiveLink>
          <ActiveLink mobile href="/contact">
            Contact
          </ActiveLink>
        </div>
      </div>
    </nav>
  );
}
