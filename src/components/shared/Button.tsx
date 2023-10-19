import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";

const buttonVariants = cva(
  "relative flex items-center justify-center w-fit cursor-pointer rounded-md transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-70",
  {
    variants: {
      variant: {
        primary:
          "bg-black/80 text-white hover:bg-black/90 focus:bg-black/90 active:bg-black disabled:bg-black",
        inverted: "text-black bg-white",
        ghost: "text-black/80 hover:text-black focus:text-black disabled:text-black",
      },
      size: {
        default: "gap-1.5 px-3 py-1.5 text-sm md:text-base",
        sm: "gap-2 px-2 py-1 text-sm",
        lg: "gap-4 px-4 py-2 text-2xl font-semibold",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  }
);

export type ButtonProps = { asChild?: boolean } & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

function Button(
  { variant, size, asChild, children, className, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return asChild ? (
    <Slot ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </Slot>
  ) : (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
}

export default forwardRef(Button);
