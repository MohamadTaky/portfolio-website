import z from "zod";

export const contactFormValidator = z.object({
  from_name: z.string(),
  from_email: z.string(),
  message: z.string(),
});
export type ContactFormType = z.infer<typeof contactFormValidator>;
