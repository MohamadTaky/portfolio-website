"use client";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

type ActiveLinkProps = Exclude<
  { mobile?: boolean } & LinkProps & HTMLAttributes<HTMLAnchorElement>,
  { classname: string }
>;

export default function ActiveLink({ href, mobile, className, children, ...props }: ActiveLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      data-active={active}
      className="relative inline-block px-4 py-2 text-black/60 data-[active=true]:text-black data-[active=false]:hover:text-black/80"
      {...props}
    >
      {children}
      {active && !mobile && (
        <motion.div layoutId="active-link" className="absolute bottom-0 left-0 h-1 w-full bg-black" />
      )}
    </Link>
  );
}
