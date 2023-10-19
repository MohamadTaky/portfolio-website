"use client";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

type ActiveLinkProps = Exclude<
  { mobile?: boolean } & LinkProps & HTMLAttributes<HTMLAnchorElement>,
  { classname: string }
>;

function ActiveLink(
  { href, mobile, className, children, ...props }: ActiveLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      ref={ref}
      href={href}
      data-active={active}
      className={cn(
        "relative inline-block px-4 py-2 text-black/60 data-[active=true]:text-black data-[active=false]:hover:text-black/80 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
      {active && !mobile && (
        <motion.div layoutId="active-link" className="absolute bottom-0 left-0 h-1 w-full bg-black" />
      )}
    </Link>
  );
}

export default forwardRef(ActiveLink);
