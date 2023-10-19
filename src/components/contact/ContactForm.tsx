"use client";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import cn from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2Icon } from "lucide-react";
import { FormEvent } from "react";
import { useMutation } from "react-query";
import contactFormMutation from "@/utils/mutations/contactFormMutation";
import { contactFormValidator } from "@/utils/validators/contactFormValidator";

export default function ContactForm() {
  const { mutate, isLoading, isSuccess, isError, isIdle } = useMutation(contactFormMutation);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const params = contactFormValidator.parse(Object.fromEntries(formData.entries()));
    mutate(params);
  };
  return (
    <div className="mx-auto flex max-w-4xl flex-col overflow-hidden md:flex-row md:rounded-lg md:border md:shadow-lg">
      <h2 className="bg-black p-4 text-lg font-semibold leading-relaxed text-white md:text-xl">
        I would love to hear your thoughts
        <br />
        <span className="text-indigo-600">Get in touch !</span>
      </h2>
      <form className="flex-1 space-y-4 p-6" onSubmit={handleSubmit}>
        <Input required type="email" id="email" name="from_email" placeholder="Email" />
        <Input required id="name" name="from_name" placeholder="Name" />
        <textarea
          minLength={10}
          required
          name="message"
          className="scrollbar-rounded-md min-h-[200px] w-full resize-none rounded-md border-none outline-none !ring-1 ring-black/30 transition scrollbar-thin focus:ring-black"
        />
        <Button disabled={isLoading} type="submit" className="relative mx-auto w-32">
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute animate-spin"
              >
                <Loader2Icon />
              </motion.div>
            )}
          </AnimatePresence>
          <p className={isLoading ? "opacity-0" : "opacity-100"}>Send</p>
        </Button>
        <p
          className={cn(
            "min-h-[1.5rem] text-center text-sm transition-opacity duration-200",
            isSuccess ? "text-green-500" : "",
            isError ? "text-red-500" : "",
            isLoading || isIdle ? "opacity-0" : "opacity-100"
          )}
        >
          {isSuccess ? "your message has been recieved, Thank you !" : ""}
          {isError ? "An error occured, please try again" : ""}
        </p>
      </form>
    </div>
  );
}
