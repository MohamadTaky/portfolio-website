import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function Input({ id, placeholder }: InputProps) {
  return (
    <div className="relative isolate">
      <input
        id={id}
        placeholder={placeholder}
        className="peer rounded-md bg-white px-3 py-1.5 outline-none ring-2 ring-black/50 transition-shadow placeholder:opacity-0 focus:ring-black"
        type="text"
      />
      {placeholder && (
        <label
          className="absolute left-3 top-1/2 z-10 -translate-y-8 text-sm font-semibold transition-all text-black/50
          peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:font-normal peer-placeholder-shown:text-black/50
          peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-black"
          htmlFor={id}
        >
          <div className="absolute bottom-0.5 left-1/2 h-2 w-[130%] -translate-x-1/2 rounded-md bg-white" />
          <span className="relative">{placeholder}</span>
        </label>
      )}
    </div>
  );
}
