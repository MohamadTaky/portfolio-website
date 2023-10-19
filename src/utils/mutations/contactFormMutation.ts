import { ContactFormType } from "../validators/contactFormValidator";
import wait from "@/utils/wait";
export default async function contactFormMutation(data: ContactFormType) {
  await wait(2000);
  try {
    const response = await fetch("api/contact", { method: "POST", body: JSON.stringify(data) });
    if (!response.ok) throw new Error();
  } catch (error) {
    throw error;
  }
}
