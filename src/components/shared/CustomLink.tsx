import cn from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

export default function CustomLink({ children, className, download, ...props }: CustomLinkProps) {
  return download ? (
    <a {...props} download={download} className={cn("group relative font-bold text-current transition", className)}>
      {children}
      <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-bottom-right scale-x-0 bg-current transition duration-300 group-hover:origin-bottom-left group-hover:scale-x-100" />
    </a>
  ) : (
    <Link {...props} className={cn("group relative font-bold text-current transition", className)}>
      {children}
      <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-bottom-right scale-x-0 bg-current transition duration-300 group-hover:origin-bottom-left group-hover:scale-x-100" />
    </Link>
  );
}
