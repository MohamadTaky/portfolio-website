"use client";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

type ActiveLinkProps = Exclude<LinkProps & HTMLAttributes<HTMLAnchorElement>, { classname: string }>;

export default function ActiveLink({ href, children, ...props }: ActiveLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      data-active={active}
      className="relative px-3 py-1.5 text-lg text-gray-500 data-[active=true]:text-indigo-600 data-[active=false]:hover:text-indigo-400"
      {...props}
    >
      {children}
      {active && (
        <motion.div layoutId="active-link" className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600" />
      )}
    </Link>
  );
}
