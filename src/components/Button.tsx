import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

const buttonVariants = cva("rounded-md flex w-fit transition items-center justify-center cursor-pointer", {
  variants: {
    variant: {
      primary: "bg-black/80 hover:bg-black/90 active:bg-black text-white",
      inverted: "text-black bg-white",
      ghost: "text-black/80 hover:text-black",
    },
    size: {
      default: "px-3 py-1.5 gap-1.5 text-sm md:text-base",
      sm: "px-2 py-1 gap-2 text-sm",
      lg: "px-4 py-2 gap-4 text-2xl font-semibold",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "primary",
  },
});

type ButtonProps = { asChild?: boolean } & HTMLAttributes<HTMLButtonElement> &
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
export { buttonVariants };
