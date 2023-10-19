import { contactFormValidator } from "@/utils/validators/contactFormValidator";
import emailjs from "@emailjs/nodejs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const formParams = contactFormValidator.parse(data);
    await emailjs.send(process.env.SERVICE_ID!, process.env.TEMPLATE_ID!, formParams, {
      publicKey: process.env.PUBLIC_KEY!,
      privateKey: process.env.PRIVATE_KEY!,
    });
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
