import cn from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, Ref, forwardRef } from "react";

const buttonVariants = cva("rounded-md inline-flex items-center justify-center cursor-pointer", {
  variants: {
    variant: {
      primary: "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition",
      secondary: "",
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
});

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
