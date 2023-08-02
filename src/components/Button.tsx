import cn from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, Ref, forwardRef } from "react";

const buttonVariants = cva(
  "rounded-md text-sm md:text-base flex items-center justify-center cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-black/80 hover:bg-black/90 active:bg-black transition text-white",
        secondary: "",
        inverted: "text-black bg-white transition",
      },
      size: {
        default: "px-3 py-1.5 gap-1.5",
        sm: "px-2 py-1 gap-2",
        lg: "px-4 py-2 gap-4",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

function Button({ className, size, variant, children, ...props }: ButtonProps, ref: Ref<HTMLButtonElement>) {
  return (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
}

export default forwardRef(Button);
export { buttonVariants };
