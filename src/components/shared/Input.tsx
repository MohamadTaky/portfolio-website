import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function Input({ id, placeholder, ...props }: InputProps) {
  return (
    <div className="relative isolate">
      <input
        id={id}
        placeholder={placeholder}
        className="peer w-full rounded-md border-none bg-transparent outline-none ring-1 ring-black/30 transition-shadow placeholder:opacity-0 focus:ring-black"
        type="text"
        {...props}
      />
      {placeholder && (
        <label
          className="pointer-events-none absolute left-3 top-1/2 z-10 origin-left -translate-y-9 scale-75 font-semibold text-black/50 transition-all
          peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:text-black/50
          peer-focus:-translate-y-9 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-black"
          htmlFor={id}
        >
          <div className="absolute bottom-0.5 left-1/2 h-[50%] w-[130%] -translate-x-1/2 rounded-md bg-white" />
          <span className="relative">{placeholder}</span>
        </label>
      )}
    </div>
  );
}
