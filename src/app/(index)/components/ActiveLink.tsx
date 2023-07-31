"use client";
import { motion, useMotionValue } from "framer-motion";
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
			className="px-3 relative py-1.5 text-gray-500 data-[active=true]:text-blue-500 data-[active=false]:hover:text-blue-300"
			{...props}>
			{children}
			{active && (
				<motion.div layoutId="active-link" className="absolute left-0 bottom-0 w-full h-1 bg-blue-500" />
			)}
		</Link>
	);
}
