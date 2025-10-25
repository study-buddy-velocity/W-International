import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    const response = await resend.emails.send({
      from: "Your App <onboarding@resend.dev>", // must be verified in Resend
      to: "wipes033@gmail.com",
      subject: subject || "New contact form message",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email || ""}</p>
        <p><strong>Phone:</strong> ${phone || ""}</p>
        <p><strong>Message:</strong> ${message || ""}</p>
      `,
    });

    return NextResponse.json({ success: true, response }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}